import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    excludeStories: ["TabMockup"], // Excluding tab mockup subcomponent from storybook
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 *
 * Simulate tab content only for test purposes in storybook
 *
 * @param {number} amount - The number of columns in the grid. The total number of grid items will be `amount * 4`.
 * @returns JSX grid
 */
export const TabMockup = ({ amount }: { amount: number }) => {
    return (
        <div
            style={{
                minHeight: 90,
                gap: 18,
                display: "grid",
                width: "100%",
                gridTemplateColumns: `repeat(${amount}, 1fr)`,
            }}
        >
            {Array.from({ length: amount * 4 }).map(() => {
                return (
                    <div
                        style={{
                            backgroundColor: "lightgray",
                            borderRadius: 9,
                            flex: 1,
                            minHeight: 120,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export const Primary: Story = {
    name: "Tabs - Pill",
    args: {
        variant: "pill",
        pills: [
            {
                label: "Emails",
                id: "emails",
                content: <TabMockup amount={6} />,
                selected: true,
            },
            {
                label: "Files",
                id: "files",
                content: <TabMockup amount={4} />,
            },
            {
                label: "Edits",
                id: "edits",
                content: <TabMockup amount={3} />,
            },
            {
                label: "Dashboard",
                id: "dashboard",
                content: <TabMockup amount={2} />,
            },
            {
                label: "Messages",
                id: "messages",
                content: <TabMockup amount={5} />,
                badge: {
                    variant: "positive",
                    label: "New",
                },
            },
            {
                label: "Favourites",
                id: "favourites",
                content: <TabMockup amount={4} />,
            },
            {
                label: "Profile",
                id: "profile",
                content: <TabMockup amount={6} />,
            },
        ],
    },
    argTypes: {
        variant: {
            name: "Variant",
            options: ["pill", "underline"],
            control: { type: "select" },
        },
    },
};

export const TabsUnderline: Story = {
    ...Primary,
    name: "Tabs - Underline",
    args: {
        variant: "underline",
        pills: Primary.args.pills,
    },
};
