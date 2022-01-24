import { Story, Meta } from '@storybook/angular/types-6-0';
import {UserBreedsComponent} from "../../../app/components/pages/user-profile/user-breeds/user-breeds.component";

export default {
  title: 'Pages/User-profile/breeds',
  component: UserBreedsComponent,
} as Meta;

const Template: Story<UserBreedsComponent> = (args: UserBreedsComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {};
