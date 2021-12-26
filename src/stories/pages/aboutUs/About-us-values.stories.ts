import { Story, Meta } from '@storybook/angular/types-6-0';
import { AboutUsValuesComponent } from '../../../app/components/pages/about-us/about-us-values/about-us-values.component';
import { moduleMetadata } from '@storybook/angular';
import { AboutUsValueComponent } from '../../../app/components/pages/about-us/about-us-value/about-us-value.component';

export default {
  title: 'Pages/About-us/values',
  component: AboutUsValuesComponent,
  decorators: [
    moduleMetadata({
      declarations: [AboutUsValueComponent],
    }),
  ],
} as Meta;

const Template: Story<AboutUsValuesComponent> = (
  args: AboutUsValuesComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {};
