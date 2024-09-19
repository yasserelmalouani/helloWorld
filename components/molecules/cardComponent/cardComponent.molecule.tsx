import { Image, Text, View } from "react-native";
import { Card } from "@/api/data.mock";
import { styles } from "@/components/molecules/cardComponent/cardComponent.styles";

export const CardComponent = ({
  title,
  subTitle,
  backgroundColor,
  image,
}: Card) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? "aqua",
        },
      ]}
    >
      {/* IMAGE */}
      <View style={styles.containerImage}>
        <Image
          source={image ?? require("../../../assets/images/logo.jpg")}
          style={styles.image}
        />
      </View>
      {/* IMAGE */}

      {/* DESCRIPTION */}
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{title ?? "Titolo mancante"}</Text>
        <View style={styles.containerSubtTitle}>
          <Text>{subTitle ?? "Descrizione mancante"}</Text>
        </View>
      </View>
      {/* DESCRIPTION */}
    </View>
  );
};
