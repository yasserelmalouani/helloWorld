import React from 'react';
import { Text, View } from 'react-native';
import { ButtonComponent } from '@/components/atoms/button/button.atom';
import { useMemo, useState } from 'react';

export default function Index() {
  const [name, setName] = useState('Mario');

  // ** CALLBACKS  ** //
  const onChangeName = () => {
    setName('Luigi');
  };

  console.log('name', name);

  const user = useMemo(() => {
    return {
      name: name,
      surname: 'Rossi',
      age: 25,
    };
  }, [name]);

  // ** UI  ** //
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, paddingVertical: 32, textAlign: 'center' }}>{user.name}</Text>
      <ButtonComponent title="Cliccami" onPress={onChangeName} />
    </View>
  );
}
