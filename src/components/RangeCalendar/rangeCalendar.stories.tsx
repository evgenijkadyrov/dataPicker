import { Meta, StoryObj } from "@storybook/addon-docs/blocks";
import { fn } from "@storybook/test";

import { RangeCalendar } from "@/components";

const meta: Meta<typeof RangeCalendar> = {
    title: "RangeCalendar",
    component: RangeCalendar,
    tags: ["autodocs"],
    args: { onChange: fn() },
};

export default meta;
//
type Story = StoryObj<typeof RangeCalendar>;
//
export const Default: Story = {
    tags: ["autodocs"],
};
