import { CURRENT_DATE } from "@/constants";
import { formatStringToDate } from "@/helpers";

describe("formatStringToDate", () => {
    it("should return CURRENT_DATE if the input string does not have the correct format", () => {
        const invalidDateString1 = "2024-06";
        const invalidDateString2 = "2024-06-24-30";
        const invalidDateString3 = "2024/06/24";

        const result1 = formatStringToDate(invalidDateString1);
        expect(result1).toEqual(CURRENT_DATE);

        const result2 = formatStringToDate(invalidDateString2);
        expect(result2).toEqual(CURRENT_DATE);

        const result3 = formatStringToDate(invalidDateString3);
        expect(result3).toEqual(CURRENT_DATE);
    });

    it("should return the correct IDate object for a valid input string", () => {
        const validDateString = "2024-06-24";

        const result = formatStringToDate(validDateString);
        expect(result).toEqual({ year: 2024, month: 5, day: 24 });
    });
});
