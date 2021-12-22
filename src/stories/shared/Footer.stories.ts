// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { AppModule } from 'src/app/app.module';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { LogoComponent } from 'src/app/components/shared/logo/logo.component';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { FooterSocialMediaComponent } from 'src/app/components/shared/footer/footer-social-media/footer-social-media.component';
import { FooterRightsComponent } from 'src/app/components/shared/footer/footer-rights/footer-rights.component';
import { FooterContactComponent } from 'src/app/components/shared/footer/footer-contact/footer-contact.component';

export default {
  title: 'Shared/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LogoComponent,
        FooterSocialMediaComponent,
        FooterContactComponent,
        FooterRightsComponent,
      ],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {};
