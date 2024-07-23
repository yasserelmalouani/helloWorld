import {  Image, Text, View, ScrollView } from "react-native";
interface Card {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any;
}
const DATA: Card[] = [
  {title: 'Titolo 1', subTitle: 'Descrizione 1', backgroundColor: 'yellow', image: require('../assets/images/group.jpg')},
  {title: 'Titolo 2', subTitle: 'Descrizione 2', backgroundColor: 'green', image: require('../assets/images/group.jpg')},
  {title: 'Titolo 3', subTitle: 'Descrizione 3', backgroundColor: 'red', image: require('../assets/images/group.jpg')},
  {title: 'Titolo 4', subTitle: 'Descrizione 4', backgroundColor: 'aqua', image: require('../assets/images/group.jpg')},
  {title: 'Titolo 5', subTitle: 'Descrizione 5', backgroundColor: 'violet', image: require('../assets/images/group.jpg')},
  ]

const Card = ({title, subTitle, backgroundColor, image}: Card) => {
  return   <View style={{
    height: 400,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: backgroundColor ?? 'aqua',
    marginBottom: 16,
    }}>

      {/* IMAGE */}
      <View style={{
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
        <Image 
        source={image ?? require('../assets/images/logo.jpg')}
        style={{
          width: 130,
          height: 130,
          borderRadius: 130/2,
          resizeMode: 'cover'
          }}/>
      </View>

      {/* IMAGE */}

      {/* DESCRIPTION */}
    <View style={{flex: 1, paddingVertical: 16,}}>
      <Text style={{fontSize: 20, fontWeight: '800'}}>{title ?? 'Titolo mancante'}</Text>
      <View  style={{flex: 1, justifyContent: 'center'}}>
      <Text>{subTitle ?? 'Descrizione mancante'}</Text>
      </View>
    </View>
    {/* DESCRIPTION */}

  </View>
}


export default function Index() {
  return (
    <ScrollView style={{
      flex: 1,
      paddingHorizontal: 16
    }}>

    {/* INIT CARD */}
    {DATA.map((card, index)=> {
    return (
      <Card
        key={index}
        title={card.title} 
        subTitle={card.subTitle}
        backgroundColor={card.backgroundColor}
        image={card.image}
        />
      )
    })}
      {/* END CARD */}
      
    </ScrollView>

  );
}
