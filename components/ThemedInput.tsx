import { StyleSheet, View } from "react-native"
import { Input, InputProps } from "@rneui/themed"
import { useThemeColor } from "@/hooks/useThemeColor"
import { useState } from "react"

interface ThemedInputProps extends InputProps{
  typePassword?:boolean
}
export const ThemedInput =({typePassword=false,onBlur,...props}:ThemedInputProps)=>{
  const theme = useThemeColor()
  const [focusable,setFocusable] = useState<boolean>(false)
  return(
    <View>
      <Input 
        inputContainerStyle={[
          {backgroundColor:theme.title},
          focusable ? {borderRadius:7,borderWidth:2,borderColor:theme.tint} : {borderRadius:7}
        ]}
        labelStyle={{color:theme.title,marginVertical:5}}
        inputStyle={{borderColor:'red'}}
        placeholderTextColor={theme.text}
        secureTextEntry={typePassword}
        errorStyle={{color:'red'}}
        onFocus={()=> setFocusable(!focusable)}
        onBlur={()=>{
          setFocusable(!focusable)
        }}
        {...props}
      />
    </View>
  )
}

