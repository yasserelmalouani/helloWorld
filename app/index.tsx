import { Image, ScrollView, Text, TextInput, View } from "react-native";
export default function Index() {
  return (
    <ScrollView style={{
      borderWidth: 1,
      flex: 1,
      padding: 16,

    }}>
<View style={{
  flex: 1,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center'
}}> 
  <Text style={{color:'white', fontSize: 32}}>Hello world</Text>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <View style={{width: '100%',padding: 16,}}>
  <TextInput  style={{backgroundColor: 'black', height: 30, borderWidth: 1, borderColor: 'aqua', width: '100%', borderRadius: 10, }}  placeholder="Inserisci qua" placeholderTextColor='red' />
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>
  <Image style={{ width: '100%', height: 50}} resizeMode="contain" source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}></Image>

  </View>
  </View>
    </ScrollView>
  );
}
