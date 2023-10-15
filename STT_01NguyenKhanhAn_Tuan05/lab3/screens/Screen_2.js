import {View, Text, StyleSheet, Image, Pressable} from 'react-native'; 
import react from 'react'; 
const Screen_2 = ({navigation}) => { 
    const phones = {
        vs_blue : require('../assets/vs_blue.png'),
        vs_red : require('../assets/vs_red.png'),
        vs_silver : require('../assets/vs_silver.png'),
        vs_black : require('../assets/vs_black.png'),
    }
    const getColorText = () => {
        if(color === 'vs_blue') return 'Xanh dương';
        else if(color === 'vs_red') return 'Đỏ';
        else if(color === 'vs_silver') return 'Bạc';
        else return 'Đen';
    }   
    const [color, setColor] = react.useState('vs_blue');
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.product_img} source={phones[color]} />
                <View style={styles.header_right}>
                    <Text style={styles.product_desc}>Điện thoại Vsmart Joy 3 Hàng chính hãng </Text>
                    <Text style={styles.product_color}>Màu: <Text style={{fontWeight:'bold'}} > {getColorText()} </Text> </Text>
                    <Text style={styles.product_supplier}>Cung cấp bởi <Text style={{fontWeight:'bold'}}>Tiki Tradding</Text>  </Text>
                    <Text style={styles.product_price}>1.790.000 đ </Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_title}> Chọn một màu bên dưới: </Text>
                <View style={styles.group_btn}>
                    <Pressable style={[styles.btn1, styles.btn]} onPress={()=>setColor('vs_silver')} />
                    <Pressable style={[styles.btn2, styles.btn]} onPress={()=>setColor('vs_red')} />
                    <Pressable style={[styles.btn3, styles.btn]} onPress={()=>setColor('vs_black')} />
                    <Pressable style={[styles.btn4, styles.btn]} onPress={()=>setColor('vs_blue')} />
                </View>
                <Pressable 
                    style={styles.btnSecond}
                    onPress={() => navigation.navigate({
                        name: 'Screen_1', 
                        params: { color }, 
                        merge: true, 
                    })}
                > 
                    <Text style={styles.btn2_text}> XONG </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        justifyContent: 'flex-start',
        height: '100vh',
    },

    header : {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    product_img: {
        width: 112, 
        height: 132, 
        margin: 10,
    },
    header_right: {
        
    },  
    product_desc : {
        fontSize: 20, 
        fontWeight: 600, 
        marginTop: 16,
        width: '60%'
    },
    product_color: {
        fontSize: 16, 
    },
    product_supplier: {
        fontSize: 16, 
    },
    product_price: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    body : {
        flex: 1,
        backgroundColor: '#C4C4C4',
        width: '100%', 
        overflow: 'auto',
        padding: 16, 
        paddingBottom: 0,
    },
    body_title : {
        fontSize: 20, 
        fontWeight: 600,
    },
    group_btn : {
        flexDirection: "column",
        alignItems: 'center',
    },
    btn : { 
        width: 85, 
        height: 80, 
        marginTop: 16,
    },
    btn1 : {
        backgroundColor: '#fff'
    },
    btn2 : {
        backgroundColor: '#f30d0d'
    },
    btn3 : {
        backgroundColor: '#000'
    },
    btn4 : {
        backgroundColor: '#234896'
    },


    btnSecond : {
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        width: '100%', 
        height: 50, 
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
        marginTop: 40, 
    },
    btn2_text : {
        color: '#fff',
        fontSize: 20, 
        fontWeight: 600,
    }
});
export default Screen_2; 

