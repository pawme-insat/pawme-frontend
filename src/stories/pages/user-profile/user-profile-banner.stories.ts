import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProfileBannerComponent } from '../../../app/components/pages/user-profile/profile-banner/profile-banner.component';

export default {
  title: 'Pages/User-profile/banner',
  component: ProfileBannerComponent,
} as Meta;

const Template: Story<ProfileBannerComponent> = (args: ProfileBannerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {};
