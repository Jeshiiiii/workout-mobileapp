import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Gabriel',
    age: 30,
    gender: 'Male',
    email: 'gab@gmail.com',
    profileImage: require('./assets/snack-icon.png'),
    achievements: [
      { id: 1, title: 'Completed 100 workouts', icon: require('./assets/1.png') },
      { id: 2, title: 'Reached 10,000 steps', icon: require('./assets/2.png') },
      { id: 3, title: 'Lost 5kg weight', icon: require('./assets/3.png') },
      { id: 4, title: 'Completed 30-day challenge', icon: require('./assets/1.png') },
      { id: 5, title: 'Earned Gold Medal', icon: require('./assets/1.png') },
      // Add more achievements as needed
    ],
  };

  const handleViewFriendActivities = () => {
    // Implement handleViewFriendActivities
  };

  const handleAddFriend = () => {
    // Implement handleAddFriend
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate to the login screen
    // Implement any additional logout logic
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.userInfo}>Age: {user.age}</Text>
          <Text style={styles.userInfo}>Gender: {user.gender}</Text>
          <Text style={styles.userInfo}>Email: {user.email}</Text>
        </View>
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {user.achievements.map((achievement) => (
            <View key={achievement.id} style={styles.achievementItem}>
              <Image source={achievement.icon} style={styles.achievementIcon} />
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.whiteButton]} onPress={handleViewFriendActivities}>
            <Text style={[styles.buttonText, styles.whiteButtonText]}>Friend's Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.whiteButton]} onPress={handleAddFriend}>
            <Text style={[styles.buttonText, styles.whiteButtonText]}>Add Friend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add bottom padding for scroll space
  },
  container: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between', // Align content with space between
    flex: 1,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: '#ff3d00',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  achievementsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#ff3d00',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  achievementTitle: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff3d00',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    width: '70%', // Adjust button width
  },
  whiteButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteButtonText: {
    color: 'black',
    textAlign: 'center', // Center align text
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20, // Add bottom margin
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Profile;
