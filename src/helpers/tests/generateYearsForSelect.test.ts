import { generateRangeOfYearForSelect } from "@/helpers";

describe("generateRangeOfYearForSelect", () => {
    it("should generate the correct range of years when currentYear is in the middle of minDate and maxDate", () => {
        const currentYear = 2024;
        const maxDate = { year: 2026, month: 12, day: 31 };
        const minDate = { year: 2022, month: 1, day: 1 };

        const result = generateRangeOfYearForSelect(currentYear, maxDate, minDate);
        expect(result).toEqual([2026, 2025, 2024, 2023, 2022]);
    });

    it("should generate the correct range of years when currentYear is equal to minDate year", () => {
        const currentYear = 2022;
        const maxDate = { year: 2026, month: 12, day: 31 };
        const minDate = { year: 2022, month: 1, day: 1 };

        const result = generateRangeOfYearForSelect(currentYear, maxDate, minDate);
        expect(result).toEqual([2026, 2025, 2024, 2023, 2022]);
    });

    it("should generate the correct range of years when currentYear is equal to maxDate year", () => {
        const currentYear = 2026;
        const maxDate = { year: 2026, month: 12, day: 31 };
        const minDate = { year: 2022, month: 1, day: 1 };

        const result = generateRangeOfYearForSelect(currentYear, maxDate, minDate);
        expect(result).toEqual([2026, 2025, 2024, 2023, 2022]);
    });

    it("should generate the correct range of years when currentYear is outside the range of minDate and maxDate", () => {
        const currentYear = 2020;
        const maxDate = { year: 2026, month: 12, day: 31 };
        const minDate = { year: 2022, month: 1, day: 1 };

        const result = generateRangeOfYearForSelect(currentYear, maxDate, minDate);
        expect(result).toEqual([2026, 2025, 2024, 2023, 2022]);
    });
});
