import { storiesOf } from '@storybook/polymer';
import '../countup-button'
import { withKnobs, number } from '@storybook/addon-knobs';

storiesOf('countup-button', module).add('default',
  () => `<countup-button></countup-button>
         <countup-button increment="3" />`
);

storiesOf('countup-button', module)
  .addDecorator(withKnobs)
  .add('add props',
  () => {
    const num = number('increment value', 5);

    return `<countup-button increment="${num}" />`
  }
);
