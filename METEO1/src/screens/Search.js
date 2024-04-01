import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ city, setCity, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={city}
        placeholder="Nom de la ville"
        onChangeText={(text) => setCity(text)}
      />
      <AntDesign name="search1" size={24} color="black" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.7)",
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "79%",
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    color: 'black',
    fontWeight: '600',
  },
});

export default Search;