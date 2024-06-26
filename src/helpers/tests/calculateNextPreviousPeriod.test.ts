import { getNextMonthAndYear, getPreviousMonthAndYear } from "@/helpers/calculate";

describe("getNextMonthAndYear", () => {
    it("should return the next month and year when the current month is not the last month in the year", () => {
        const month = 5;
        const year = 2024;

        const { nextMonth, nextYear } = getNextMonthAndYear(month, year);

        expect(nextMonth).toBe(6);
        expect(nextYear).toBe(2024);
    });

    it("should return the first month and the next year when the current month is the last month in the year", () => {
        const month = 11;
        const year = 2024;

        const { nextMonth, nextYear } = getNextMonthAndYear(month, year);

        expect(nextMonth).toBe(0);
        expect(nextYear).toBe(2025);
    });
});

describe("getPreviousMonthAndYear", () => {
    it("should return the previous month and year when the current month is not the first month in the year", () => {
        const month = 5;
        const year = 2024;

        const { prevMonth, prevYear } = getPreviousMonthAndYear(month, year);

        expect(prevMonth).toBe(4);
        expect(prevYear).toBe(2024);
    });

    it("should return the last month and the previous year when the current month is the first month in the year", () => {
        const month = 0;
        const year = 2024;

        const { prevMonth, prevYear } = getPreviousMonthAndYear(month, year);

        expect(prevMonth).toBe(11);
        expect(prevYear).toBe(2023);
    });
    it("should return the last month and the previous year when the current month is the first month in the year", () => {
        const month = 1;
        const year = 2024;

        const { prevMonth, prevYear } = getPreviousMonthAndYear(month, year);

        expect(prevMonth).toBe(0);
        expect(prevYear).toBe(2024);
    });
});
