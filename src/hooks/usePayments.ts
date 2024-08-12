

  import { createPayment, getAllPayments, getPaymentById } from "@/services/payment/paymentService";
import { useQuery, useMutation } from "@tanstack/react-query";
  
  export const useGetPayments = () =>
    useQuery({ queryKey: ["payments"], queryFn: getAllPayments, retry: false });
  
  export const useCreatePayment = () =>
    useMutation({
      mutationFn: createPayment,
    });
  
  export const useGetPaymentById = (id:string) =>
    useQuery({
      queryKey: ["get-payment", id],
      queryFn: () => getPaymentById(id),
      retry: false,
      refetchOnWindowFocus: true,
    });
  