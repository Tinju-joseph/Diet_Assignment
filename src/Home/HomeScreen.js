/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Button from '../Components/Button';
import TipsContainer from '../Components/TipsContainer';
import MealsContainer from '../Components/MealsContainer';

const HomeScreen = () => {
  const [showNext7Days, setShowNext7Days] = useState(false);
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleNext7Days = () => {
    setShowNext7Days(!showNext7Days);
  };

  const formatDate = date => {
    const options = {weekday: 'short', day: 'numeric', month: 'short'};
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const next7Days = [...Array(7)].map((_, index) => {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + index);
    return nextDay;
  });

  const toggleSelectedDay = day => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  return (
    <ScrollView
      style={styles.main_Container}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.topContainer]}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={{color: '#ffffff', fontSize: 15, fontWeight: '700'}}>
              Daily Routine
            </Text>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '800'}}>
              Basic meal plan
            </Text>
          </View>

          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={require('../../assets/common/user.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            title={'Upgrade Membership'}
            color={'#ffffff'}
            backgroundColorValue={'#167C76'}
          />
        </View>
      </View>

      <View style={styles.dateContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.calendarContainer}>
            <TouchableOpacity onPress={toggleNext7Days}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/common/backArrow.png')}
                  style={styles.calendarIcon}
                />
                <Image
                  source={require('../../assets/common/calendar.png')}
                  style={styles.calendarIcon}
                />
                <Text style={styles.dateText}>
                  {selectedDay ? formatDate(selectedDay) : formatDate(today)}
                </Text>
                <Image
                  source={require('../../assets/common/forArrow.png')}
                  style={styles.forArrow}
                />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cartContainer}>
            <Image
              source={require('../../assets/common/cart.png')}
              style={styles.cartImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {showNext7Days && (
        <ScrollView>
          <View style={styles.calendarDaysContainer}>
            {next7Days.map((day, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => toggleSelectedDay(day)}
                style={[
                  styles.dayItem,
                  selectedDay &&
                  selectedDay.toDateString() === day.toDateString()
                    ? styles.activeDate
                    : null,
                ]}>
                <View key={index} style={styles.dayContainer}>
                  <Text style={styles.weekdayText}>
                    {formatDate(day).split(',')[0]}
                  </Text>
                  <View style={styles.dateSmallContainer}>
                    <Text
                      style={[
                        styles.dayText,
                        selectedDay &&
                        selectedDay.toDateString() === day.toDateString()
                          ? styles.activeDate
                          : day.toDateString() === today.toDateString()
                          ? styles.todayDateText
                          : null,
                      ]}>
                      {formatDate(day).split(',')[1].split(' ')[2]}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <View style={styles.bottomContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Image
              source={require('../../assets/common/mrng.png')}
              style={styles.imageOnLine}
            />
          </View>

          <View style={styles.leftVerticalLine} />

          <View style={styles.rightContent}>
            <Text style={styles.mealTimeText}>MORNING</Text>
            <TipsContainer
              title={'LEARN'}
              subTitle={'Welcome!'}
              bottomText={'by Dr. Andreas Eenfeldt'}
            />
            <MealsContainer
              mealTime={'BREAKFAST'}
              mealName={'Keto turkey plate'}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Image
              source={require('../../assets/common/sun.png')}
              style={styles.imageOnLine}
            />
          </View>

          <View style={styles.leftVerticalLine} />

          <View style={styles.rightContent}>
            <Text style={styles.mealTimeText}>AFTERNOON</Text>
            <TipsContainer
              title={'TIP OF THE DAY'}
              subTitle={'Cleaning out your fridge and pantry'}
              timeValue={'5 min'}
            />
            <TipsContainer
              title={'LEARN'}
              subTitle={'The best motivation for weight loss'}
              timeValue={'3 min'}
            />
            <MealsContainer
              mealTime={'LUNCH'}
              mealName={'Crispy keto tuna burgers'}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Image
              source={require('../../assets/common/nyt.png')}
              style={styles.imageOnLine}
            />
          </View>

          <View style={styles.leftVerticalLine} />

          <View style={styles.rightContent}>
            <Text style={styles.mealTimeText}>EVENING</Text>
            <TipsContainer
              title={'TIP OF THE DAY'}
              subTitle={'Join our community'}
              timeValue={'1 min'}
            />
            <MealsContainer
              mealTime={'DINNER'}
              mealName={'Mexican steak strips with salad and guacamole'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  topContainer: {
    backgroundColor: '#105955',
    height: 130,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  profileContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'grey',
    backgroundColor: '#ffffff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dateContainer: {
    height: 50,
    backgroundColor: '#ffffff',
  },

  cartContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: '#E0F5EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
  mealTimeText: {
    marginLeft: 35,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  calendarContainer: {
    width: 180,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContainer: {
    marginBottom: 30,
    flex: 1,
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  leftVerticalLine: {
    width: 2,
    height: '80%',
    backgroundColor: '#C7C7C7',
    marginTop: 70,
    right: 20,
  },

  rightContent: {
    flex: 1,
  },
  imageOnLine: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '700',
  },
  calendarDaysContainer: {
    height: 70,
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dateSmallContainer: {
    marginTop: 10,
    width: 30,
    height: 30,
    borderRadius: 30,
    // backgroundColor: '#89E5C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDate: {
    backgroundColor: '#89E5C7',
  },
  todayDateText: {},
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  forArrow: {
    width: 22,
    height: 22,
    marginRight: 8,
    bottom: 2,
    marginLeft: 2,
  },
});
export default HomeScreen;
