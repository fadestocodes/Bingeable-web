import { domain } from "../serverEndpoint";
import { User } from "@/app/types";

export const getUsersForCarousel = async (): Promise<User[] | null>  => {
    try {
        const response = await fetch(`${domain}/user/landing-page-carousel`)
        const data = await response.json()
        const usersList: User[] = data.data
        return usersList
    } catch (err) {
        console.log(err)
        return null
    }
}