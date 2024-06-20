import { Meta, StoryObj } from "@storybook/addon-docs/blocks";
import { fn } from "@storybook/test";

//
import { CalendarTodo } from "./index";
//
const meta: Meta<typeof CalendarTodo> = {
    title: "CalendarTodo",
    component: CalendarTodo,
    tags: ["autodocs"],
    args: { onChange: fn() },
};

export default meta;
//
type Story = StoryObj<typeof CalendarTodo>;
//
export const Default: Story = {
    tags: ["autodocs"],
};
