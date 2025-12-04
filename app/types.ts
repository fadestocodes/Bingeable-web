export type User = {
    firstName : string,
    lastName : string,
    id : number,
    email : string,
    username : string,
    profilePic?: string,
    bio?: string,
    bioLink?: string,
    currentRotation?: RotationItem[] | null,
    accountType?: string,
    filmRole ?: string,
    filmDept ?: string,
    displayBadge ?: string,
    unlockedBadges ?: Array<UnlockedBadges>,
    isAdmin ?: boolean

}

export type UnlockedBadges = {
    id : number,
    userId : number,
    user : User,
    displayedBy ?: User,
    badgeType : string,
    badgeLevel : string,
    createdAt : Date,
    BadgeNotifiation ?: Array<BadgeNotification>,
    activity ?: Array<Activity>,
}

export type Activity = {
    id : number,
    userId : number,
    user : User,
    description ?: string,
    activityType ?: string,
    createdAt : Date,
    notificationRecipientId ?: number,
    notificationRecipient ?: User,
    dialogueId ?: number,
    dialogue ?: Dialogue,
    movieId ?: number,
    movie ?: MovieDB,
    tvId ?: number,
    tv ?: TvDB,
    castId ?: number,
    castCrew ?: CastCrewDB,
    listId ?: number,
    list ?: List,
    recommendationId ?: number,
    recommendation ?: Recommendation,
    commentId ?: number,
    comment ?: Comments,
    commentsOnActivity ?: Comments[],
    ratingId ?: number,
    rating ?: Rating,
    reviewId ?: number,
    review ?: Review,
    setDayId ?: number,
    setDays ?: SetDays,
    badgeId ?: number,
    badge ?: UnlockedBadges,
    upvotes : number,
    downvotes : number,
    reposts : number,
    parentActivityId ?: number,
    parentActivity ?: Activity,
    interactedActivity ?: Array<Activity>
    isRead : boolean

}

export type BadgeNotification = {
    id: number
    userId : number,
    user : User,
    badgeId : number,
    badge : UnlockedBadges
    message: string,
    seen : boolean,
    badgeLevel : string,
    badgeType : string,
    createdAt: Date,
};


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

export type List = {
    id : number,
    userId : number,
    user : User,
    title : string,
    upvotes : number,
    downvotes : number,
    reposts : number,
    comments ?: Array<Comments>
}

export type RotationItem = {
    id: number,
    userId : number,
    user : User,
    movie?: MovieDB,
    tv?: TvDB
}


export type Recommendation = {
    id : number,
    recipientId : number,
    recipient : User,
    recommenderId : number,
    recommender : User,
    movieId ?: number,
    movie ?: MovieDB,
    tvId ?: number,
    tv ?: TvDB,
    message ?: string,
    createdAt : Date,
    comments : Array<Comments>

}

export type Rating = {
    id : number,
    rating : number,
    createdAt : Date,
    userId : number,
    user : User,
    review ?: Review,
    movieId ?: number,
    movie ?: MovieDB,
    tvId ?: number,
    tv ?: TvDB,
}

export type Review = {
    
    id : number,
    createdAt : Date,
    userId : number,
    user : User,
    review ?: Review,
    movieId ?: number,
    movie ?: MovieDB,
    tvId ?: number,
    tv ?: TvDB,
    ratingId : number,
    rating : Rating
}


export type SetDays = {
    id : number,
    userId : number,
    user : User,
    createdAt : Date,
    image ?: string,
    caption ?: string,
    production ?: string,
    activity ?: Activity[]
}