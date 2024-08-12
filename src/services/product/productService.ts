import { Product } from "@/types";
import http from "../httpService";


interface UpdateProductParams {
  productId: string;
  data: Partial<Product>;
}

export async function getProducts(): Promise<Product[]> {
  return http.get('/product/list').then(({ data }) => data.data);
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export async function getProductById(id: string): Promise<Product> {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export async function likeProduct(id: string): Promise<Product> {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin functions

export async function addProduct(data: Product): Promise<Product> {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export async function removeProduct(id: string): Promise<Product> {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}

export async function updateProduct({ productId, data }: UpdateProductParams): Promise<Product> {
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
