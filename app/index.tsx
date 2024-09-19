import { Text, View, FlatList, ListRenderItem } from "react-native";
import { Card, cards } from "@/api/data.mock";
import { CardComponent } from "@/components/molecules/cardComponent/cardComponent.molecule";

const renderItem: ListRenderItem<Card> = ({ item, index }) => {
  return (
    <CardComponent
      key={index}
      title={item.title}
      subTitle={item.subTitle}
      backgroundColor={item.backgroundColor}
      image={item.image}
    />
  );
};
const ItemSeparatorComponent = () => <View style={{ height: 16 }} />;
const ListHeaderComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Le card di oggi:{" "}
    </Text>
  );
};
const ListFooterComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Fine della lista
    </Text>
  );
};

const ListEmptyComponent = () => {
  return (
    <Text style={{ fontSize: 24, paddingVertical: 16, textAlign: "center" }}>
      Nessuna card da mostrare
    </Text>
  );
};

export default function Index() {
  return (
    <FlatList
      style={{ flex: 1 }}
      bounces={false}
      data={cards}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}
