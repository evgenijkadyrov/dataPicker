import { IMinMaxDate } from "@/components/CalendarHeader";

export const formattedDate = (date: Date): IMinMaxDate => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return { month, year };
};
