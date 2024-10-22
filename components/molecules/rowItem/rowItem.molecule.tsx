import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '@/components/molecules/rowItem/rowItem.styles';
interface RowItemMoleculeProps {
  title: string;
  isCompleted: boolean;
  onPress: () => void;
}

export const RowItemMolecule = ({ title, isCompleted, onPress }: RowItemMoleculeProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={isCompleted ? styles.checkBoxCompleted : styles.checkBoxEmpty}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};
