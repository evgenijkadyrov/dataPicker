import { CURRENT_DATE } from "@/constants/currentDate";
import { IDate } from "@/interfaces/interfaces";

export const formatStringToDate = (dateString: string): IDate => {
    const dateArray = dateString.split("-");

    if (dateArray.length !== 3) {
        return CURRENT_DATE;
    }

    return {
        year: parseInt(dateArray.at(0), 10),
        month: parseInt(dateArray.at(1), 10) - 1,
        day: parseInt(dateArray.at(2), 10),
    };
};
