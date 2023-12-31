import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import {styles} from './Home'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Emergency() {
  return (
      <View style={styles.container}>
        <View style={style.emergency}>
          <Text style={style.text}>What to Do if you are sick?</Text>
          <View style={style.call}>
            <Icon name='call' color='#fff' size={35}/>
            <Text style={style.callText}>Call 19003228 immediately if you are having a medical emergency</Text>
          </View>
        </View>

        <View style={{marginTop:40, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={{color:'#fff', fontSize:30, fontWeight:'700'}}>Resources</Text>
          <View style={{backgroundColor:'#fff',width:200,height:3}}></View>
        </View>

        <View style={style.resources}>
          <View style={style.card}>
            <Text style={style.cardText}>CDC in Action</Text>
            <Icon name='chevron-forward' color='#fff' size={35} onPress={()=>{
              Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cdc-in-action.html')
              .catch(err => console.error('Error', err))
            }}/>
          </View>

          <View style={style.card}>
            <Text style={style.cardText}>Communication Resources</Text>
            <Icon name='chevron-forward' color='#fff' size={35} onPress={()=>{
              Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/index.html')
              .catch(err => console.error('Error', err))
            }}/>
          </View>

          <View style={style.card}>
            <Text style={style.cardText}>Global COVID-19</Text>
            <Icon name='chevron-forward' color='#fff' size={35} onPress={()=>{
              Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/global-covid-19/index.html')
              .catch(err => console.error('Error', err))
            }}/>
          </View>

          <View style={style.card}>
            <Text style={style.cardText}>Guidance for COVID-19</Text>
            <Icon name='chevron-forward' color='#fff' size={35} onPress={()=>{
              Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html')
              .catch(err => console.error('Error', err))
            }}/>
          </View>

          <View style={style.card}>
            <Text style={style.cardText}>Laboratories</Text>
            <Icon name='chevron-forward' color='#fff' size={35} onPress={()=>{
              Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-nCoV/lab/index.html')
              .catch(err => console.error('Error', err))
            }}/>
          </View>
        </View>

      </View>
  )
}

const style = StyleSheet.create({
  emergency:{
    backgroundColor:'#3e4f7a',
    marginTop:60,
    height:170,
    borderRadius:15,
    alignItems:'center',
  },
  text:{
    color:'#fff',
    fontSize:25,
    fontWeight:700,
    paddingTop:20,
  },
  call:{
    backgroundColor:'brown',
    width:'100%',
    height:100,
    borderRadius:15,
    marginTop:20,
    justifyContent:'center',
    flexDirection:'row',
    padding:18,
    justifyContent:'space-between',
    alignItems:'center',
  },
  callText:{
    fontSize:17,
    color:'#fff',
    fontWeight:500,
    marginLeft:10,
  },
  cardText:{
    fontSize:20,
    color:'#fff',
    fontWeight:600,
  },
  card:{
    backgroundColor:'#3e4f7a',
    marginVertical:10,
    height:65,
    borderRadius:15,
    justifyContent:'space-between',
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    borderLeftWidth:18,
    borderLeftColor:'lightgreen'
  }
})