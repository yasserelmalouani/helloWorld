import { Text, View } from 'react-native';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useState } from 'react';
import { TextInputComponent } from '@/components/atoms/textInput/textInput.atom';

export default function Index() {
  const [text, setText] = useState('');
  const [isConfirmPressed, setIsConfirmPressed] = useState(false);

  // ** CALLBACKS  ** //
  const onChangeText = (text: string) => setText(text);
  const onPress = () => {
    setIsConfirmPressed(true);
  };

  const onReset = () => {
    setText('');
    setIsConfirmPressed(false);
  };

  // ** UI  ** //
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextInputComponent value={text} onChangeText={onChangeText} />
      {isConfirmPressed ? (
        <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>{text}</Text>
      ) : null}
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}></Text>
      <ButtonComponent title="Cliccami" onPress={onPress} />
      <ButtonComponent
        style={{ marginTop: 16, backgroundColor: 'red' }}
        title="Reset"
        onPress={onReset}
      />
    </View>
  );
}
