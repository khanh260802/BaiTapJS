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
const Screen_1 = () => {
    const data = [
        {
            id: "1",
            img: require("../assets/product-image/ca_nau_lau.png"),
            shop_name: "Devang",
            product_name: "Ca nấu lẩu, nấu mì mini...",
        },
        {
            id: "2",
            img: require("../assets/product-image/ga_bo_toi.png"),
            shop_name: "LTD Food",
            product_name: "1KG KHÔ GÀ BƠ TỎI...",
        },
        {
            id: "3",
            img: require("../assets/product-image/xa_can_cau.png"),
            shop_name: "Thế giới đồ chơi",
            product_name: "Xe cần cẩu đa năng",
        },
        {
            id: "4",
            img: require("../assets/product-image/do_choi_dang_mo_hinh.png"),
            shop_name: "Thế giới đồ chơi",
            product_name: "Đồ chơi dạng mô hình",
        },
        {
            id: "5",
            img: require("../assets/product-image/lanh_dao_gian_don.png"),
            shop_name: "Minh Long Book",
            product_name: "Lãnh đạo đơn giản",
        },
        {
            id: "6",
            img: require("../assets/product-image/hieu_long_con_tre.png"),
            shop_name: "Minh Long Book",
            product_name: "Hiểu lòng con trẻ",
        },
        {
            id: "7",
            img: require("../assets/product-image/trump 1.png"),
            shop_name: "Minh Long Book",
            product_name: "Donal Trum thiên tài lãnh đạo",
        },
    ];

    const Item = ({item}) => {
        return (
            <View style={styles.item}>
                <Image style={styles.item_img} source={item.img}/>
                <View style={styles.item_right}>
                    <Text style={styles.item_product_name}>{item.product_name}</Text>
                    <Text style={styles.item_shop_name}>  
                        <Text style={{color: '#999'}}>Shop</Text>
                        {item.shop_name}
                    </Text>
                </View>
                <Pressable style={styles.btn_chat}> 
                    <Text style={styles.btn_chat_text}>Chat</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.btn_back} >
                    <Image style={styles.arrow_left} source={require('../assets/arrow-left..svg')} />
                </Pressable>
                <Text style={styles.header_Text}> Chat </Text>
                <Pressable style={styles.btn_cart} >
                    <Image style={styles.cart} source={require('../assets/bi_cart-check.svg')} />
                </Pressable>
            </View>
            <View>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                    style={styles.body}
                />
            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'column',
    },

    header : {
        backgroundColor: '#1BA9FF', 
        position: 'fixed',
        top: 0, 
        width: '100%',
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        zIndex: 1,
    },
    arrow_left : {
        width: 24, 
        height: 24, 
    },
    header_Text : {
        color: '#fff', 
        fontSize: 16,
        fontWeight: '500',
    },
    cart : {
        width: 24, 
        height: 24, 
    },

    item : {
        flexDirection: "row",
        borderTopColor: '#ddd', 
        borderTopWidth: 1, 
        justifyContent: 'space-between'
    },
    item_img : {
        width: 74, 
        height: 74, 
    },
    item_right : {
        padding: 8, 
        backgroundColor: '#fff',
        flex: 1,
    },
    item_product_name : {
        lineHeight: 30, 
    },
    item_shop_name : {
        color: "#E83030",
    },
    btn_chat : {
        width: 88, 
        height: 38, 
        backgroundColor: '#F31111', 
        borderRadius: 4, 
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 24, 
    },
    btn_chat_text : {
        color: '#fff', 
        fontSize : 16, 
        fontWeight: 600, 
    },
    
    
    body : {
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100vw',
        height: '100vh',
        paddingTop: 42, 
    },


});

export default Screen_1;
