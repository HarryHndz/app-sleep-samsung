import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from '@expo/vector-icons/MaterialIcons';
import { Divider } from "@rneui/themed";
import { View } from "react-native";

export const HeaderActivities = ()=>{
  const theme = useThemeColor()
  return(
    <ThemedView style={{width:'100%',height:95,padding:10,backgroundColor:theme.header,flexDirection:'column'}}>
      <View style={{flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <ThemedText type='title'>Actividades del día</ThemedText>
        <View style={{flexDirection:'row',columnGap:5}}>
          <Icon name="sunny" size={30} color={theme.text}/>
          <View style={{width:50,justifyContent:'center'}}>
            <Divider 
              width={2}
              orientation='horizontal'
              color={theme.text}
            /> 
          </View>
          <Icon name="mode-night" size={30} color={theme.text}/>
        </View>
      </View>
    </ThemedView>
  )
}