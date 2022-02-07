
import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {API_URL} from "@env";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';

 const  HomeScreen = () => {

     useEffect(()=>{
         getProductFromApi();
     },[])

    const [products,setProducts] = useState([
        {id:1, name: "Product 1",  price:"25.00", image:"https://via.placeholder.com/400x200/FFB6C1/000000", size : "S" , color : "green"},
        {id:2, name: "Product 2",  price:"10.13", image:"https://via.placeholder.com/400x200/FA8072/000000", size : "M" , color : "red"},
        {id:3, name: "Product 3",  price:"12.12", image:"https://via.placeholder.com/400x200/87CEEB/000000", size : "L" , color : "blue"},
        {id:4, name: "Product 4",  price:"11.00", image:"https://via.placeholder.com/400x200/4682B4/000000", size : "XXL" , color : "orange"},
    ]);

     const getProductFromApi = () => {
        axios.get(`${API_URL}product`)
           .then(res =>{
               setProducts(res.data.result)
           }).catch(err =>{
           console.log(err)
       })
     }

        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                          contentContainerStyle={styles.listContainer}
                          data={products}
                          horizontal={false}
                          numColumns={2}
                          keyExtractor= {(item,index) => {
                              return index;
                          }}
                          ItemSeparatorComponent={() => {
                              return (
                                  <View style={styles.separator}/>
                              )
                          }}
                          renderItem={(post) => {
                              const item = post.item;
                              return (
                                  <View style={styles.card}>

                                      <View style={styles.cardHeader}>
                                          <View style={{ flex :1,  flexDirection: 'row',
                                              justifyContent: 'space-between'}}>
                                             <View>
                                                 <Text style={styles.title}>{item.name}</Text>
                                                 <Text style={styles.price}>$ {item.price}</Text>
                                             </View>
                                             <View>
                                                 {/*<Text></Text>*/}
                                                 <Text style={styles.color}>Color : {item.color}</Text>
                                             </View>
                                          </View>
                                      </View>


                                      <Image style={styles.cardImage} source={{uri: item.image  ? item.image : 'https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg'}}/>

                                      <View style={styles.cardFooter}>
                                          <View style={styles.socialBarContainer}>
                                              <View style={styles.socialBarSection}>
                                                  <TouchableOpacity style={styles.socialBarButton} onPress={() =>   Alert.alert('Success', 'The product has been added to your cart')}>
                                                      <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                                                      <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                                                  </TouchableOpacity>
                                              </View>
                                              <View style={styles.socialBarSection}>
                                                  <TouchableOpacity style={styles.socialBarButton}>
                                                      <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/50/000000/hearts.png'}}/>
                                                      <Text style={styles.socialBarLabel}>25</Text>
                                                  </TouchableOpacity>
                                              </View>
                                          </View>
                                      </View>
                                  </View>
                              )
                          }}/>
            </View>
        );

}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
    },
    listContainer:{
        alignItems:'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor:"white",
        flexBasis: '47%',
        marginHorizontal: 5,
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage:{
        height: 150,
        width: null,
    },
    /******** card components **************/
    title:{
        fontSize:20,
        flex:1,
    },
    price:{
        fontSize:16,
        color: "tomato",
        marginTop: 5
    } ,
    size:{
        fontSize: 12,
        color: "green",
        marginTop: 5
    },
    color:{
        fontSize:12,
        color: "orange",
        marginTop: 40
    },
    buyNow:{
        color: "purple",
        marginLeft : 5
    },
    icon: {
        width:25,
        height:25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});