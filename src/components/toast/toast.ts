import { toast } from "sonner"

type Props = {
    message: string,
    type: "success" | "error" | "warning" | "info" 
}

export const Notification = ( { message, type  }: Props ) => {
    return toast[type](message, { richColors: true }) 
} 