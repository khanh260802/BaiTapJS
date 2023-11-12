import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import imgs from "../Image";
const Screen1 = ({navigation}) => {
  const [database, setDatabase] = useState([]); 
  const url = 'http://localhost:3000/donuts';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDatabase(json)
        setData(json)
      })
  }, [])

  const [data, setData] = useState([]);
  const [active, setActive] = useState("Donut"); 
  const handleDonut = () => {
    setActive("Donut");
    setData(database);
  }
  const handlePinkDonut = () => {
    setActive("Pink Donut");
    const pinkDonut = database.filter((item) => item.name === "Pink Donut");
    setData(pinkDonut);
  }
  const handleFloatingDonut = () => {
    setActive("Floating Donut");
    const floatingDonut = database.filter((item) => item.name === "Floating Donut");
    setData(floatingDonut);
  }
  const Item = ({ item }) => {
    return (
      <View style={styles.container1}>
        <Image source={imgs[item.image]} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <Pressable 
          style={styles.addButton}
          onPress={() => {
            navigation.navigate({
              name: "Screen2", 
              params: item, 
            });
          }}
        >
          <Image
            source={require("../assets/plus_button.svg")}
            style={styles.addButtonIcon}
            alt="Add"
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Khanh!</Text>
      <Text style={styles.subtitle}>Choose your Best food</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search food" />
        <Pressable style={styles.searchButton}>
          <Image
            source={require("../assets/search.svg")}
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
      <View style={styles.foodContainer}>
        <Pressable 
          style={[styles.foodButton, { backgroundColor: active === "Donut" ? "#F4DDDD" : "transparent" }]}
          onPress={handleDonut}
        >
          <Text style={styles.foodText}>Donut</Text>
        </Pressable>
        <Pressable 
          style={[styles.foodButton, { backgroundColor: active === "Pink Donut" ? "#F4DDDD" : "transparent" }]}
          onPress={handlePinkDonut}
        >
          <Text style={styles.foodText}>Pink Donut</Text>
        </Pressable>
        <Pressable 
          style={[styles.foodButton, { backgroundColor: active === "Floating Donut" ? "#F4DDDD" : "transparent" }]}
          onPress={handleFloatingDonut}
        >
          <Text style={styles.foodText}>Floating</Text>
        </Pressable>
      </View>
      <ScrollView>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  container1: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    backgroundColor: '#F4DDDD', 
    borderRadius: 8, 
    marginVertical: 8, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  searchButton: {
  },
  searchIcon: {
    width: 47,
    height: 47,
    resizeMode: 'contain'
  },
  foodContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: 'space-between'
  },
  foodButton: {
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  foodText: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addButtonIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    // padding: 10,
    width: 44,
    height: 44,
    zIndex: 1,
  },
});

export default Screen1;
