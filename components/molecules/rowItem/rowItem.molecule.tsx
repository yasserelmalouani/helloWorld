import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/components/molecules/rowItem/rowItem.styles';
interface RowItemMoleculeProps {
  title: string;
  isCompleted: boolean;
  onPress: () => void;
  onDelete: () => void;
}

export const RowItemMolecule = ({
  title,
  isCompleted,
  onPress,
  onDelete,
}: RowItemMoleculeProps) => {
  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={isCompleted ? styles.checkBoxCompleted : styles.checkBoxEmpty}></View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <TouchableOpacity disabled={!isCompleted} onPress={onDelete}>
          <Image
            style={styles.trashIcon}
            source={{
              uri: 'https://w7.pngwing.com/pngs/178/524/png-transparent-computer-icons-black-and-white-trash-icon-white-text-rectangle.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
