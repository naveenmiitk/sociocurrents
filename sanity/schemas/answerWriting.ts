import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'answerWriting',
  title: 'Answer Writing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'details',
      title: 'Details(Mention : YEAR/Paper1/TopicNo./QNo. Ex: 2022/Paper1/3.2/5)',
      type: 'string',
    }),
    defineField({
      name: 'youtubeLink',
      title : 'Youtube-Link',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})