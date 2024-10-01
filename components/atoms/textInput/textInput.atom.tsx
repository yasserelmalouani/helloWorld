import { TextInput, View, ViewStyle } from 'react-native';
import { styles } from '@/components/atoms/textInput/textInput.styles';
interface TextInputProps {
  value: string;
  containerStyle?: ViewStyle;
  onChangeText: (text: string) => void;
}
export const TextInputComponent = ({ containerStyle, value, onChangeText }: TextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        // placeholderTextColor={'black'}
        // placeholder={'Inserisci testo'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
