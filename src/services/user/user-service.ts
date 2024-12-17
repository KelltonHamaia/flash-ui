import { NewUserdata, UpdateUserdata, UserEntries } from '@/schema/user-schema-validation';
import axios from 'axios';

const userRequest =  axios.create({
    baseURL: "http://localhost:3333/users"
});


export const createUser = async (userData: NewUserdata) => {
    const { data } = await userRequest.post("/signup", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword
    })

    return data;
};

export const loginUser = async (userCredentials: UserEntries) => {
    const { data } = await userRequest.post("/signin", {
        email: userCredentials.email,
        password: userCredentials.password
    });

    return data;
}

export const updateUser = async (userData: UpdateUserdata) => {
    const { data } = await userRequest.put("/update", {
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        password: userData.password,
        confirmPassword: userData.confirmPassword
    });

    return data;
}

export const recoverPassword = async (email: string) => {
    const { data } = await userRequest.post("/recoveraccount", {
        email: email
    });

    return data;
}

export const checkToken = async (token: string) => {
    const { data } = await userRequest.post(`/recoveraccount/checktoken`, { 
        token: token
    });

    return data;
}

type ResetPassword = {
    userId: string, 
    password: string, 
    confirmPassword: string
}

export const resetPassword = async (resetData: ResetPassword) => {
    const { data } = await userRequest.post(`/recoveraccount/createnewpassword`, {
        resetData
    });

    return data;
}