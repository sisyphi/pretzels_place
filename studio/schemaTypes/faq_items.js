import {defineType, defineField} from 'sanity'

export const faq_item = defineType({
  type: 'document',
  name: 'faq_items',
  fields: [
    defineField({
      type: 'string',
      name: 'question',
    }),
    defineField({
      type: 'string',
      name: 'answer',
    }),
  ],
})
