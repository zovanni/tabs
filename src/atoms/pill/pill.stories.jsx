import { Pill } from './pill';

export default {
    component: Pill,
    decorators: [
        // Pill inherits its layout from the parent tab component, so we put a decorator around
        (Pill, { args }) => {
            const { tabsVariant } = args;
            return <div className={`tabs tabs--${tabsVariant}`}><Pill /></div>;
        },
    ],
    argTypes: {
        tabsVariant: {
            name: 'Tabs Variant',
            options: ['pill', 'underline'],
            control: { type: 'select' },
        },
    },
};


export const Primary = {
    name: 'Pill',
    args: {
        label: 'Pill label',
        selected: false,
        tabsVariant: 'pill',
    },
};

export const Underline = {
    name: 'Pill - Underline',
    args: {
        label: 'Pill label',
        selected: true,
        tabsVariant: 'underline',
    },
};

export const WithBadge = {
    component: Pill,
    name: 'With Badge',
    args: {
        label: 'Pill label',
        selected: false,
        tabsVariant: 'pill',
        badge: "neutral",
    },
    argTypes: {
        'badge': {
            name: 'Badge variant',
            options: ['neutral', 'positive', 'negative'],
            mapping: {
                defaultValue: 'neutral',
                neutral: {
                    variant: 'neutral',
                    label: 'neutral'
                },
                positive: {
                    variant: 'positive',
                    label: 'positive'
                },
                negative: {
                    variant: 'negative',
                    label: 'negative'
                },
            },
            control: { type: 'select' },
        },
    },
};