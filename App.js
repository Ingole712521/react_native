import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const NewApp = () => {
  return (
    <View style={styles.container}>
      {/* Menu Bar */}
      <View style={styles.menuBar}>
        <Text style={styles.menuText}>☰</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#ccc"
      />

      {/* Rounded Container with Image and Text */}
      <View style={styles.roundedContainer}>
        <Image
          source={require('./assets/breaking.png')}
          style={styles.image}
          resizeMode="cover" // Ensure the image covers the entire container
        />
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>See all the Breaking news</Text>
        </View>
      </View>

      {/* Headline */}
      <Text style={styles.headline}>News</Text>

      {/* Horizontal Running Container */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollContainer}
      >
        <View style={styles.smallContainer}>
          <Image
            source={require('./assets/Sport.png')}
            style={styles.smallImage}
            resizeMode="cover"
          />
          <View style={styles.smallImageTextContainer}>
            <Text style={styles.smallImageText}>Watch Live Video 🔴 </Text>
          </View>
        </View>
        <View style={styles.smallContainer}>
          <Image
            source={require('./assets/sport2.png')}
            style={styles.smallImage}
            resizeMode="cover"
          />
          <View style={styles.smallImageTextContainer}>
            <Text style={styles.smallImageText}>Read the Blog</Text>
          </View>
        </View>
        <View style={styles.smallContainer}>
          <Image
            source={require('./assets/sport3.png')}
            style={styles.smallImage}
            resizeMode="cover"
          />
          <View style={styles.smallImageTextContainer}>
            <Text style={styles.smallImageText}>Read the Blog </Text>
          </View>
        </View>
      </ScrollView>

      {/* Heading for Additional Container */}
      <Text style={styles.additionalHeading}>Olympic News</Text>

      {/* Additional Horizontal Container */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.additionalScrollContainer}
      >
        <View style={styles.additionalContainer}>
          <Image
            source={require('./assets/olympic.png')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
          <View style={styles.additionalImageTextContainer}>
            <Text style={styles.additionalImageText}>Aman, wrestling and the quest for glory</Text>
          </View>
        </View>
        <View style={styles.additionalContainer}>
          <Image
            source={require('./assets/olympic2.png')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
          <View style={styles.additionalImageTextContainer}>
            <Text style={styles.additionalImageText}>Neeraj Chopra's grand gesture</Text>
          </View>
        </View>
        <View style={styles.additionalContainer}>
          <Image
            source={require('./assets/olymic3.png')}
            style={styles.additionalImage}
            resizeMode="cover"
          />
          <View style={styles.additionalImageTextContainer}>
            <Text style={styles.additionalImageText}>Manu Bhaker, India's double winner, misses a third medal at Olympics</Text>
          </View>
        </View>
      </ScrollView>

      {/* Animated Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40, // Add padding to top to prevent content from going out of screen
    paddingHorizontal: 20, // Add horizontal padding
  },
  menuBar: {
    alignItems: 'flex-end', // Align to the right
    marginBottom: 20, // Add margin to space it from the search bar
    color: 'white'
  },
  menuText: {
    fontSize: 24,
    color: 'white',
    fontStyle: 'bold'
  },
  searchBar: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 20, // Add margin to space it from the next container
  },
  roundedContainer: {
    borderRadius: 20,
    padding: 0, // Remove padding to ensure image covers the entire container
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    width: '100%',
    height: 200, // Set a fixed height to maintain aspect ratio
    marginBottom: 20, // Add margin to space it from the next container
    position: 'relative', // Position relative to use absolute positioning inside
  },
  image: {
    width: '100%',
    height: '100%', // Ensure image covers the entire container
    borderRadius: 20,
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    borderRadius: 10,
  },
  imageText: {
    color: '#fff',
    fontSize: 18,
  },
  headline: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20, // Add margin to space it from the horizontal container
  },
  horizontalScrollContainer: {
    paddingBottom: 20,
  },
  smallContainer: {
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#555',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    width: width * 0.6, // Make it responsive
    height: 150, // Set a fixed height to maintain aspect ratio
    position: 'relative', // Position relative to use absolute positioning inside
  },
  smallImage: {
    width: '100%',
    height: '100%', // Ensure image covers the entire container
    borderRadius: 20,
  },
  smallImageTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 5,
    borderRadius: 5,
  },
  smallImageText: {
    color: '#fff',
    fontSize: 16,
  },
  additionalHeading: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20, // Add margin to space it from the containers
  },
  additionalScrollContainer: {
    paddingBottom: 20,
  },
  additionalContainer: {
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#555',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
    width: width * 0.6, // Make it responsive
    height: 150, // Set a fixed height to maintain aspect ratio
    position: 'relative', // Position relative to use absolute positioning inside
  },
  additionalImage: {
    width: '100%',
    height: '100%', // Ensure image covers the entire container
    borderRadius: 20,
  },
  additionalImageTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 5,
    borderRadius: 5,
  },
  additionalImageText: {
    color: '#fff',
    fontSize: 16,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NewApp;
