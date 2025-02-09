import { Slider } from "@rneui/themed"
import { View } from "react-native"
import { ThemedText } from "./ThemedText"
import Icon from '@expo/vector-icons/MaterialIcons'
import { useThemeColor } from "@/hooks/useThemeColor"

interface PropsThemedSlider {
  value:number,
  onChange:(value:number)=>void
  label:string
  min:number
  max:number
  step:number
}

export const ThemedSlider = ({label,onChange,value,max,min,step}:PropsThemedSlider)=>{
  const theme = useThemeColor()
  
  return(
    <View>
      <ThemedText type='text'>{label}</ThemedText>
      <Slider 
        value={value}
        onValueChange={onChange}
        maximumValue={max}
        minimumValue={min}
        step={step}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
           <View style={{width:25,height:25,
            borderRadius:'50%',
            backgroundColor:theme.tint,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <ThemedText type='text'>{value}</ThemedText>
            </View>
          ),
        }}
      />
    </View>
  )
}