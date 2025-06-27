import { domain } from "../serverEndpoint"


export const signUpEmailList = async (email: string) => {
    try {
        const response = await fetch(`${domain}/email/signup`, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({email})
        })
        const data = await response.json()
        return data
    } catch (err){
        console.log(err)
    }
}