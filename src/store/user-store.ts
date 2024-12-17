import { User } from '@/types/User';
import { create } from 'zustand';

type UserState = {
    user: User | null;
    token: User | null;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
    logout: () => void;
}

export const userStore = create<UserState>((set) =>({
    user: null,
    token: null,
    setUser: (user: User) => set(state => ({ user: state.user})),
    setToken: (token: string) => set(state => ({ token: state.token })),
    logout: () => set(state => ({ user: null }))
}));
