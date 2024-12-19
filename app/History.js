import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Text, Image } from 'react-native';

const History = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.calendarOverlay}>
            {/* Place your calendar component here */}
            <View style={[styles.cardItem, styles.calendar]}>
              <Image source={require('./assets/date.png')} style={styles.calendarImage} />
            </View>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sectionList}>
            {/* First section list */}
            <View style={[styles.section, styles.section1]}>
              <View style={styles.sectionContent}>
                <Image source={require('./assets/Leg.png')} style={styles.sectionImage} />
                <View style={styles.sectionTextContainer}>
                  <Text style={[styles.sectionText, styles.textLeft]}>June 16</Text>
                  <Text style={[styles.sectionText, styles.textLeft]}>LOWER BODY</Text>
                </View>
              </View>
            </View>
            {/* Second section list */}
            <View style={[styles.section, styles.section2]}>
              <View style={styles.sectionContent}>
                <Image source={require('./assets/Abs.png')} style={styles.sectionImage} />
                <View style={styles.sectionTextContainer}>
                  <Text style={[styles.sectionText, styles.textLeft]}>June 16</Text>
                  <Text style={[styles.sectionText, styles.textLeft]}>UPPER BODY</Text>
                </View>
              </View>
            </View>
            {/* Third section list */}
            <View style={[styles.section, styles.section3]}>
              <View style={styles.sectionContent}>
                <Image source={require('./assets/Leg.png')} style={styles.sectionImage} />
                <View style={styles.sectionTextContainer}>
                  <Text style={[styles.sectionText, styles.textLeft]}>June 15</Text>
                  <Text style={[styles.sectionText, styles.textLeft]}>LOWER BODY</Text>
                </View>
              </View>
            </View>
            {/* Fourth section list */}
             <View style={[styles.section, styles.section2]}>
              <View style={styles.sectionContent}>
                <Image source={require('./assets/Abs.png')} style={styles.sectionImage} />
                <View style={styles.sectionTextContainer}>
                  <Text style={[styles.sectionText, styles.textLeft]}>June 15</Text>
                  <Text style={[styles.sectionText, styles.textLeft]}>UPPER BODY</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1, // Adjusted size of the overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarOverlay: {
    position: 'absolute',
    top: 50, // Adjusted position of the calendar overlay
    paddingHorizontal: 20,
  },
  cardItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center', // Center items horizontally
  },
  calendar: {
    backgroundColor: 'rgba(236,28,28, 0.5)', // Low opacity overlay
  },
  calendarImage: {
    width: 350, // Adjusted width of the calendar image
    height: 300, // Adjusted height of the calendar image
    resizeMode: 'contain', // Adjust image content mode
    marginBottom: 10, // Adjust margin as needed
  },
  scrollView: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 0,
  },
  sectionList: {
    backgroundColor: 'black', // No opacity, solid black
    borderRadius: 10,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
    width: '100%', // Occupy full width
  },
  sectionImage: {
    width: 50,
    height: 50,
    marginLeft: 15,
  },
  sectionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  sectionText: {
    color: 'white',
    fontSize: 18,
  },
  textLeft: {
    marginBottom: 5,
  },
  section1: {
    backgroundColor: 'black', // Black
  },
  section2: {
    backgroundColor: 'black', // Black
  },
  section3: {
    backgroundColor: 'black', // Black
  },
});

export default History;
