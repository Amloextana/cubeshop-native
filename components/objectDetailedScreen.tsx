import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ObjectInt } from './objectcard';
import NavigationBar from './navbar';

type ObjectDetailsRouteProp = RouteProp<{
  ObjectDetailsScreen: { object: ObjectInt };
}, 'ObjectDetailsScreen'>;

const ObjectDetailsScreen: React.FC = () => {
  const route = useRoute<ObjectDetailsRouteProp>();
  const { object } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: `data:image/png;base64, ${object.product_image}` }} style={styles.image} />
        <Text style={styles.title}>Название:{object.name}</Text>
        <Text style={styles.info}>Цена: {object.price}</Text>
        <Text style={styles.info}>Доп информация: {object.description}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
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