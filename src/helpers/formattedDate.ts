import { IMinMaxDate } from "@/interfaces";

export const formattedDate = (date: Date): IMinMaxDate => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return { month, year };
};
