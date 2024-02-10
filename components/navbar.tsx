import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const handleNavigation = (routeName: string) => {
    console.log('Navigating to:', routeName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navItem,  { backgroundColor: '#171717' }]}
        onPress={() => handleNavigation('Главная')}
      >
        <Text style={styles.navText}>CubeShop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, { backgroundColor: '#171717' }]}
        onPress={() => handleNavigation('Выйти')}
      >
        <Text style={styles.navText}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#171717',
    width: '100%',
    paddingVertical: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 16,
    marginTop: 50, // Расстояние между текстом и кнопкой
  },
});

export default NavigationBar;