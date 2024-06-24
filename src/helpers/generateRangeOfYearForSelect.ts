import { IMinMaxDate } from "@/interfaces";

export const generateRangeOfYearForSelect = (
    currentYear: number,
    maxDate: IMinMaxDate,
    minDate: IMinMaxDate
): number[] => {
    const years: number[] = [currentYear];
    const rangeMax = maxDate.year - currentYear;
    const rangeMin = currentYear - minDate.year;
    for (let i = 1; i <= rangeMin; i += 1) {
        years.push(currentYear - i);
    }
    for (let i = 1; i <= rangeMax; i += 1) {
        years.unshift(currentYear + i);
    }

    return years;
};
