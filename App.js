import React, {useEffect,useState, useCallback,useMemo} from 'react';
import {Text, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView, View } from 'react-native';

import Card from './src/components/Card'
import data from './data/data.json'



export default function App() {


const renderItem = ({item}) => (


    <Card key= {item.id} title={item.title} price={item.price} imgURL={item.imgURL} inStock={item.inStock} />

)

const [searchKey, setSearchKey]= useState(null)
const [searchDisplay, setSearchDisplay]= useState(null)

const handleInputChange = (element) =>{

 setSearchKey((element.target.value).toLowerCase())
 setSearchDisplay(element.target.value)
}



let filteredResults = useMemo(() => data.filter(item=> item.title.toLowerCase().includes(searchKey) ) , [data,searchKey])


  return (

<SafeAreaView>
  


<View style={styles.navbar}>
<Text style= {styles.logoText}> PatikaStore </Text>
<TextInput style ={styles.searchBar}value={searchDisplay} onChange={handleInputChange} />
<Text style={{color:'white'}}> {searchDisplay} </Text>
</View>

<View style={{marginTop:'100px', backgroundColor:'#28364E',paddingTop:'30px',paddingBottom:'10px', height:'100%'}} >
<ScrollView>


{


(searchKey && filteredResults.length=== 0) ? <Text style={{color: 'lime'}}> Maalesef bulunamadi </Text>                         : 

searchKey? <FlatList contentContainerStyle={{alignItems:'center', justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'}} data={filteredResults} renderItem={renderItem} keyExtractor={item => item.id}   />

:
<FlatList contentContainerStyle={{alignItems:'center', justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',}} data={data} renderItem={renderItem} keyExtractor={item => item.id}   />


}

</ScrollView>
</View>


<View style={styles.footer}>
<Text style={styles.footerText}>Made by Alperen Atik </Text>
</View>



</SafeAreaView>







    
    
    
  )
}

const styles = StyleSheet.create({



navbar:{
flex:'1',
flexDirection:'column',
backgroundColor:'#0A0D14',
width: '100vw',

position: 'fixed',
zIndex:'5',
padding:'6px',

},

logoText:{

fontFamily:'monospace',
letterSpacing:'5px',
fontSize:'25px',
fontWeight:'600',
color:'#6FCF97',
textShadow:'1px 1px 5px fuchsia',
marginTop: '10px',
marginLeft:'20px',
},

searchBar:{

backgroundColor:'whitesmoke',
color:'#4E2ECF',
width:'300px',
height:'30px',
marginLeft: '20px',
marginTop: '5px',
marginBottom: '10px',
fontSize:'15px',
borderRadius:'12px'
},
footer:{

backgroundColor:'#0A0D14',
color:'whitesmoke',
padding:'20px',


},
footerText:{

color: 'whitesmoke',
fontFamily: 'monospace'

}






});
