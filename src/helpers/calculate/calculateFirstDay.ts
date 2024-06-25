import { StartDayOfWeek } from "@/constants";

export const calculateFirstDay = (
    startDayOfWeek: StartDayOfWeek,
    year: number,
    month: number
): number => {
    const firstDay = new Date(year, month, 1).getDay();

    if (startDayOfWeek === StartDayOfWeek.Sunday) {
        return firstDay;
    }
    return firstDay === 0 ? 6 : firstDay - 1;
};
