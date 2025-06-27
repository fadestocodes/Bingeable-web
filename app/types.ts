export type User = {
    firstName : string,
    lastName : string,
    id : number,
    email : string,
    username : string,
    profilePic?: string,
    bio?: string,
    bioLink?: string,
    currentRotation?: RotationItem[] | null
}

export type Dialogue = {
    id : number,
    userId : number,
    content : string,
    upvotes : number,
    downvotes : number,
    reposts : number,
    user : User,
    image ?: string,
    mentions?: Mention[],
    createdAt: Date,
    comments: Comments[]
}

export type Comments = {
    id: number,
    userId: number,
    user: User,
    createdAt: Date,

}

export type Mention = {
    id: number,
    tmdbId: number,
    userId: number,
    user: User,
    mentionType: string,
    createdAt: Date,
    movie?: MovieDB,
    tv?: TvDB,
    castCrew?: CastCrewDB,
    dialogueId : number,
    dialogue: Dialogue
}

export type Changelog = {
    version : string,
    releaseDate : string,
    changes : string[]
}

export type MovieDB = {
    id : number,
    tmdbId : number,
    title : string,
    releaseDate : string,
    posterPath ?: string,
    backdropPath ?: string
}
export type TvDB = {
    id : number,
    tmdbId : number,
    title : string,
    releaseDate : string,
    posterPath ?: string,
    backdropPath ?: string
}
export type CastCrewDB = {
    id : number,
    tmdbId : number,
    name : string,
    dob : string,
    posterPath ?: string,
}

export type RotationItem = {
    id: number,
    userId : number,
    user : User,
    movie?: MovieDB,
    tv?: TvDB
}


