import {defineType, defineField} from 'sanity'

export const faq_items = defineType({
  type: 'document',
  name: 'FAQ_items',
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
