export interface ProductResponseDTO {
  idProduct: number;
  nameProduct: string;
  idCategory: number;
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
