import { defineType, defineField, defineArrayMember } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'surcharges',
      title: 'Surcharges & Additional Fees (English)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Shown on every vehicle detail page',
    }),
    defineField({
      name: 'surchargesZh',
      title: 'Surcharges & Additional Fees (Chinese)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: () => ({ title: 'Site Settings' }),
  },
})
