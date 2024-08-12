import { AddToCartProps } from "@/types";
import http from "../httpService";

export async function addToCart(data: AddToCartProps) {
  return http.post("/cart/add", data).then(({ data }) => data.data);
}

export async function removeFromCart(productId: string) {
  return http.post("/cart/remove", { productId }).then(({ data }) => data.data);
}

export async function addCouponToCart(couponCode: string) {
  return http.post("/cart/coupon", couponCode).then(({ data }) => data.data);
}
