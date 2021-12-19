// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';

export default {
  title: 'Shared/Footer',
  component: FooterComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {};
