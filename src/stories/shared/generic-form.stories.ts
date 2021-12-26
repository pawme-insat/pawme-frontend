import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import {GenericFormComponent} from "../../app/components/forms/generic-form/generic-form.component";
import {FormBuilder, Validators} from "@angular/forms";
import {Field} from "../../app/models/Field";

export default {
  title: 'Shared/Form/generic',
  component: GenericFormComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, AngularSvgIconModule.forRoot(), FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<GenericFormComponent> = (args: GenericFormComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
const field = new Field()
field.name = "email"
field.type = "email"
field.validators = []

const fields = []
fields[0] = field
Primary.args = {form: fields};
