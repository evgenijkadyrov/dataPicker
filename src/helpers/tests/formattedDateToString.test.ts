import { formatDateToString } from "@/helpers";

describe("formatDateToString", () => {
    it("should return an empty string if any of the required parameters is missing", () => {
        const date1 = { year: 2024, month: 6, day: undefined };
        const date2 = { year: 2024, month: undefined, day: 24 };
        const date3 = { year: undefined, month: 6, day: 24 };

        const result1 = formatDateToString(date1);
        expect(result1).toBe("");

        const result2 = formatDateToString(date2);
        expect(result2).toBe("");

        const result3 = formatDateToString(date3);
        expect(result3).toBe("");
    });

    it("should return a formatted string with leading zeros for month and day", () => {
        const date = { year: 2024, month: 6, day: 24 };

        const result = formatDateToString(date);
        expect(result).toBe("2024-07-24");
    });

    it("should return a formatted string without leading zeros when month and day already have two digits", () => {
        const date = { year: 2024, month: 11, day: 30 };

        const result = formatDateToString(date);
        expect(result).toBe("2024-12-30");
    });
});
