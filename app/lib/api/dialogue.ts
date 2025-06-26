import { Dialogue } from "@/app/types"
import { domain } from "../serverEndpoint"

export const getLandingPageDialogues = async ( ): Promise<Dialogue[] | null> => {
    try {
        const response = await fetch(`${domain}/dialogue/landing-page-carousel`)
        const data = await response.json()
        const dialogues = data.data
        return dialogues
    } catch (err){
        console.log(err)
        return null
    }
}