import { CircularCard } from "@/components/CircularCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import {LineChart} from 'react-native-chart-kit'
interface ItemData {
  id:number
  title:string
  detail:string
  percentage:string
  icon:keyof typeof Icon.glyphMap
}

export default function Statistics(){
  const theme = useThemeColor()
  const dimension = (Dimensions.get('window').width * 90)/ 100
  const data:ItemData[] = [
    { id: 1, title: "Cafeína", detail: "20 tazas al mes", percentage: "-20%", icon: "coffee" },
    { id: 2, title: "Actividad Física", detail: "25 hrs al mes", percentage: "+20%", icon: "access-time" },
    { id: 3, title: "Alcohol", detail: "20 litros al mes", percentage: "-10%", icon: "local-drink" },
    { id: 4, title: "Tabaco", detail: "20 cajas al mes", percentage: "+10%", icon: "smoking-rooms" },
  ]

  const renderItem = ({id,title,detail,percentage,icon}:ItemData)=>{
    return(
      <View style={{flexDirection:'row',alignItems:'center',columnGap:3}}>
        <Icon name={icon} size={40} color={theme.title} />
        <View>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText type="text">{detail}</ThemedText>
        <ThemedText type="text">{percentage}</ThemedText>
        </View>
      </View>
    )
  }
  return(
    <ThemedView style={{flex:1}}>
      <View style={style.containerInfo}>
        <View style={[style.containerCircularCards,{backgroundColor:theme.header}]}>
          <CircularCard 
            width={50}
            height={50}
            label="Lunes"
            children={<ThemedText type='text'>3 hrs</ThemedText>}
          />
          <CircularCard 
            width={50}
            height={50}
            label="Martes"
            children={<ThemedText type='text'>3 hrs</ThemedText>}
          />
          <CircularCard 
            width={50}
            height={50}
            label="Miercoles"
            children={<ThemedText type='text'>3 hrs</ThemedText>}
          />
          <CircularCard 
            width={50}
            height={50}
            label="Jueves"
            children={<ThemedText type='text'>3 hrs</ThemedText>}
          />
          <CircularCard 
            width={50}
            height={50}
            label="Viernes"
            children={<ThemedText type='text'>3 hrs</ThemedText>}
          />
        </View>
        <View style={style.containerCardsMain}>
          <View style={[style.containerInfoMain,{backgroundColor:theme.header}]}>
            <ThemedText type='title'>Enero</ThemedText>
            <ThemedText type='text'>Tiempo promedio de sueño</ThemedText>
            <View style={style.containerSubInfo}>
              <ThemedText type='subtitle'>6.2</ThemedText>
              <ThemedText type='text'>horas por día</ThemedText>
            </View>
          </View>
          <View style={[style.containerInfoMain,{backgroundColor:theme.header}]}>
            <ThemedText type='subtitle'>Calidad</ThemedText>
            <CircularCard
              width={80}
              height={80}
            >
              <View>
                <ThemedText type='title'>50%</ThemedText>
                <ThemedText type='text'>Bueno</ThemedText>
              </View>
            </CircularCard>
          </View>
        </View>
        <View style={{width:'90%',backgroundColor:theme.header,borderRadius:20,marginVertical:20}}>
          <ThemedText type='subtitle' style={{textAlign:'center',marginVertical:20}}>Información adicional</ThemedText>
          <FlatList 
            data={data}
            renderItem={({item})=>renderItem(item)}
            keyExtractor={(item)=>item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-around'}}
            contentContainerStyle={{paddingBottom:32}}
          />
        </View>
        <View>
          <ThemedText type='subtitle' style={{marginVertical:20}}>Estadísticas</ThemedText>
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
        </View>
      </View>
    </ThemedView>
  )
}

const style = StyleSheet.create({
  containerInfo:{
    width:'100%',
    alignItems:'center',
    flexDirection:'column'
  },
  containerCircularCards:{
    flexDirection:'row',
    width:'90%',
    height:'auto',
    borderRadius:10,
    justifyContent:'space-between',
    marginVertical:20,
  },
  containerCardsMain:{
    flexDirection:'row',
    width:'100%',
    height:'auto',
    justifyContent:'center',
    columnGap:'2.5%',
    marginVertical:20
  },
  containerInfoMain:{
    borderRadius:20,
    width:'45%',
    height:'auto',
    padding:'2.5%',
    justifyContent:'center'
  },
  containerSubInfo:{
    flexDirection:'row',
    alignItems:'center',
    columnGap:5
  },

})