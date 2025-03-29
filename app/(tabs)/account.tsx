import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Avatar } from "@rneui/themed";
import { View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { ContainerCard } from "@/components/ContainerCard";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Account(){
  const theme = useThemeColor()
  return(
    <ThemedView style={{flex:1,width:'100%',height:'100%',rowGap:10}}>
      <View style={{flexDirection:'column',rowGap:5,justifyContent:'center',alignItems:'center'}}>
        <Avatar
          source={require('@/assets/images/avatar.jpg')}
          size='xlarge'
          rounded
        />
        <ThemedText type="subtitle">Harry Hernández Arias</ThemedText>
      </View>
      <View>
        <ContainerCard 
          icon={<Icon name='home' size={25} color={theme.tint} />}
          title='Perfil'
          color={theme.background}
        />
        <ContainerCard
          icon={<Icon name='work' size={25} color={theme.tint} />}
          title='Notificaciones'
          color={theme.background}
        />
        <ContainerCard
          icon={<Icon name='work' size={25} color={theme.tint}/>}
          title='Cerrar sesión'
          color={theme.background}
        />
        <ContainerCard
          icon={<Icon name='work' size={25} color={theme.tint} />}
          title='Eliminar cuenta'
          color={theme.background}
        />
        
      </View>
    </ThemedView>
  )
}