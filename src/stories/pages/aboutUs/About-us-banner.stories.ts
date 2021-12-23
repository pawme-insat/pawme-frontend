import { Story, Meta } from '@storybook/angular/types-6-0';
import {AboutUsBannerComponent} from "../../../app/components/pages/aboutUs/about-us-banner/about-us-banner.component";

export default {
  title: 'Pages/About-us/banner',
  component: AboutUsBannerComponent,
} as Meta;

const Template: Story<AboutUsBannerComponent> = (args: AboutUsBannerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {};
