import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ObjectInt } from './objectcard';


type ObjectDetailsRouteProp = RouteProp<{
  ObjectDetailsScreen: { object: ObjectInt };
}, 'ObjectDetailsScreen'>;

const ObjectDetailsScreen: React.FC = () => {
  const route = useRoute<ObjectDetailsRouteProp>();
  const { object } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.content}>
      <Image source={{ uri: object.photo }} />
        <Text style={styles.title}>Название:{object.product_name}</Text>
        <Text style={styles.info}>Стоимость: {object.price}</Text>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ObjectDetailsScreen;