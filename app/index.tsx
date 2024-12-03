import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { styles } from '@/app/styles';
import CartCard from '@/components/molecules/cartCard/cartCard.molecule';

interface Response {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}
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

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export default function Index() {
  const [carts, setCarts] = useState<Cart[]>([]);

  // ** CALLBACKS ** //
  const renderItem = useCallback<ListRenderItem<Cart>>(({ item }) => {
    return <CartCard cart={item} />;
  }, []);

  const ItemSeparatorComponent = useCallback(() => <View style={{ height: 20 }}></View>, []);

  // ** USE EFFECT ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((response: Response) => setCarts(response.carts));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={carts}
        renderItem={renderItem}
      />
    </View>
  );
}
