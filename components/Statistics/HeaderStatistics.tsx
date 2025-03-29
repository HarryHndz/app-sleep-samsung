import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, View } from "react-native";

export const HeaderStatistics = ()=>{
  const theme = useThemeColor()
  return(
    <ThemedView style={{width:'100%',height:95,padding:10,backgroundColor:theme.header,flexDirection:'column'}}>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
        <View style={{flexDirection:'column',width:'80%',columnGap:7}}>
          <ThemedText type="text">Registra tu calidad del sueño</ThemedText>
          <ThemedText type="title">Lunes</ThemedText>
          <ThemedText type="subtitle">25 de Enero del 2025</ThemedText>
        </View>
        <TouchableOpacity style={{
          width:'20%',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:theme.tint,
          borderRadius:'50%'
        }}>
          <Icon name="calendar-today" size={35} color={theme.text} />
        </TouchableOpacity>
      </View>
    </ThemedView>
  )
}