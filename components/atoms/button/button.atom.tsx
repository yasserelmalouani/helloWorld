import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from '@/components/atoms/button/button.styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  activeOpacity?: number;
  onPress: () => void;
}
export const ButtonComponent = ({
  title,
  disabled = false,
  style,
  titleStyle,
  activeOpacity = 0.7,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
