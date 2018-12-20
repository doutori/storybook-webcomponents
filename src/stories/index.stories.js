import { storiesOf } from '@storybook/polymer';
import '../my-button'
import '../my-button2'
import '../countup-button'

storiesOf('my-button', module).add(
  'with link',
  () => '<my-button link="http://google.com/">Google</my-button>'
).add(
  'wide style',
  () => '<style>my-button { width: 100px; }</style><my-button>a</my-button>'
).add(
  'wide style2',
  () => '<style>my-button { width: 100px; }</style><my-button>a</my-button><my-button>b</my-button>'
);

storiesOf('my-button2', module).add(
  'simple',
  () => '<my-button2 />'
).add(
  'configure name',
  () => '<my-button2 name="Alice" />'
);

storiesOf('countup-button', module).add(
  'default',
  () => `<countup-button></countup-button>
         <countup-button increment="3" />`
);