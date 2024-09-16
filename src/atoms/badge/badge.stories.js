import { Badge } from './badge';

export default {
    component: Badge,
    argTypes: {
        variant: {
            name: 'Variant',
            options: ['neutral', 'positive', 'negative'],
            control: { type: 'select' },
        },
    },
};

export const Primary = {
    name: 'Badge',
    args: {
        label: 'Badge',
        variant: 'positive',
    },
};