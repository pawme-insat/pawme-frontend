import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import {moduleMetadata} from "@storybook/angular";
import {LogoComponent} from "../../app/components/shared/logo/logo.component";
import {HotdogMenuComponent} from "../../app/components/shared/hotdog-menu/hotdog-menu.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Shared/Header',
  component: HeaderComponent,
  decorators:[
    moduleMetadata({
      declarations: [LogoComponent, HotdogMenuComponent]
    })
  ]
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
