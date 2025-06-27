import { Changelog } from "../types"

export const changelogList: Changelog[] = [
    {
        version : '1.2.0',
        releaseDate : '06-23-2025',
        changes : [
            "NEW: page for each Recommendation", "NEW: for a movie/show, there is now a page for a list of all its ratings", 
            "Update: changed Trending posts to Recents in search tab"
        ]
    },
    {
        version : '1.1.1',
        releaseDate : '05-20-2025',
        changes : [
            "Fix: Mark All as Read button wouldn't immediately update UI", "Fix: Updating a List's title and content", "Fix: tags for Dialogue/Thread posts wouldn't show up",
            "Fix: at a specific post page, interacting then refreshing wouldn't update UI", "Fix: after posting a Dialogue/Thread, the search bar wouldn't clear",
        ]
    },
    {
        version : '1.1.0',
        releaseDate : '05-07-2025',
        changes : [
            "NEW: save password after logging in", "Update: changed rating range from 4-10 to 1-10","NEW: Mark All as Read button for Notification page", 
            "Update: add read and unread filters for Notification page", "NEW: Ratings page to see list of a user's ratings", 
            "Update: updated 'Trending' algorithms in Search tab", "Fix: would crash when interacted with a comment"
        ]
    },
    {
        version : '1.0.0',
        releaseDate : '04-23-2025',
        changes : [
            "🚀 iOS APP STORE LAUNCH"
        ]
    },
]