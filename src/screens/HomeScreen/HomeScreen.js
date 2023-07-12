import { StyleSheet,style, Text, View,SafeAreaViewView,FlatList,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";  



const HomeScreen = () =>{

    const animals = [
        {
            id : 1,
            name : 'Cat',
            image : require('../../../assets/images/cat.png'),
        },
        {
            id : 2,
            name : 'Dog',
            image : require('../../../assets/images/dog.png'),
        },
        {
            id : 3,
            name : 'Fish',
            image : require('../../../assets/images/fish.png'),
        },
        {
            id : 4,
            name : 'Parrot',
            image : require('../../../assets/images/parrot.png'),
        },
        {
            id : 6,
            name : 'Rabbit',
            image : require('../../../assets/images/lovebirds.png'),
        },
        {
            id : 7,
            name : 'Peacock',
            image : require('../../../assets/images/lovebirds.png'),
        },
        {
            id : 8,
            name : 'Tortoise',
            image : require('../../../assets/images/lovebirds.png'),
        },
        {
            id : 9,
            name : 'mouse',
            image : require('../../../assets/images/lovebirds.png'),
        },
        {
            id : 10,
            name : 'butterfly',
            image : require('../../../assets/images/lovebirds.png'),
        },
    ];

    const oneAnimal = ({item}) =>(
        <View style = {styles.item}>
            <View style = {styles.avatarContainer}>
                <Image loadingIndicatorSource = {item.image } style = {styles.avatar}/>
            </View>
        <Text style = {styles.name}>{item.name}</Text>
        </View>
    )

    headerComponent = () =>{
        return <Text style ={styles.listHeadline}>Animals</Text>
    }

    itemSeparator = () =>{
        return <View style = {styles.separator}/>
    }

return(
    <SafeAreaView>
     <FlatList
     ListHeaderComponentStyle = {styles.listHeader}
     ListHeaderComponent={headerComponent}
     data = {animals}
     renderItem = {oneAnimal}
     ItemSeparatorComponent = {itemSeparator}
     ListEmptyComponent={<Text>This is a very flat list</Text>}
     />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
 listHeader : {
    height : 55,
    alignItems : 'center',
    justifyContent : 'center',
 },

    listHeadline : {
        color: '#333',
        fontSize : 21,
        fontWeight : 'bold',
    },

    item:{
        flex:1,
        flexDirection:'row',
        alignItems : 'center',
        paddingVertical:13,
    },
    avatarContainer:{
        backgroundColor:'#D9D9D9',
        borderRadius: 100,
        height : 80,
        width:80,
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        height : 50,
        width:50,
    },
    name:{
        fontWeight:'600',
        fontSize:16,
        marginLeft:13,
    },
    separator:{
        height : 3,
        width: '100%',
        backgroundColor : '#CCC'
    }
 });

export default HomeScreen;
