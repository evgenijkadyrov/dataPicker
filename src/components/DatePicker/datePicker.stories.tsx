import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DatePicker } from "@/components";

const meta: Meta<typeof DatePicker> = {
    title: "DataPicker",
    component: DatePicker,
    tags: ["autodocs"],
    args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;
export const Default: Story = {
    tags: ["autodocs"],
};
