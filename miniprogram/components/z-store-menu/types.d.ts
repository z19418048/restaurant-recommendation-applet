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
type LocalCategoryWithProduct = {
  id: string;
  name: string;
  icon: string;
  resultObject: Products[]
}
type Products = {
  id:string;
  name:string;
  description:string;
  photo:string;
  price:number;
  stock:string;
  categoryid:string;
}