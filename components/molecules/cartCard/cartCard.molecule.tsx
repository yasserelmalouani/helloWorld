import React, { memo } from 'react';
import { Cart } from '@/app';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '@/components/molecules/cartCard/cartCard.styles';

interface CartCardProps {
  cart: Cart;
}

const CartCard = ({ cart }: CartCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>USER CART: {cart.userId}</Text>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: 'https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG-Picture.png',
            }}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.genericCardText}>Cart products: {cart.totalProducts}</Text>
        <Text style={[styles.genericCardText, styles.genericCardTextSpacing]}>
          Total cost: {cart.total} $
        </Text>
      </View>

      <TouchableOpacity style={styles.buyCartButton} onPress={console.warn}>
        <Text style={styles.genericCardText}>BUY CART {cart.discountedTotal} $</Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(CartCard);
