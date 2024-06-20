import { Meta, StoryObj } from "@storybook/addon-docs/blocks";
import { fn } from "@storybook/test";

//
import { DatePicker } from "@/components";
// import { StartDayOfWeek } from "@/constants/constants";
//
const meta: Meta<typeof DatePicker> = {
    title: "DataPicker",
    component: DatePicker,
    tags: ["autodocs"],
    args: { onChange: fn() },
};

export default meta;
//
type Story = StoryObj<typeof DatePicker>;
//
export const Default: Story = {
    tags: ["autodocs"],
};
