import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import {Button} from '@rneui/themed'
export default function Login() {
  return(
    <ThemedView>
      <ThemedText>Inicio de sesión</ThemedText>
      <Button 
        title='Ir al home'
        onPress={()=> router.navigate('/(tabs)/home')}
      />
    </ThemedView>
  )
}