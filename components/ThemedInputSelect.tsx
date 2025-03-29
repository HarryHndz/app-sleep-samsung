import { useState } from "react"
import { ThemedInput } from "@/components/ThemedInput"
import { InputProps } from "@rneui/base"

interface PropsInputSelect extends InputProps {

}
export const ThemedInputSelect = ({...props}:PropsInputSelect)=>{
  const [show,setShow] = useState<boolean>(false)
  return(
    <>
      <ThemedInput 
       {...props}
      />
    </>
  )
}