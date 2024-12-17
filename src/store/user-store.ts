import { User } from '@/types/User';
import { create } from 'zustand';

type UserState = {
    user: User | null;
    token: string | null;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
    logout: () => void;
}

export const userStore = create<UserState>((set) =>({
    user: null,
    token: null,
    setUser: (user: User) => set(() => ({ user })),
    setToken: (token: string) => set(() => ({ token })),
    logout: () => set(() => ({ user: null, token: null }))
}));
