import { ThemedInput } from "@/components/Input";
import { ThemedSlider } from "@/components/ThemedSlider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IRegister } from "@/data/interfaces/IAuth";
import { CheckBox, Divider } from "@rneui/themed";
import { Formik } from "formik";
import { View } from "react-native";

export default function Register() {
  const initialValues:IRegister = {
    name:'',
    password:'',
    email:'',
    age:'',
    weight:'',
    gender:'',
    caffeine:0,
    drink:false,
    smoke:false,
    excercise:0
  }
  const handleSubmit = async()=>{}
  const handleValidate = ()=>{}
  return(
    <ThemedView>
      <ThemedText type="text"></ThemedText>
      <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={handleValidate}
      >
        {({isSubmitting,handleBlur,handleChange,handleReset,setFieldValue,errors,values})=>(
          <View>
            <View>
              <ThemedInput 
                label='Nombre completo'
                placeholder='Ingrese su nombre'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
              <ThemedInput 
                label='correo'
                placeholder='Ingrese un correo'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
              <ThemedInput 
                label='correo'
                placeholder='Ingrese un correo'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
              <ThemedInput 
                label='contraseña'
                placeholder='Ingrese una contraseña'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
              <ThemedInput 
                label='Edad'
                placeholder='Ingrese su edad'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
              <ThemedInput 
                label='Peso'
                placeholder='Ingrese su edad'
                onChangeText={handleChange('')}
                onBlur={handleBlur('')}
              />
            </View>
            <Divider />
            <View>
              <ThemedSlider  
                label="¿Qué tanta cafeina consume del 1 al 100?"
              />
              <CheckBox 
                title='¿Toma alcohol?'
                checked
                onPress={()=>{}}
              />
              <CheckBox 
                title='¿Fuma?'
                checked
                onPress={()=>{}}

              />
              <ThemedSlider 
                label='Frecuencia con la que realiza actividades fisicas'
              />
            </View>
          </View>
        )}

      </Formik>
    </ThemedView>
  )
 
}