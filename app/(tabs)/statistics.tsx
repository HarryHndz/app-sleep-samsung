import { CircularCard } from "@/components/CircularCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";

export default function Statistics(){
  const theme = useThemeColor()
  return(
    <ThemedView style={{flex:1}}>
      <View style={{width:'100%',alignItems:'center',flexDirection:'column'}}>
        <View style={{
          flexDirection:'row',
          width:'90%',
          height:'auto',
          backgroundColor:theme.header,
          borderRadius:10,
          justifyContent:'space-between'
        }}>
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
        <View>
          <View>
            <ThemedText type='title'>Enero</ThemedText>
            <ThemedText type='text'>Tiempo promedio de sueño</ThemedText>
            <View>
              <ThemedText type='subtitle'>6.2</ThemedText>
              <ThemedText type='text'>horas por día</ThemedText>
            </View>
          </View>
          <View>
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
        <View>
          <ThemedText type='subtitle'>Información adicional</ThemedText>
          
        </View>
      </View>
    </ThemedView>
  )
}