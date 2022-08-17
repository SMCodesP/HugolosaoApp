interface TItem {
  id: string;
  name: string;
  price: number;
  image: string;
  assessment: number;
  sold: number;
  image_size: {
    width: number;
    height: number;
  };
  ingredients: {
    name: string;
    blocked: boolean;
  }[];
}
