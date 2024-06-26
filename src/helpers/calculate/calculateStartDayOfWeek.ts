import { SHORT_DAY_NAMES, StartDayOfWeek } from "@/constants";

export const calculateStartDayOfWeek = (startDayOfWeek: StartDayOfWeek | undefined) => {
    if (startDayOfWeek === StartDayOfWeek.Monday) {
        const copy = [...SHORT_DAY_NAMES];
        copy.push(copy.shift() as string);
        return copy;
    }
    return SHORT_DAY_NAMES;
};
