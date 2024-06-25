import { StartDayOfWeek } from "@/constants";

import { calculateFirstDay } from "../index";

describe("calculateFirstDay", () => {
    it("should return the correct first day of the month for Sunday as the start day", () => {
        const startDayOfWeek = StartDayOfWeek.Sunday;
        const year = 2024;
        const month = 5; // 0-based index, where 5 represents June

        const firstDay = calculateFirstDay(startDayOfWeek, year, month);

        expect(firstDay).toBe(6); // Assuming June 1st, 2024, is a Saturday (0-based index)
    });

    it("should return the correct first day of the month for Monday as the start day", () => {
        const startDayOfWeek = StartDayOfWeek.Monday;
        const year = 2024;
        const month = 5; //

        const firstDay = calculateFirstDay(startDayOfWeek, year, month);

        expect(firstDay).toBe(5);
    });
    it("should return the correct first day of the month for Monday as the start day", () => {
        const startDayOfWeek = StartDayOfWeek.Monday;
        const year = 2025;
        const month = 4; //

        const firstDay = calculateFirstDay(startDayOfWeek, year, month);

        expect(firstDay).toBe(3);
    });
});
