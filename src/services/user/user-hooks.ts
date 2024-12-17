import { useMutation } from "@tanstack/react-query";
import { createUser, loginUser } from "./user-service";

export const useCreateUser = () => useMutation({
    mutationFn: createUser
});

export const useLoginUser = () => useMutation({
    mutationFn:  loginUser
});