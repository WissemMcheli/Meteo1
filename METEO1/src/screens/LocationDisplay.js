import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationDisplay = ({ name, country }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>
        {name} , {country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  location: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default LocationDisplay;