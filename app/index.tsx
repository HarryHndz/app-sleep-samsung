import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import {Button} from '@rneui/themed'
import { ThemedInput } from "@/components/ThemedInput";
import {Formik} from 'formik'
import { TouchableOpacity, View } from "react-native";
import { ILogin } from "@/data/interfaces/IAuth";
import { useThemeColor } from "@/hooks/useThemeColor";
export default function Login() {
  const theme = useThemeColor()
  const initialValues:ILogin = {
    password:'',
    email:''
  }

  const handleSubmit = async()=>{}
  const handleValidate = ()=>{}
  return(
    <ThemedView style={{
      width:'100%',
      height:'100%',backgroundColor:theme.header,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'flex-end'
    }}>
      <View style={{backgroundColor:theme.background,
        width:'100%',
        height:'60%',
        paddingHorizontal:10,paddingVertical:40,
        borderTopLeftRadius:50,
        borderTopRightRadius:50
        }}>
        <ThemedText type="title" style={{textAlign:'center'}}>Inicio de sesión</ThemedText>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
        {({handleBlur,setFieldValue,values,errors,isSubmitting,handleChange,handleSubmit})=>(
          <View style={{rowGap:15}}>
            <ThemedInput 
              label={'Correo'}
              placeholder='Ingrese su correo'
              value={values.email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              errorMessage={errors.email}
            />
            <ThemedInput 
              label={'Contraseña'}
              placeholder='Ingrese su contraseña'
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              errorMessage={errors.password}
              typePassword

            />
            <Link href='/register' asChild>
              <TouchableOpacity>
                <ThemedText type='text'>Crear una cuenta</ThemedText>
              </TouchableOpacity>
            </Link>               
            <Button 
              title='Ingresar'
              onPress={()=> router.replace('/(tabs)/home')}
              loading={isSubmitting}
              buttonStyle={{backgroundColor:theme.tint,height:50,borderRadius:25}}
          />
          </View>
        )}
        </Formik>
      </View>
    </ThemedView>
  )
}