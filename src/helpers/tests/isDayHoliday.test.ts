import { isDayHoliday } from "@/helpers";

describe("isDayHoliday", () => {
    it("should return false if holidays array is undefined", () => {
        const date = { year: 2024, month: 5, day: 1 };
        const holidays = undefined;

        const result = isDayHoliday(date, holidays);
        expect(result).toBe(false);
    });

    it("should return false if holidays array does not contain a holiday matching the given date", () => {
        const date = { year: 2024, month: 5, day: 1 };
        const holidays = [
            { month: 1, day: 1 },
            { month: 12, day: 25 },
        ];

        const result = isDayHoliday(date, holidays);
        expect(result).toBe(false);
    });

    it("should return true if holidays array contains a holiday matching the given date", () => {
        const date = { year: 2024, month: 0, day: 1 };
        const holidays = [
            { month: 1, day: 1 },
            { month: 12, day: 25 },
        ];

        const result = isDayHoliday(date, holidays);
        expect(result).toBe(true);
    });
});
