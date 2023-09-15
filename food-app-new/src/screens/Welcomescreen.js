import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
 const Welcomescreen= ({navigation}) => {

  return (
   
    <SafeAreaView style ={{ flex : 1 ,alignItems: "center"}}>
     <Image source= {require('../../assets/images/welcome1.png')} style={{height:420 ,width:420,marginTop: 10}}/>
<Text style={{color: "#f96162", fontSize:22,}}> Get 40+ Premium Recipes</Text>
    <Text style={{ fontSize:42 , textAlign : "center" , marginTop: 20,fontWeight :'bold',color:"#3c444c"}}>

        Cook Like A Professional Chef
    </Text>
    <Image source ={require('../../assets/images/newog.png')} style={{ height:120 , width :370}}></Image>
    <TouchableOpacity 
    onPress={()=> navigation.navigate("Recipe")}
    style={{

borderRadius:18,
paddingVertical: 28,
width:"80%",
alignItems: "center",
marginTop:10,
borderColor :'#3c444c',

    }} ><LinearGradient 
      colors={['yellow', 'white', 'red' ]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 0.5,0.9]}><Text style={{fontSize:30,color:"#3c444c"}}>Chow time!</Text></LinearGradient></TouchableOpacity>

    </SafeAreaView>

  );
}
export default Welcomescreen;


const styles = StyleSheet.create({

linearGradient :{

borderRadius:18,
paddingVertical: 18,
width:"90%",
alignItems: "center",

}

});