import { ColorValue, DimensionValue, View } from "react-native"
import { ThemedText } from "./ThemedText"
import { useThemeColor } from "@/hooks/useThemeColor"
import { ReactNode } from "react"

interface CircularCardProps{
  width:DimensionValue,
  height:DimensionValue,
  label?:string
  color?:ColorValue
  children:ReactNode
}

export const CircularCard =({width,height,label,color,children}:CircularCardProps)=>{
  const theme = useThemeColor()
  return(
    <View style={{padding:5}}>
      <View style={{
        height,
        width,
        borderRadius:'50%',
        marginBottom:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: color ?? theme.tint
      }}>
       {children}
      </View>
      {label && <ThemedText type='text'>{label}</ThemedText>}
    </View>
  )
}