import { StartDayOfWeek } from "@/constants";
import { calculateStartDayOfWeek } from "@/helpers/calculate";

describe("getStartDayOfWeek", () => {
    it("should return the default array of short day names if startDayOfWeek is not Monday", () => {
        const result = calculateStartDayOfWeek(StartDayOfWeek.Sunday);
        expect(result).toEqual(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
    });

    it("should return the array of short day names with Monday as the first day if startDayOfWeek is Monday", () => {
        const result = calculateStartDayOfWeek(StartDayOfWeek.Monday);
        expect(result).toEqual(["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]);
    });
});
