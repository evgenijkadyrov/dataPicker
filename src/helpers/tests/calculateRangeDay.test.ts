import { isDateInRange } from "@/helpers/calculate";

describe("isDateInRange", () => {
    it("should return false if any of the required parameters is missing", () => {
        const date = { year: 2024, month: 6, day: 24 };
        const missingStartDate = undefined;
        const missingEndDate = { year: 2024, month: 6, day: 30 };

        const result1 = isDateInRange(date, missingStartDate, missingEndDate);
        expect(result1).toBe(false);

        const result2 = isDateInRange(date, missingStartDate, undefined);
        expect(result2).toBe(false);

        const result3 = isDateInRange(date, undefined, missingEndDate);
        expect(result3).toBe(false);

        const result4 = isDateInRange(undefined, missingStartDate, missingEndDate);
        expect(result4).toBe(false);
    });

    it("should return true if the date is within the range", () => {
        const date = { year: 2024, month: 6, day: 24 };
        const startDate = { year: 2024, month: 6, day: 1 };
        const endDate = { year: 2024, month: 6, day: 30 };

        const result = isDateInRange(date, startDate, endDate);
        expect(result).toBe(true);
    });

    it("should return false if the date is outside the range", () => {
        const date = { year: 2024, month: 6, day: 24 };
        const startDate = { year: 2024, month: 7, day: 1 };
        const endDate = { year: 2024, month: 7, day: 31 };

        const result = isDateInRange(date, startDate, endDate);
        expect(result).toBe(false);
    });
});
