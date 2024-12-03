import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItem, TouchableOpacity, View } from 'react-native';
import { styles } from '@/app/styles';
import CartCard from '@/components/molecules/cartCard/cartCard.molecule';
import { CardComponent } from '@/components/molecules/cardComponent/cardComponent.molecule';

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
interface CartDetailProduct {
  discountPercentage: number;
  discountedTotal: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
}

interface CartDetail {
  discountedTotal: number;
  id: number;
  products: CartDetailProduct[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

enum ScreenType {
  LIST = 'LIST',
  DETAIL = 'DETAIL',
}
export default function Index() {
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.LIST);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [cartDetail, setCartDetail] = useState<CartDetail>();

  // ** CALLBACKS ** //
  const onBuyCartPress = useCallback((id: number) => {
    fetch(`https://dummyjson.com/carts/${id}`)
      .then((res) => res.json())
      .then(setCartDetail);
    setScreenType(ScreenType.DETAIL);
  }, []);

  const renderItem = useCallback<ListRenderItem<Cart>>(
    ({ item }) => {
      return <CartCard cart={item} onPress={() => onBuyCartPress(item.id)} />;
    },
    [onBuyCartPress]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  const renderDetailItem = useCallback<ListRenderItem<CartDetailProduct>>(({ item }) => {
    return (
      <View style={styles.detailItem}>
        <CardComponent
          title={item.title}
          subTitle={String(item.price)}
          image={{ uri: item.thumbnail }}
          backgroundColor={'#2e67bd'}
        />
      </View>
    );
  }, []);

  const renderDetailScreen = useCallback(() => {
    return (
      <>
        <TouchableOpacity onPress={() => setScreenType(ScreenType.LIST)}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/106/106830.png' }}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartDetail?.products}
          renderItem={renderDetailItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </>
    );
  }, [ItemSeparatorComponent, cartDetail?.products, renderDetailItem]);

  // ** USE EFFECT ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((response: Response) => setCarts(response.carts));
  }, []);

  return (
    <View style={styles.container}>
      {screenType === ScreenType.LIST ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={carts}
          renderItem={renderItem}
        />
      ) : (
        renderDetailScreen()
      )}
    </View>
  );
}
