import { ThemedInput } from "@/components/ThemedInput";
import { ThemedSlider } from "@/components/ThemedSlider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IRegister } from "@/data/interfaces/IAuth";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, CheckBox, Divider } from "@rneui/themed";
import { Link } from "expo-router";
import { Formik } from "formik";
import { Dimensions, Pressable, TouchableOpacity, View } from "react-native";

export default function Register() {
  const width = (Dimensions.get('window').width * 85) /100
  const theme = useThemeColor()
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
    <ThemedView style={{flex:1,width:'100%',height:'100%',
      backgroundColor:theme.header,
      flexDirection:'column',alignItems:'center',
      justifyContent:'center',
    }}>
      <View style={{backgroundColor:theme.background,width:'90%',padding:'5%',borderRadius:25}}>
        <ThemedText type="title" style={{textAlign:'center',paddingVertical:2}}>Registro</ThemedText>
        <Formik 
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={handleValidate}
          enableReinitialize
        >
          {({isSubmitting,handleBlur,handleChange,handleReset,setFieldValue,errors,values})=>(
            <View>
              <View>
                <ThemedInput 
                  label='Nombre completo'
                  placeholder='Ingrese su nombre'
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                <ThemedInput 
                  label='correo'
                  placeholder='Ingrese un correo'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <ThemedInput 
                  label='contraseña'
                  placeholder='Ingrese una contraseña'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <View style={{flexDirection:'row',width:'100%',height:'auto'}}>
                <ThemedInput 
                  label='Edad'
                  placeholder='Ingrese su edad'
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  containerStyle={{width:(width/2)}}
                />
                <ThemedInput 
                  label='Peso'
                  placeholder='Ingrese su edad'
                  onChangeText={handleChange('weight')}
                  onBlur={handleBlur('weight')}
                  containerStyle={{width:(width/2)}}
                />
                </View>
              </View>
              <Divider />
              <View style={{marginVertical:10}}>
                <ThemedSlider
                  value={values.caffeine}
                  max={10}
                  min={0}
                  step={1}
                  onChange={(value)=>setFieldValue('caffeine',Math.round(value))
                  }  
                  label="¿Qué tanta cafeina consume del 1 al 100?"
                />
                <CheckBox 
                  title='¿Toma alcohol?'
                  checked={values.drink}
                  onPress={()=>setFieldValue('drink',!values.drink)}
                  containerStyle={{backgroundColor:theme.background}}
                  textStyle={{color:theme.text}}
                />
                <CheckBox 
                  title='¿Fuma?'
                  checked={values.smoke}
                  onPress={()=>setFieldValue('smoke',!values.smoke)}
                  containerStyle={{backgroundColor:theme.background}}
                  textStyle={{color:theme.text}}
                />
                <ThemedSlider 
                  label='Frecuencia con la que realiza actividades fisicas'
                  value={values.excercise}
                  max={10}
                  min={0}
                  step={1}
                  onChange={(value)=>setFieldValue('excercise',Math.round(value))
                  }
                />
              </View>
              <Link href='/' style={{marginTop:5,marginBottom:20}} asChild>
                <TouchableOpacity>
                  <ThemedText type='text'>Iniciar sesión</ThemedText>
                </TouchableOpacity>
              </Link>
              <Button 
                title='Guardar'
                onPress={()=>handleSubmit()}
                buttonStyle={{backgroundColor:theme.tint,height:50,borderRadius:25}}
              />
            </View>
          )}
        </Formik>
      </View>
    </ThemedView>
  )
}