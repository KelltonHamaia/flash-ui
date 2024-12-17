import { useMutation } from "@tanstack/react-query";
import { 
    checkToken,
    createUser,
    loginUser,
    recoverPassword,
    resetPassword 
} from "./user-service";

export const useCreateUser = () => useMutation({
    mutationFn: createUser
});

export const useLoginUser = () => useMutation({
    mutationFn:  loginUser
});

export const useSendEmailToRecoverPassword = () => useMutation({
    mutationFn: recoverPassword
})


export const useChechToken = () => useMutation({
    mutationFn: checkToken
})

export const useResetPassword = () => useMutation({
    mutationFn: resetPassword
})