import React from 'react';
import { View, useWindowDimensions, Text, Button } from 'react-native';
import { TabView, SceneMap, Route } from 'react-native-tab-view';
import PastEventsScreen from './PastEventsScreen';
import FutureEventsScreen from './FutureEventsScreen';
import OngoingEvents from './OngoingEvents';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {  TabBar } from 'react-native-tab-view';
import { StyleSheet } from 'react-native';




// Import the RootStackParamList from App.tsx
import { RootStackParamList } from './App';  // Remove the .tsx extension

//... rest of the code

type EventTabsNavigationProp = StackNavigationProp<RootStackParamList>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type OngoingEventsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type EventTabsProps = {
  navigation: EventTabsNavigationProp;
};

const EventTabs: React.FC<EventTabsProps> = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  type Route = {
    key: string;
    name: keyof RootStackParamList;
}

const routes: Route[] = [
  { key: 'Past', name: 'PastEventsScreen' },
  { key: 'Ongoing', name: 'OngoingEvents' },
  { key: 'Future', name: 'FutureEventsScreen' }
];



  const renderScene = ({ route }: { route: RouteProp<RootStackParamList, keyof RootStackParamList> }) => {

    switch (route.key) {
      case 'Past':
        return <PastEventsScreen navigation={navigation as HomeScreenNavigationProp} />;
      case 'Ongoing':
        return <OngoingEvents navigation={navigation as OngoingEventsScreenNavigationProp} />;
      case 'Future':
        return <FutureEventsScreen navigation={navigation as HomeScreenNavigationProp} />;
      default:
        return null;
    }
  };
  const CustomTabBar = (props: any) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TabBar
                {...props}
                style={{ flex: 1 }}
                // ... any other TabBar customization you might want
            />
        </View>
    );
};

  return (
    <>
        <Button title="Go to Payment" onPress={() => navigation.navigate('Paymentpage')} />
        <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
    renderTabBar={props => <CustomTabBar {...props} />}
/>

    </>
);
const styles = StyleSheet.create({
  // ... other styles ...

  tabTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,  // Adjust as needed
  },
});

};


export default EventTabs;
