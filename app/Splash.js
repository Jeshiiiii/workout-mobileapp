
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

function Splash({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/gym.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('./assets/logo.png')} 
            style={styles.logo}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.topButton} onPress={() => navigation.navigate('Signup')} >
              <Text style={styles.buttonText}>I'M READY TO JOIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bottomButton, styles.clearBackground, styles.skipButton]}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  topButton: {
    backgroundColor: 'rgb(255, 0, 0)', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  bottomButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white', 
  },
  clearBackground: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  skipButton: {
    borderColor: 'white',
  },
});

export default Splash;
