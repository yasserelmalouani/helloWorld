export interface Card {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any;
}

export const cards: Card[] = [
  {
    title: "Titolo 1",
    subTitle: "Descrizione 1",
    backgroundColor: "yellow",
    image: require("../assets/images/group.jpg"),
  },
  {
    title: "Titolo 2",
    subTitle: "Descrizione 2",
    backgroundColor: "green",
    image: require("../assets/images/group.jpg"),
  },
  {
    title: "Titolo 3",
    subTitle: "Descrizione 3",
    backgroundColor: "red",
    image: require("../assets/images/group.jpg"),
  },
  {
    title: "Titolo 4",
    subTitle: "Descrizione 4",
    backgroundColor: "aqua",
    image: require("../assets/images/group.jpg"),
  },
  {
    title: "Titolo 5",
    subTitle: "Descrizione 5",
    backgroundColor: "violet",
    image: require("../assets/images/group.jpg"),
  },
];
