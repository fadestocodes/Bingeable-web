export type User = {
    firstName : string,
    lastName : string,
    id : number,
    email : string,
    username : string
}

export type Dialogue = {
    id : number,
    userId : number,
    content : string,
    upvotes : number,
    downvotes : number,
    reposts : number,
}