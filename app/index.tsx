import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import {Button} from '@rneui/themed'
import { ThemedInput } from "@/components/Input";
import {Formik} from 'formik'
import { View } from "react-native";
import { ILogin } from "@/data/interfaces/IAuth";
export default function Login() {
  const initialValues:ILogin = {
    password:'',
    email:''
  }

  const handleSubmit = async()=>{}
  const handleValidate = ()=>{}
  return(
    <ThemedView>
      <ThemedText type="text">Inicio de sesión</ThemedText>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={handleValidate}
      >
      {({handleBlur,setFieldValue,values,errors,isSubmitting})=>(
        <View>
          <ThemedInput 
            label={'Correo'}
            placeholder='Ingrese su correo'
            onBlur={handleBlur('email')}
            onChangeText={(text)=> setFieldValue('email',text)}
            errorMessage={errors.email}
          />
          <ThemedInput 
            label={'Contraseña'}
            placeholder='Ingrese su contraseña'
            onBlur={handleBlur('password')}
            onChangeText={(text)=> setFieldValue('password',text)}
            errorMessage={errors.password}
          />
        </View>
      )}
      </Formik>
      <Button 
        title='Ir al home'
        onPress={()=> router.navigate('/(tabs)/home')}
      />
    </ThemedView>
  )
}