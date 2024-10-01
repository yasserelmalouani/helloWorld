import { Text, View } from 'react-native';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useState } from 'react';

const MULTIPIER = 5;
export default function Index() {
  const [text, setText] = useState(0);

  // ** CALLBACKS  ** //
  const onIncrementByOne = () => {
    setText((prevText) => prevText + 1);
  };
  const onIncrementByFive = () => {
    for (let i = 0; i < MULTIPIER; i++) {
      onIncrementByOne();
    }
  };

  // ** UI  ** //
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>{text}</Text>
      <ButtonComponent title="Cliccami" onPress={onIncrementByOne} />

      <ButtonComponent title="Cliccami" onPress={onIncrementByFive} />
    </View>
  );
}
