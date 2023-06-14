import { View, Text, TextInput,StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const [countryImg, setCountryImg] = useState();
  const [data, setData] = useState()
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState({});
  const [country, setCountry] = useState('Global');

  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    let getData = await fetch('https://api.covid19api.com/summary')
    let res = await getData.json();
    setData(res);
    setStats({
      ActiveCases: res.Global.TotalConfirmed,
      NewCases: res.Global.NewConfirmed,
      Deaths: res.Global.NewDeaths,
      Recovered: res.Global.NewRecovered,
    })
    setCountry('Global')
  }
  function showResults(){
    data.Countries.map((item, index)=>{
      const {Country, CountryCode}=item
      if (search==Country){
        setStats({
          ActiveCases:item.TotalConfirmed,
          NewCases: item.NewConfirmed,
          Deaths: item.NewDeaths,
          Recovered: item.NewRecovered,
        })
        setCountry(search)
        setCountryImg(CountryCode.toLoweCase())
      }
    })
    Keyboard.dismiss
    setSearch('')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder='Search country...'
          placeholderTextColor='lightgrey'/>
          <TouchableOpacity style={styles.searchButton} onPress={()=> showResults()}>
            <Icon name='search' color='#fff' size={30}/>
          </TouchableOpacity>
        </View>

        <View style={styles.headingContainer}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Stay Home</Text>
            <Text style={styles.headingText}>Stay Safe</Text>
          </View>
          <Image style={styles.headingImage} source={require('../assets/bg-covid.jpg')}/>
        </View>

        <View style={styles.divider}></View>

        <View>
          <View style={styles.countryHeading}>
            <Image style={{width:20, height: 20, marginRight:10, borderRadius: 5}}/>
            <Text style={styles.countryName}>{country}</Text>
          </View>

          <View style={styles.cards}>
            <View style={[styles.card, {borderLeftColor:'yellow'}]}>
              <Text style={styles.cardText}>Active Case</Text>
              <Text style={[styles.text, {color:'yellow'}]}>{stats.ActiveCases}</Text>
            </View>

            <View style={[styles.card, {borderLeftColor:'orange'}]}>
              <Text style={styles.cardText}>New Case</Text>
              <Text style={[styles.text, {color:'orange'}]}>{stats.NewCases}</Text>
            </View>

            <View style={[styles.card, {borderLeftColor:'red'}]}>
              <Text style={styles.cardText}>Deaths</Text>
              <Text style={[styles.text, {color:'red'}]}>{stats.Deaths}</Text>
            </View>

            <View style={[styles.card, {borderLeftColor:'lightgreen'}]}>
              <Text style={styles.cardText}>Recovered</Text>
              <Text style={[styles.text, {color:'lightgreen'}]}>{stats.Recovered}</Text>
            </View>

          </View>
        </View>
        
        <Image style={styles.preventionImage} source={require('../assets/bg2-covid.jpg')}/>

      </View>
    </TouchableWithoutFeedback>
  )
}
export const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2f3a64',
    padding:15,
  },
  searchContainer:{
    flexDirection:'row',
    marginTop:50,
  },
  input:{
    backgroundColor:'#3e4f7a',
    height:50,
    borderRadius:15,
    paddingLeft:20,
    fontSize:18,
    width:'80%',
    marginRight:10,
    color:'lightgrey',
  },
  searchButton:{
    backgroundColor:'#3e4f7a',
    borderRadius:15,
    padding:10,
    width:60,
    alignItems:'center',
  },
  headingContainer:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headingText:{
    color:'#fff',
    fontSize:35,
    fontWeight:'700',
  },
  headingImage:{
    width:150,
    height:90,
    borderRadius:15,
  },
  divider:{
    width:'100%',
    backgroundColor:'#3e4f7a',
    height:3,
    marginTop:15,
  },
  countryHeading:{
    backgroundColor:'#3e4f7a',
    marginTop:10,
    alignItems:'center',
    height:40,
    borderRadius:15,
    justifyContent:'center',
    flexDirection:'row',
  },
  countryName:{
    fontSize:25,
    color:'#fff',
    fontWeight:700,
  },
  cards:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginTop:10
  },
  card:{
    backgroundColor:'#3e4f7a',
    width:170,
    height:100,
    borderRadius:15,
    marginBottom:10,
    padding:10,
    borderLeftWidth:15,
    borderLeftColor:'#fff',
  },
  cardText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'600',
  },
  text:{
    fontSize:20,
    fontWeight:700,
    marginTop:20,
  },
  preventionImage:{
    width:'100%',
    height:210,
    borderRadius:15,
    marginTop:5,
  }
})