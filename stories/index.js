import { storiesOf } from '@storybook/vue';
import Item from '../src/components/List/Item.vue';
import Test from '../src/components/Test.vue';

// storiesOf('Item', module)
//     // .add('composes', () => '<div>Test</div>')
//     .add('renders', () => ({
//         components: { Item },
//         template:   '<Item></Item>',
//     }));

storiesOf('Test', module)
    .add('as dumb as fuck', () => ({
        components: { Test },
        template: '<test></test>',
    }));
