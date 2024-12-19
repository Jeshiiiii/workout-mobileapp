import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, TouchableOpacity, Text, Image } from 'react-native';

const Lowerbody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground source={require('./assets/BG.png')} style={styles.backgroundImage}>
        <ScrollView>
          {/* Top Banner with Text */}
          <View style={[styles.topBanner, styles.bannerBackground]}>
            <Text style={styles.bannerText}>Best Workout Foods</Text>
            <Image source={require('./assets/banner.png')} style={styles.bannerImage} />
          </View>
          {/* First Section */}
          <View style={styles.sectionContainer}>
            {/* Section Title */}
            <Text style={styles.sectionTitle}>Breakfast</Text>
            {/* Sub Cards */}
            <ScrollView style={styles.scrollView}>
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/egg.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Egg</Text>
                    <Text style={styles.gridItemSubText}>6g Protein per large egg</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/yogurt.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Yogurt</Text>
                    <Text style={styles.gridItemSubText}>17g Protein per 6 oz serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/chicken.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Chicken Breast</Text>
                    <Text style={styles.gridItemSubText}>31g Protein per 3 oz serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/salmon.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Salmon</Text>
                    <Text style={styles.gridItemSubText}>22g Protein per 3 oz serving</Text>
                  </View>
                </TouchableOpacity>
                {/* Add more grid items here */}
              </View>
            </ScrollView>
          </View>
          {/* Second Section */}
          <View style={styles.sectionContainer}>
            {/* Section Title */}
            <Text style={styles.sectionTitle}>Lunch</Text>
            {/* Sub Cards */}
            <ScrollView style={styles.scrollView}>
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/egg.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Sandwich</Text>
                    <Text style={styles.gridItemSubText}>Classic lunch option</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/egg.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Salad</Text>
                    <Text style={styles.gridItemSubText}>Fresh and healthy choice</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/egg.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Pasta</Text>
                    <Text style={styles.gridItemSubText}>Comfort food option</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/egg.png')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Soup</Text>
                    <Text style={styles.gridItemSubText}>Warm and comforting</Text>
                  </View>
                </TouchableOpacity>
                {/* Add more grid items here */}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  backButton: {
    color: 'white',
    marginLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  topBanner: {
    marginTop: 20, // Adjust as needed
    alignItems: 'center',
    overflow: 'hidden', // Clip the children to fit the rounded corners
  },
  bannerBackground: {
    backgroundColor: 'rgba(236, 28, 28, .9)', // Red transparent background
    paddingVertical: 20, // Adjust as needed
    borderRadius: 20, // Adjust as needed to create curved edges
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  bannerImage: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
  },
  sectionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  gridContainer: {
    alignItems: 'center',
  },
  gridItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  gridItemImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 10,
  },
  gridItemText: {
    marginLeft: 10,
    color: 'black',
  },
  gridItemSubText: {
    fontSize: 12,
    color: 'gray',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Lowerbody;
