import { format, isToday, differenceInMinutes, differenceInHours } from 'date-fns';


export const formatDate = (date: Date): string => {
    const now = new Date();  // Get current date and time
    const targetDate = new Date(date);  // Convert input to a Date object

    if (isToday(targetDate)) {
        let minutesAgo = differenceInMinutes(now, targetDate);
        if (minutesAgo ===0){
            minutesAgo = 1
        }
        
        if (minutesAgo < 60) {
            return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;  // For less than an hour
        }

        const hoursAgo = differenceInHours(now, targetDate);
        return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;  // For more than an hour
    }

    // If the date is not today, format it to M/d/yyyy
    return format(targetDate, "M/d/yyyy");
};
