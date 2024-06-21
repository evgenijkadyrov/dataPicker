import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./index";

const meta: Meta<typeof Calendar> = {
    component: Calendar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
    tags: ["autodocs"],
};
