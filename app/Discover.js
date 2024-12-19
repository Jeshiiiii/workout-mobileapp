import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, TouchableOpacity, Text, Image } from 'react-native';

const Discover = () => {
  return (
    <View style={styles.container}>
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
                  <Image source={require('./assets/turkeysandwich.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Turkey Breast Sandwich</Text>
                    <Text style={styles.gridItemSubText}>20g Protein per 3oz serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/salad.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Lentil Salad</Text>
                    <Text style={styles.gridItemSubText}>18g Protein per cup</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/burrito.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Beef and Bean Burrito</Text>
                    <Text style={styles.gridItemSubText}>20g Protein per burrito</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/tofuwrap.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Grilled Tofu Wrap</Text>
                    <Text style={styles.gridItemSubText}>15g Protein per wrap</Text>
                  </View>
                </TouchableOpacity>
                {/* Add more grid items here */}
              </View>
            </ScrollView>
          </View>
             {/* Third Section */}
          <View style={styles.sectionContainer}>
            {/* Section Title */}
            <Text style={styles.sectionTitle}>Dinner</Text>
            {/* Sub Cards */}
            <ScrollView style={styles.scrollView}>
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/shrimp.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Shrimp Stir-Fry</Text>
                    <Text style={styles.gridItemSubText}>20g Protein per 3oz serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/mushroom.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Grilled Portobello Mushrooms</Text>
                    <Text style={styles.gridItemSubText}>4g Protein per cup serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/blackbean.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Black Bean Enchiladas</Text>
                    <Text style={styles.gridItemSubText}>15g Protein per serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/turkey.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Roasted Turkey Breast</Text>
                    <Text style={styles.gridItemSubText}>25g Protein per 3 oz serving</Text>
                  </View>
                </TouchableOpacity>
                {/* Add more grid items here */}
              </View>
            </ScrollView>
          </View>
             {/* Fourth Section */}
          <View style={styles.sectionContainer}>
            {/* Section Title */}
            <Text style={styles.sectionTitle}>Snacks</Text>
            {/* Sub Cards */}
            <ScrollView style={styles.scrollView}>
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/edamame.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Edamame</Text>
                    <Text style={styles.gridItemSubText}>8g Protein per 1/2 cup serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/peanutbutter.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Peanut Butter</Text>
                    <Text style={styles.gridItemSubText}>7g Protein per 2 tbsp </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/turkeyjerky.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Turkey Jerky</Text>
                    <Text style={styles.gridItemSubText}>10g Protein per 1 oz serving</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                  <Image source={require('./assets/cheesepineapple.jpg')} style={styles.gridItemImage} />
                  <View>
                    <Text style={[styles.gridItemText, styles.boldText]}>Cottage Cheese and Pineapple</Text>
                    <Text style={styles.gridItemSubText}>13g Protein per 1/2 cup serving</Text>
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
    width: 400,
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
    width: 400,
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

export default Discover;
