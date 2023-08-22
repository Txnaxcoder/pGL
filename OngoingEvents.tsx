import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';  // assuming the type is defined in App.tsx

import firebase from '@react-native-firebase/app';

type OngoingEventsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: OngoingEventsScreenNavigationProp;
};

const OngoingEvents = ({ navigation }: Props) => {
    const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventCollection = firestore().collection('events');
      const snapshot = await eventCollection.get();
      const allEvents = snapshot.docs.map((doc: any) => doc.data());
      const now = firebase.firestore.Timestamp.now();
      const ongoingEvents = allEvents.filter(event => 
        event.startDate.toDate() <= now.toDate() && event.endDate.toDate() >= now.toDate()
      );
      setEvents(ongoingEvents);
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.imageURL }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OngoingEvents;
