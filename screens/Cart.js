import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Cart(){
    return (
        // create cart screen here
        <View style={styles.container}>
            {/* info cart */}
            <View style={styles.infoCart}>
                <Text style={styles.infoCartText}>Keranjang Belanja</Text>
            </View>
            {/* cart */}
            <View style={styles.cart}>
                <View style={styles.cartImageContainer}>
                    <Image source={require('../assets/liquid.jpeg')} style={styles.cartImage} />
                </View>
                <View style={styles.cartButtonContainer}>
                    <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.cartButtonText}>Lihat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    infoCart: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoCartText: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    cart: {
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10,
    },
    cartImageContainer: {
        width: 300,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartImage: {
        width: '100%',
        height: '100%',
    },
    cartButtonContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButton: {
        width: 100,
        height: 30,
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
