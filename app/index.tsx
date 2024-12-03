import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { styles } from '@/app/styles';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface Response {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export default function Index() {
  const [carts, setCarts] = useState<Cart[]>([]);

  // ** CALLBACKS ** //
  const renderItem = useCallback<ListRenderItem<Cart>>(({ item }) => {
    return <Text>{item.id}</Text>;
  }, []);

  // ** USE EFFECT ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((response: Response) => setCarts(response.carts));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={carts} renderItem={renderItem} />
    </View>
  );
}
