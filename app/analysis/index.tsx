import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Analysis(){
  const theme = useThemeColor()
  const dimension = (Dimensions.get('window').width * 90)/ 100
  return(
    <ThemedView style={{flex:1}}> 
      <View>
        <ThemedText type="subtitle">Resumen actual</ThemedText>
        <ThemedText type="text">Ayer has dormido 7 hrs</ThemedText>
        <ThemedText type="text">En promedio has dormido 3 hr</ThemedText>
        <ThemedText type="text">Calidad mala</ThemedText>
        <ThemedText type="text">Situación alarmante</ThemedText>
        <View></View>
      </View>
      <View>
        <ThemedText type="subtitle">Recomendaciones</ThemedText>
        <ThemedText type="text">Debes dormir  7 hrs diarias</ThemedText>
        <ThemedText type="text">Horario recomendado de 9:00 pm - 8:00 am</ThemedText>
        <ThemedText type="text">Reducir el consumo de cafeina</ThemedText>
        <ThemedText type="text">Reducir el consumo de tabaco</ThemedText>
      </View>
      <LineChart
        width={dimension}
        height={200}
        withShadow
        onDataPointClick={(data)=>console.log(data)}
        yAxisSuffix="%"
        style={{borderRadius:10}}
        data={{
          labels:['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
          legend:['Calidad del sueño'],
          datasets:[{
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2 
          }]
        }}
        chartConfig={{
          decimalPlaces:0,
          backgroundGradientFrom: theme.header,
          backgroundGradientFromOpacity: 2,
          backgroundGradientTo: theme.background,
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(113, 72, 252, ${opacity})`,
          labelColor:()=> '#FFFFFF',
          strokeWidth: 2,
          barPercentage: 0.5,
          useShadowColorFromDataset: false,
          // propsForDots:{
          //   r:'6',
          //   strokeWidth:'2',
          //   stroke:'red'
          // }
        }}
      />
    </ThemedView>
  )
}