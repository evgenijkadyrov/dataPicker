import { isDayWeekendDay } from "@/helpers";

describe("isDayWeekendDay", () => {
    it("should return false if the given date is not a weekend day (Monday to Friday)", () => {
        const date = { year: 2024, month: 5, day: 4 };

        const result = isDayWeekendDay(date);
        expect(result).toBe(false);
    });

    it("should return true if the given date is a Saturday", () => {
        const date = { year: 2024, month: 5, day: 22 };

        const result = isDayWeekendDay(date);
        expect(result).toBe(true);
    });

    it("should return true if the given date is a Sunday", () => {
        const date = { year: 2024, month: 5, day: 30 };

        const result = isDayWeekendDay(date);
        expect(result).toBe(true);
    });
});
