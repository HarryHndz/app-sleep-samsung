import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from '@expo/vector-icons/MaterialIcons';
import { Avatar } from "@rneui/themed";
import { View } from "react-native";

export const CustomHeader = ()=>{
  const theme = useThemeColor()
  return(
    <ThemedView style={{width:'100%',height:95,padding:10,backgroundColor:theme.header,flexDirection:'column'}}>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
        <View style={{flexDirection:'row',width:'80%',columnGap:7}}>
          <Avatar
            source={{uri:'https://static.vecteezy.com/system/resources/previews/004/819/327/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'}}
            size='medium'
            rounded
          />
          <View>
            <ThemedText type="text">Bienvenido</ThemedText>
            <ThemedText type="subtitle">Harry Hernández</ThemedText>
          </View>
        </View>
        <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
          <Icon name="notifications-active" size={35} color={theme.tint} />
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:5,alignItems:'center',columnGap:3}}>
        <ThemedText type="text">Agregar actividades del día</ThemedText>
        <Icon name="arrow-forward-ios" size={15} color={theme.text} />
      </View>
    </ThemedView>
  )
}