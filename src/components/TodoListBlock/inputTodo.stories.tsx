import type { Meta, StoryObj } from "@storybook/react";

import { TodoListBlock } from "@/components";

const meta: Meta<typeof TodoListBlock> = {
    component: TodoListBlock,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoListBlock>;

export const Primary: Story = {
    tags: ["autodocs"],
};
