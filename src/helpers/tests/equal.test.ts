import { equalDate } from "@/helpers/comparer";
import { IDate, IMinMaxDate } from "@/interfaces";

describe("equalDate", () => {
    const minMaxDate: IMinMaxDate = { year: 2022, month: 10 };
    const date: IDate = { year: 2022, month: 10, day: 11 };

    it("should return true when both dates are defined and their month and year are equal", () => {
        expect(equalDate(minMaxDate, date)).toBe(true);
    });

    it("should return false when either date is undefined", () => {
        expect(equalDate(undefined, date)).toBe(false);
        expect(equalDate(minMaxDate, undefined)).toBe(false);
    });

    it("should return false when the month or year of the dates is not equal", () => {
        const differentMonthDate: IDate = { year: 2022, month: 11, day: 11 };
        const differentYearDate: IDate = { year: 2023, month: 10, day: 11 };

        expect(equalDate(minMaxDate, differentMonthDate)).toBe(false);
        expect(equalDate(differentYearDate, date)).toBe(false);
    });
});
