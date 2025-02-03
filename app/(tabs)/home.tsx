import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Dimensions, StyleSheet, Text } from "react-native";
import {ProgressChart} from 'react-native-chart-kit'
import { Divider } from "@rneui/themed";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CardTips } from "@/components/CardTips";
import { useThemeColor } from "@/hooks/useThemeColor";
export default function Home(){
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };
  const theme = useThemeColor()
  return(
    <ThemedView style={styles.container}>
      <ThemedView style={styles.mainData}>
        <ThemedView>
          <ProgressChart 
            data={{
              labels:[],
              data:[0.8]
            }}
            width={200}
            height={220}
            strokeWidth={16}
            radius={50}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </ThemedView>
        <ThemedView>
          <ThemedText type='subtitle'>Lunes 15 de Enero 2024</ThemedText>
          <ThemedText type='title'>7 hrs 20 min</ThemedText>
          <ThemedText type='subtitle'>Tiempo dormido</ThemedText>
        </ThemedView>
      </ThemedView>
      <Divider
        width={1}
        color="#FFFFFF"
        style={{marginHorizontal:10,marginVertical:20}}
      />
      <ThemedView style={[styles.mainData,{marginBottom:40}]}>
        <ThemedView style={[styles.containerSubheaderLeft,{backgroundColor:theme.header}]}>
          <ThemedText type="subtitle">0</ThemedText>
          <Icon name="heart-pulse" size={24} color={theme.title}/>
          <ThemedText type="text">Frecuencia cardiaca</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.containerSubheaderRight,{backgroundColor:theme.header}]}>
          <ThemedText type="subtitle">9:30 pm - 8:30 am</ThemedText>
          <Icon name="power-sleep" size={24} color={theme.title} />
          <ThemedText type="text">Horario ideal</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.containerTips}>
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
      </ThemedView>
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
  },
  containerSubheaderRight:{
    width:'49%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  containerTips:{
    flexDirection:'column',
    width:'100%'
  }
})