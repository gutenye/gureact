import Button from './Button'

export default {
  title: 'Core/Button.tsx',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}
