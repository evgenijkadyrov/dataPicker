import type { Meta, StoryObj } from "@storybook/react";

import { Picker } from "@/components";

const meta: Meta<typeof Picker> = {
    component: Picker,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Picker>;

export const Primary: Story = {
    tags: ["autodocs"],
};
