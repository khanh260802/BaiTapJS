import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import imgs from "../Image";
const Screen2 = ({ navigation, route }) => {
  const item = route.params;
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgs[item.image]} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryItem}>
          <Image 
            style={styles.deliveryIcon}
            source={require("../assets/clock.svg")}
          />
          <Text style={styles.deliveryText}>Delivery in 30 min</Text>
        </View>
        <View style={styles.quantityContainer}>
          
          <Pressable
            style={styles.button}
            onPress={() => {
              setNumber(number - 1);
            }}
          >
            <Image style={styles.buttonIcon} source={require("../assets/minusbtn.svg")}/>
          </Pressable>
          <Text style={styles.quantity}>{number}</Text>
          <Pressable 
            style={styles.button}
            onPress={() => {
              setNumber(number + 1);
            }}
          >
            <Image style={styles.buttonIcon} source={require("../assets/plusbtn.svg")}/>
          </Pressable>
        </View>
      </View>
      <Text style={styles.restaurantInfo}>Restaurants info</Text>
      <Text style={styles.orderInfo}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
      <Pressable style={styles.addToCartButton} onPress={() => {navigation.goBack()}}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  deliveryIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  deliveryText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginLeft: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  restaurantInfo: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  orderInfo: {
    marginTop: 10,
    textAlign: 'center',
  },
  addToCartButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F1B000',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
  }
});

export default Screen2;

