import { IMinMaxDate } from "@/interfaces";

export const generateRangeOfYearForSelect = (
    currentYear: number,
    maxDate: IMinMaxDate | undefined,
    minDate: IMinMaxDate | undefined
): number[] => {
    let year = currentYear;

    if (minDate && year < minDate.year) {
        year = minDate.year;
    }

    const years: number[] = [year];

    if (maxDate && minDate) {
        const rangeMax = maxDate.year - year;
        const rangeMin = year - minDate.year;

        for (let i = 1; i <= rangeMin; i += 1) {
            years.push(year - i);
        }

        for (let i = 1; i <= rangeMax; i += 1) {
            years.unshift(year + i);
        }
    }

    return years;
};
