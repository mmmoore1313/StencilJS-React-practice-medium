import readme from './readme.md'

export default {
  title: 'My Accordion',
  parameters: {
    markdown: readme,
  }
}

export const Default = () => `
<my-accordion label="Black Label" color="green" description="Giving this story thing a shot"></my-accordion>
`
