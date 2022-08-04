import React from 'react'
import {Text, StyleSheet, View,ImageBackground } from 'react-native';

export default function Card(props){

let {title,price,imgURL,inStock} = props

return(



<View style={styles.card}>
<ImageBackground source={{uri: `${imgURL}`}} resize='cover' style={{flex: '1'}}>


<Text style={styles.cardHeader}> {title} </Text>


<View style={styles.cardDetails}>
{inStock ? <Text style={styles.availableText}> Siparis ver </Text> :<Text style={styles.unavailableText}> Stokta Yok </Text>}
<Text style={{color:'whitesmoke'}}> Fiyat : <Text style={styles.priceTag}>{price} </Text></Text>
</View>
</ImageBackground>
</View>




)




}

const styles = StyleSheet.create({




card:{

minwidth:'30vw',
maxWidth:'200px',
height:'280px',
marginTop:'10px',
marginBottom:'10px',

border:'3px solid lightgray',
borderRadius:'14px',



},

cardHeader:{
textAlign:'center',
marginTop:'20px',
backgroundColor:'rgba(111, 207, 151, 0.9)',
textAlign:'center',
fontSize:'18px',
minHeight:'50px',
backdropFilter: 'blur(5px)',
textShadow:'2px 2px 10px white'
},
cardDetails:{
width:'100%',
backgroundColor:'rgba(10, 13, 20, 0.9)',
marginTop:'120px',
padding:'10px',
boxShadow:'1px 1px 0px 0px black',

},
priceTag:{ 
color: '#E6EDf5',
fontWeight:'bold', 
fontSize:'18px',
textShadow:'2px 2px 10px black'


},
availableText:{
color:'rgba(111, 207, 151, 0.8)', 
fontWeight:'bold', 
textShadow:'2px 2px 10px black'},
unavailableText:{
color:'rgba(250,70,22, 0.8)',
fontWeight:'bold',
textShadow:'2px 2px 10px black'

}






});
