import { z } from 'zod';

const requiredError = {
    required_error: "Este campo é obrigatório.",
}

export const validateUserData = z.object({
    name: z.string(requiredError).min(2, "Nome deve ter no mínimo 2 caracteres"),
    email: z.string(requiredError).email("Informe um email válido"),
    password: z.string(requiredError).min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(requiredError).min(6, "Senha deve ter no mínimo 6 caracteres"),
})
.refine( keys => keys.password === keys.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"]
});

export const validateUserEntries = z.object({
    email: z.string(requiredError).email("Informe um email válido"),
    password: z.string(requiredError),
});

export const updateUserData = z.object({
    name: z.string(requiredError).min(2, "Nome deve ter no mínimo 2 caracteres").optional(),
    email: z.string(requiredError).email("Informe um email válido").optional(),
    avatar: z.string(requiredError).optional(),
    password: z.string(requiredError).min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
    confirmPassword: z.string(requiredError).min(6, "Senha deve ter no mínimo 6 caracteres").optional(),
})
.refine( keys => keys.password === keys.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"]
});


export type NewUserdata = z.infer<typeof validateUserData>;
export type UserEntries = z.infer<typeof validateUserEntries>;
export type UpdateUserdata = z.infer<typeof updateUserData>;