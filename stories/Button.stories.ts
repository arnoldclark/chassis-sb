import type { Meta, StoryObj } from "@storybook/html";
import classnames from "classnames";

type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "danger" | "link";
  isGhost: boolean;
  size: "default" | "small" | "large";
  loading: boolean;
};

const meta: Meta<ButtonProps> = {
  title: "Elements/Button",
  tags: ["autodocs"],

  render: ({ label, variant, isGhost, size, loading }) => {
    const classes = classnames("ch-btn", {
      [`ch-btn--${variant}`]: Boolean(variant),
      "ch-btn--sm": size === "small",
      "ch-btn--lg": size === "large",
      "ch-btn--loading": loading,
      "ch-btn--ghost": isGhost,
    });

    return `<button class="${classes}">${label}</button>`;
  },

  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "link"],
    },
    isGhost: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["default", "small", "large"],
    },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const DefaultButton: Story = {
  args: {
    label: "Button",
    variant: "primary",
    isGhost: false,
    size: "default",
    loading: false,
  },
};
