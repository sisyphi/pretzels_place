import {defineType, defineField} from 'sanity'

export const cats = defineType({
  type: 'document',
  name: 'cats',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
    }),
    defineField({
      type: 'string',
      name: 'coat',
    }),
    defineField({
      type: 'image',
      name: 'picture',
    }),
  ],
})
