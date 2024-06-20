import { ComponentType } from "react";

import { HOLIDAYS_IN_BELARUS } from "@/constants/constants";

export function withHolidays<T>(Component: ComponentType<T>) {
    return (hocProps: Omit<T, "holidays">) => (
        <Component {...(hocProps as T)} holidays={HOLIDAYS_IN_BELARUS} />
    );
}
