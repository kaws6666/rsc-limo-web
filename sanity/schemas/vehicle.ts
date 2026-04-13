import { defineType, defineField, defineArrayMember } from 'sanity'

export const vehicle = defineType({
  name: 'vehicle',
  title: 'Vehicle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vehicle Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameZh',
      title: 'Vehicle Name (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Sedan', value: 'EXECUTIVE SEDAN' },
          { title: 'Luxury MPV', value: 'LUXURY MPV' },
          { title: 'Premium MPV', value: 'PREMIUM MPV' },
          { title: 'Group Transport', value: 'GROUP TRANSPORT' },
          { title: 'Coach', value: 'COACH' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryZh',
      title: 'Category (Chinese)',
      type: 'string',
    }),
    defineField({
      name: 'passengers',
      title: 'Max Passengers',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'luggage',
      title: 'Max Luggage Pieces',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (e.g. From $70)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionZh',
      title: 'Description (Chinese)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'features',
      title: 'Features (English)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'featuresZh',
      title: 'Features (Chinese)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Table',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'service', title: 'Service', type: 'string' }),
            defineField({ name: 'rate', title: 'Rate', type: 'string' }),
          ],
          preview: {
            select: { title: 'service', subtitle: 'rate' },
          },
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'startingPrice' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
