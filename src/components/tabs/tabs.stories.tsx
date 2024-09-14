import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    excludeStories: ["TabMockup"], // Add this line to exclude TabMockup from Storybook
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TabMockup = ({ amount }: { amount: number }) => {
    return (
        <div
            className="tabMockup"
            style={{
                minHeight: 90,
                gap: 18,
                display: "grid",
                width: "100%",
                gridTemplateColumns: `repeat(${amount}, 1fr)`,
            }}
        >
            {Array.from({ length: amount * 4 }).map((idx) => {
                return (
                    <div
                        key={idx}
                        style={{
                            backgroundColor: "lightgray",
                            borderRadius: 9,
                            flex: 1,
                            minHeight: 120,
                        }}
                    >
                        &nbsp;
                    </div>
                );
            })}
        </div>
    );
};

export const Primary: Story = {
    name: "Tabs - Pill",
    args: {
        variant: "pill",
        label: "Tabs",
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
};

export const TabsUnderline: Story = {
    name: "Tabs - Underline",
    args: {
        variant: "underline",
        label: "Tabs",
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
};
