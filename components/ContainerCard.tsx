import { View } from "react-native"
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { ReactNode } from "react";

interface ActivitiesProps {
  icon: ReactNode
  title: string
  subtitle?: string
  actions?: ReactNode
  color?:string
}

export const ContainerCard = ({icon,title,subtitle,actions,color}:ActivitiesProps) => {
  const theme = useThemeColor()
  return(
    <View style={{
      width:'100%',
      minHeight:100,
      height:'auto',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      marginVertical:10,
      padding:10,
      borderRadius:10,
      backgroundColor:color ?? theme.tint,
      shadowColor: 'red',
    }}>
      <View style={{width:'25%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        {icon}
      </View>
      <View style={{flexDirection:'column',gap:5,width:'75%',justifyContent:'center'}}>
        <ThemedText type='subtitle'>{title}</ThemedText>
        {subtitle && <ThemedText type='text'>{subtitle}</ThemedText>}
        {actions && actions}
      </View>
      </View>
  )
}