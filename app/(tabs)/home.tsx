import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Dimensions, StyleSheet } from "react-native";
import {ProgressChart} from 'react-native-chart-kit'
import { Divider } from "@rneui/themed";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CardTips } from "@/components/CardTips";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";
export default function Home(){
  const theme = useThemeColor()
  const chartConfig = {
    backgroundGradientFrom: theme.background,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.background,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(113, 72, 252, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  }
  const dimensions = (Dimensions.get('window').width * 40) / 100

  return(
    <ThemedView style={styles.container}>
      <View style={[styles.mainData,{height:150}]}>
        <View style={{width:'40%'}}>
          <ProgressChart 
            data={{
              labels:[],
              data:[0.8],
            }}
            width={dimensions}
            height={150}
            strokeWidth={16}
            radius={55}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <View style={{position:'absolute',right:38,top:55}}>
          <ThemedText type="title">50%</ThemedText>
          <ThemedText type="text">Bueno</ThemedText>
          </View>
        </View>
        <View style={{width:'60%',justifyContent:'center',alignItems:'flex-end'}}>
          <ThemedText type='subtitle' style={{marginBottom:7}}>Lunes 15 de Enero 2024</ThemedText>
          <ThemedText type='title' style={{color:theme.tint}}>7 hrs 20 min</ThemedText>
          <ThemedText type='subtitle' style={{color:theme.tint}}>Tiempo dormido</ThemedText>
        </View>
      </View>
      <Divider
        width={2}
        color={theme.header}
        style={{marginHorizontal:10,marginVertical:20}}
      />
      <View style={[styles.mainData,{marginBottom:40}]}>
        <View style={[styles.containerSubheaderLeft,{backgroundColor:theme.header}]}>
          <View style={styles.infoSubHeader}>
            <ThemedText type="subtitle">0</ThemedText>
            <Icon name="heart-pulse" size={24} color={theme.title}/>
          </View>
          <ThemedText type="text">Frecuencia cardiaca</ThemedText>
        </View>
        <View style={[styles.containerSubheaderRight,{backgroundColor:theme.header}]}>
          <ThemedText type="subtitle">9:30 pm - 8:30 am</ThemedText>
          <View style={styles.infoSubHeader}>
            <Icon name="power-sleep" size={24} color={theme.title} />
            <ThemedText type="text">Horario ideal</ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.containerTips}>
        <ThemedText type="title">Tips para mejorar tu calidad del sueño</ThemedText>
        <CardTips 
          title="Tip1 Lorem ipsum dolo"
          text="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Pellentesque luctus sem a libero fermentum, 
            et finibus dolor pharetra. "
          uri="https://healthiersleepmag.com/wp-content/uploads/2023/03/Four-stages-of-sleep.png"
        />
        <CardTips 
          title="Tip1 Lorem ipsum dolo"
          text="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Pellentesque luctus sem a libero fermentum, 
            et finibus dolor pharetra. "
          uri="https://healthiersleepmag.com/wp-content/uploads/2023/03/Four-stages-of-sleep.png"
        />
      </View>
    </ThemedView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    flexDirection:'column',
    padding:10,
  },
  mainData:{
    flexDirection:'row',
    width:'100%',
    columnGap:5,
  },
  containerSubheaderLeft:{
    width:'49%',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingHorizontal:7,
    paddingVertical:5,
    justifyContent:'center'
  },
  containerSubheaderRight:{
    width:'49%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    paddingHorizontal:7,
    paddingVertical:5,
    justifyContent:'center'
  },
  containerTips:{
    flexDirection:'column',
    width:'100%'
  },
  infoSubHeader:{
    flexDirection:'row',
    columnGap:5,
    alignItems:'center'
  }
})