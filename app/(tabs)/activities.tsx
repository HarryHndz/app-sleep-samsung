import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, Divider } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { ContainerCard } from "@/components/ContainerCard";

export default function Activities(){
  const theme = useThemeColor()
  return( 
    <ThemedView style={{flex:1}}>       
      <View style={styles.containerInfo}>
        <ThemedText type='subtitle'>Lunes 15 de Enero 2025</ThemedText>
        <ThemedText type='title'>Ingesta</ThemedText>
        <Divider
          width={2}
          color={theme.text}
          style={{marginVertical:20}} 
        />
        <ContainerCard 
          icon={<Icon name='coffee' size={40} color={theme.text} />}
          title='Consumo de cafeina'
          subtitle='2 tazas'
          actions={
            <Button
              iconPosition='right'
              icon={<Icon name='add' size={25} color={theme.tint} />} 
              title='Añadir'
              style={{marginHorizontal:10,marginVertical:20}}
              titleStyle={{color:theme.tint}}
              buttonStyle={{backgroundColor:theme.subtitle,width:200,height:45,borderRadius:20}}
            />
          }
        />
        <ContainerCard
          icon={<Icon name='local-drink' size={40} color={theme.text} />}
          title='Consumo de alcohol'
          subtitle='200ml'
          actions={
            <Button
              iconPosition='right'
              icon={<Icon name='add' size={25} color={theme.tint} />}
              title='Añadir'
              style={{marginHorizontal:10,marginVertical:20}}
              titleStyle={{color:theme.tint}}
              buttonStyle={{backgroundColor:theme.subtitle,width:200,height:45,borderRadius:20}}
            />
          }
        />
        <Button 
          title='Añadir otros consumos'
          style={{marginHorizontal:10,marginVertical:20}}
          color={theme.header}
          buttonStyle={{marginVertical:10,height:50}}
        />
      </View>
      <View style={styles.containerInfo}>
        <ThemedText type='title'>Actividades Fisicas</ThemedText>
        <ThemedText type='subtitle'>Actividad recolectada por el smartwatch</ThemedText>
        <ContainerCard 
          icon={<Icon name='timelapse' size={40} color={theme.text} />}
          title='Pasos'
          subtitle='2000'
        />
        <ContainerCard
          icon={<Icon name='directions-run' size={40} color={theme.text} />}
          title='Calorias quemadas'
          subtitle='2000'
        />
      </View>

    </ThemedView>
  )
}


const styles = StyleSheet.create({
  containerInfo:{
    flexDirection:'column',
    padding:10,
    width:'100%',
    marginVertical:15
  }
})