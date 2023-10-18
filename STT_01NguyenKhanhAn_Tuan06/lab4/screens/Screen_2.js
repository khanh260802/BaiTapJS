import React from "react";
import {
    StyleSheet,
    View,
    Pressable,
    Image,
    FlatList,
    Text,
} from "react-native";

import Footer from "../components/Footer";
import { ScrollView, TextInput } from "react-native-web";
import data from "../data/data";

const Screen_2 = () => {
    const Item = ({ item }) => {
        return (
            <View style={styles.Item}>
                <Image style={styles.Item_img} source={item.img} />
                <Text style={styles.Item_name}>{item.name}</Text>
                <View style={styles.stars_rate}>
                    <View style={styles.stars}>
                        {[...Array(5)].map((_, id) => (
                            <Image
                                style={[
                                    styles.star,
                                    {
                                        filter:
                                            id + 1 > item.numberStar
                                                ? "grayscale(100%)"
                                                : "none",
                                    },
                                ]}
                                source={require("../assets/Star.png")}
                            />
                        ))}
                    </View>
                    
                    <Text style={styles.rate}>({item.numberRate})</Text>
                </View>
                <View style={styles.wrap_price}>
                    <Text style={styles.price}> {item.price}đ </Text>
                    <Text style={styles.minusPercen}>-{item.minusPercen}%</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable>
                    <Image
                        style={styles.arrow_left}
                        source={require("../assets/arrow-left..svg")}
                    />
                </Pressable>
                <View style={styles.wrap_input}>
                    <Image
                        style={styles.search_icon}
                        source={require("../assets/search.svg")}
                    />
                    <TextInput
                        placeholder="Nhập tìm kiếm..."
                        style={styles.Input_header}
                        placeholderTextColor="#999"
                    />
                </View>
                <Pressable>
                    <Image
                        style={styles.icon_redDot}
                        source={require("../assets/redDot.svg")}
                    />
                    <Image
                        style={styles.cart}
                        source={require("../assets/bi_cart-check.svg")}
                    />
                </Pressable>
                <Pressable>
                    <Image
                        style={styles.icon_threeDot}
                        source={require("../assets/threeDot.svg")}
                    />
                </Pressable>
            </View>

            <ScrollView style={styles.body}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                    style={styles.list_item}
                    numColumns={2}
                />
            </ScrollView>

            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#1BA9FF",
        position: "fixed",
        top: 0,
        width: "100%",
        height: 42,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        zIndex: 1,
    },
    arrow_left: {
        width: 24,
        height: 24,
    },
    header_Text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
    cart: {
        width: 24,
        height: 24,
    },
    icon_redDot: {
        width: 17,
        height: 17,
        position: "absolute",
        zIndex: 1,
        top: -6,
        right: -6,
    },
    wrap_input: {},
    Input_header: {
        width: 190,
        height: 30,
        backgroundColor: "#fff",
        paddingLeft: 40,
    },
    search_icon: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 3,
        left: 8,
    },
    icon_threeDot: {
        width: 18,
        height: 4.36,
    },
    body: {
        flex: 1,
        width: "100vw",
        paddingTop: 42,
    },
    list_item: {
        backgroundColor: "#fff",
        flexDirection: "row",
    },
    Item: {
        width: "50vw",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    Item_img: {
        width: 155,
        height: 90,
    },
    Item_name: {
        fontSize: 12,
    },
    stars_rate: {
        flexDirection: "row",
    },
    stars: {
        flexDirection: "row",
    },
    star: {
        height: 13,
        width: 13,
        marginRight: 4,
    },
    rate: {
        fontSize: 10,
    },
    wrap_price: {
        flexDirection: "row",
        width: 110,
    },
    price: {
        fontSize: 12,
        fontWeight: 700,
        paddingRight: 20,
    },
    minusPercen: {
        fontSize: 12,
        color: "#969daa",
    },
});

export default Screen_2;
