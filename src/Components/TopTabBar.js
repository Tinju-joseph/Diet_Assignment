import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchInputContainer from './SearchInputContainer';

const Tab = createMaterialTopTabNavigator();

const data = [
  {
    id: '1',
    text: 'Chicken',
    imageUrl: require('../../assets/common/diet.jpg'),
  },
  {id: '2', text: 'Keto', imageUrl: require('../../assets/common/diet.jpg')},
  {id: '3', text: 'Cake', imageUrl: require('../../assets/common/diet.jpg')},
  {id: '4', text: 'Bread', imageUrl: require('../../assets/common/diet.jpg')},
  {id: '5', text: 'Salad', imageUrl: require('../../assets/common/diet.jpg')},
  {id: '6', text: 'Pizza', imageUrl: require('../../assets/common/diet.jpg')},
];

const TabScreen = ({tabName, navigation}) => (
  <View style={styles.tabContent}>
    <View style={styles.searchBarContainer}>
      <SearchInputContainer
        navigationTo={() => {
          navigation.navigate('FilterScreen');
        }}
      />
    </View>
    <ScrollView style={styles.bottomContainer}>
      <TouchableOpacity>
        <Text style={styles.recentText}>RECENT SEARCHES</Text>
        <View style={styles.rowSearchText}>
          <Image
            source={require('../../assets/common/clock.png')}
            style={styles.icon}
          />
          <Text style={styles.timeText}>Meal</Text>
        </View>
        <View style={styles.horizontalLine} />
      </TouchableOpacity>

      {tabName === 'Recipes' && (
        <View>
          <Text style={styles.recentText}>POPULAR</Text>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.itemContainer}>
                <Image source={item.imageUrl} style={styles.image} />
                <Text style={styles.recipeTitleText}>{item.text}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </ScrollView>
  </View>
);

const TopTabScreen = props => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 16},
          indicatorStyle: {
            backgroundColor: '#000000',
            height: 3,
            width: 130,
            marginHorizontal: 30,
          },
        }}>
        <Tab.Screen name="Recipes">
          {({navigation}) => (
            <TabScreen tabName="Recipes" navigation={navigation} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Meal Plan">
          {({navigation}) => (
            <TabScreen tabName="Meal Plan" navigation={navigation} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    backgroundColor: '#D2EFEE',
  },

  bottomContainer: {
    backgroundColor: '#ffffff',
    height: '100%',
    marginTop: 30,
    borderStartStartRadius: 35,
  },
  recentText: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  rowSearchText: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 15,
    height: 15,
  },
  timeText: {
    color: 'grey',
    fontSize: 14,
    padding: 5,
    marginLeft: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#D9DBD7',
    marginHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 15,
  },
  recipeTitleText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TopTabScreen;
