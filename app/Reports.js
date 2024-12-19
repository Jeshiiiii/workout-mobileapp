import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Reports = () => {
  const topImageWidth = 336;
  const topImageHeight = 442;
  const topImageX = 38;
  const topImageY = -50;

  const middleImageWidth = 336; // Adjust as needed
  const middleImageHeight = 442; // Adjust as needed
  const middleImageX = 38; // Adjust as needed
  const middleImageY = 280; // Adjust as needed

  const bottomImageWidth = 336;
  const bottomImageHeight = 105;
  const bottomImageX = 38;
  const bottomImageY = 750;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={[styles.imageContainer, { position: 'absolute', left: topImageX, top: topImageY }]}>
          <Image source={require('./assets/calendar1.png')} style={[styles.image, { width: topImageWidth, height: topImageHeight }]} />
        </View>
        <View style={[styles.imageContainer, { position: 'absolute', left: middleImageX, top: middleImageY }]}>
          <Image source={require('./assets/report.png')} style={[styles.image, { width: middleImageWidth, height: middleImageHeight }]} />
        </View>
        <View style={[styles.imageContainer, { position: 'absolute', left: bottomImageX, top: bottomImageY }]}>
          <Image source={require('./assets/bmi.png')} style={[styles.image, { width: bottomImageWidth, height: bottomImageHeight }]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    minHeight: height * 2, // Make the container taller than the screen height to enable scrolling
    backgroundColor: '#000000',
  },
  imageContainer: {
    position: 'absolute',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default Reports;
