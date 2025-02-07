import { Slider } from "@rneui/themed"
import { View } from "react-native"
import { ThemedText } from "./ThemedText"
import Icon from '@expo/vector-icons/MaterialIcons'

interface PropsThemedSlider {
  value?:number,
  onChange:(value:number)=>void
  label:string
  min?:number
  max?:number
  step?:number
}

export const ThemedSlider = ({label,onChange,value=1,max=10,min=0,step=1}:PropsThemedSlider)=>{
  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };
  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };
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
            <Icon
              name="local-drink"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={color()}
            />
          ),
        }}
      />
    </View>
  )
}