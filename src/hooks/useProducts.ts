import {
  getProducts,
  addProduct,
  likeProduct,
  updateProduct,
  removeProduct,
  getProductById,
  getProductBySlug,
} from "@/services/product/productService";
import { Product } from "@/types";
import {
  useMutation,
  useQuery,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";


interface UpdateProductParams {
  productId: string;
  data: Partial<Product>;
}

export const useGetAllProducts = (): UseQueryResult<Product[]> =>
  useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = (): UseMutationResult<Product, unknown, Product> => {
  return useMutation({ mutationFn: addProduct });
};

export const useLikeProduct = (): UseMutationResult<Product, unknown, string> => {
  return useMutation({ mutationFn: likeProduct });
};

export const useUpdateProduct = (): UseMutationResult<Product, unknown, UpdateProductParams> => {
  return useMutation({ mutationFn: updateProduct });
};

export const useRemoveProduct = (): UseMutationResult<Product, unknown, string> => {
  return useMutation({ mutationFn: removeProduct });
};

export const useGetProductById = (id: string): UseQueryResult<Product> =>
  useQuery({
    queryKey: ["get-product", id],
    queryFn: () => getProductById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetProductBySlug = (slug: string): UseQueryResult<Product> =>
  useQuery({
    queryKey: ["get-product-slug", slug],
    queryFn: () => getProductBySlug(slug),
    retry: false,
    refetchOnWindowFocus: true,
  });
