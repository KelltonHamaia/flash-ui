"use client"

import { queryClient } from "@/providers/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const GlobalQueryClient = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools
                buttonPosition="bottom-right"
                position="right"
            />
        </QueryClientProvider>
    )
}