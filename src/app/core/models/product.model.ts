export interface ProductResponseDTO {
  idProduct: number;
  nameProduct: string;
  // null cuando la categoria del producto fue eliminada
  idCategory: number | null;
  nameCategory: string;
  stock: number;
  price: number;
  reference: string | null;
  description: string | null;
  photo: string | null;
}

export interface ProductRequestDTO {
  nameProduct: string;
  idCategory: number;
  stock: number;
  price: number;
  reference: string | null;
  description: string | null;
  photo: string | null;
}
