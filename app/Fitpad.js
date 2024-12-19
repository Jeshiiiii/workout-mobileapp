import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

const Fitpad = ({ navigation }) => {
  // Dummy data for lists
  const data = [
    {
      title: '',
      items: [
        {
          id: 1,
          name: 'FULL BODY',
          description: 'A workout routine that targets multiple muscle groups across the entire body in a single session.',
          image: require('./assets/fullbody.png'),
          screen: 'Home', // Add screen name for navigation
        },
        {
          id: 2,
          name: 'UPPER BODY',
          description:'A workout regimen focused on strengthening and toning muscles located in the chest, shoulders, arms, and back.',
          image: require('./assets/upperbody.jpg'),
          screen: 'Home', // Add screen name for navigation
        },
        {
          id: 3,
          name: 'LOWER BODY',
          description: 'A series of exercises designed to build strength and endurance in the muscles of the legs, including the quadriceps, hamstrings, glutes, and calves.',
          image: require('./assets/lowerbody.png'),
          screen: 'Home', // Add screen name for navigation
        },
        {
          id: 4,
          name: 'CARDIO',
          description: 'Exercises primarily targeting the muscles of the abdomen, lower back, and pelvis, essential for stability, balance, and overall strength.',
          image: require('./assets/cardio.jpg'),
          screen: 'Home', // Add screen name for navigation
        },
      ],
    },
  ];

  // Function to render individual item blocks
  const renderItem = ({ item }) => {
    console.log("Item Name:", item.name);
    console.log("Item Description:", item.description);

    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Function to render each flat list
  const renderFlatList = ({ item }) => (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{item.title}</Text>
      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FITPAD</Text>
        <Image source={require('./assets/stats.png')} style={styles.headerImage} />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Your Weekly Goals</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Goal')}>
          <Text style={styles.cardButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={data}
          renderItem={renderFlatList}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
     <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
          <Image source={require('./assets/Home.png')} style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
          <Image source={require('./assets/Search.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Reports')}>
          <Image source={require('./assets/bar.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./assets/Profile.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row', // Corrected flexDirection
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 25,
    paddingLeft: 10, // Corrected paddingLeft
  },
  headerText: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerImage: {
    width: '70%', // Adjust width as needed
    height: 30, // Adjust height as needed
  },
  scrollContainer: {
    flexGrow: 1,
  },
  listContainer: {
    marginRight: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTextContainer: {
    alignItems: 'left',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 12,
    textAlign: 'left',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderTopLeftRadius: 20, // Add rounded corners
    borderTopRightRadius: 20, // Add rounded corners
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 25,
    marginBottom: 1,
  },
  navText: {
    fontSize: 10,
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Fitpad;
