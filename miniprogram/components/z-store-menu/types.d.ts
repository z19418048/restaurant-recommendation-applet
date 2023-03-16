type CategoryWithProduct = {
  id: string;
  name: string;
  icon: string;
  products: Product[]
}

type Product = {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
}