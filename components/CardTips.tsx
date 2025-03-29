import { Image, ImageStyle, StyleSheet, ViewStyle } from "react-native"
import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"

interface PropsCardTip {
  title:string
  uri:string
  text:string
  stylesContainer?:ViewStyle
  stylesImage?:ImageStyle,
}
export const CardTips = ({title,text,uri,stylesContainer,stylesImage}:PropsCardTip)=>{
  return(
    <ThemedView style={stylesDefault.container ?? stylesContainer}>
      <Image
        source={require('@/assets/images/sleep.png')}
        style={stylesImage ?? stylesDefault.image}
      />
      <ThemedView style={stylesDefault.containerInfo}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText type="text">{text}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const stylesDefault = StyleSheet.create({
  container:{
    flexDirection:'row',
    width:'90%',
    height:'auto',
    marginVertical:10,
    columnGap:5
  },
  image:{
    width:'40%',
    height:100,
    borderRadius:10
  },
  containerInfo:{
    flexDirection:'column',
    width:'60%',
    height:'auto'
  },
})