import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for your navigation and route props
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  EventDetails: { event: any }; // Include 'EventDetails' here
};

type EventDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EventDetails'
>;

type EventDetailsScreenRouteProp = RouteProp<RootStackParamList, 'EventDetails'>;

type Props = {
  navigation: EventDetailsScreenNavigationProp;
  route: EventDetailsScreenRouteProp;
};

const EventDetailsScreen = ({ navigation, route }: Props) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: event.imageURL }} style={styles.image} />
        <Text style={styles.title}>{event.title}</Text>
      </View>
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
};
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EventDetailsScreen;
