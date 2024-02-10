import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export interface ObjectInt {
  id: number;
  name: string;
  description: string;
  price: number;
  is_active: boolean;
  product_image: string;
  category_ref: number;
}
interface ObjectCardProps {
  object: ObjectInt;
  onDetailsPress: () => void; 
}

const ObjectCard: React.FC<ObjectCardProps> = ({ object, onDetailsPress }) => {
  return (
    <View style={styles.card}>
      {object.product_image ? (
        <Image
          source={{ uri: `data:image/png;base64, ${object.product_image}` }}
          style={styles.image}
        />
      ) : (
        <Text style={styles.image}>{'Cube Shop'}</Text>
      )}
      <View style={styles.details}>
        <Text style={styles.title}>{object.name}</Text>
        <Text style={styles.info} numberOfLines={4} >{object.description}</Text>
        <Text style={styles.price}>Цена: {object.price}</Text>

        {/* <Text style={styles.price}>{object.price}</Text> */}

 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  detailsButton: {
    backgroundColor: '#171717',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ObjectCard;