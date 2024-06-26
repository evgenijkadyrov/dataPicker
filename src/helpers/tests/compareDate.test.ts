import { compareDate } from "@/helpers/comparer";

describe("compareDate", () => {
    it("should return false if any of the required parameters is missing", () => {
        const date1 = { year: 2024, month: 6, day: 24 };
        const missingDate2 = undefined;

        const result1 = compareDate(date1, missingDate2);
        expect(result1).toBe(false);

        const result2 = compareDate(undefined, date1);
        expect(result2).toBe(false);
    });

    it("should return true if the dates are equal", () => {
        const date1 = { year: 2024, month: 6, day: 24 };
        const date2 = { year: 2024, month: 6, day: 24 };

        const result = compareDate(date1, date2);
        expect(result).toBe(true);
    });

    it("should return false if the dates are not equal", () => {
        const date1 = { year: 2024, month: 6, day: 24 };
        const date2 = { year: 2024, month: 6, day: 25 };

        const result = compareDate(date1, date2);
        expect(result).toBe(false);
    });
});
