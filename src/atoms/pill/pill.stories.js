import { Pill } from './pill';

export default {
    component: Pill,
};

export const Primary = {
    name: 'Pill',
    args: {
        label: 'Button',
        // primary: true,
    },
};

export const WithBadge = {
    component: Pill,
    name: 'With Badge',
    args: {
        label: 'Pill',
        badge: {
            "variant": "positive",
            "label": "positive"
        },
    },
    argTypes: {
        'badge': {
            name: 'Badge',
            options: ['neutral', 'positive', 'negative'],
            mapping: {
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