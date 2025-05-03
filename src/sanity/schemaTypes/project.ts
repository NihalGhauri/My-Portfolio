import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project.',
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the project.',
      validation: (Rule) => Rule.required().min(10).max(300),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'Technologies or tools used in the project.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
      description: 'Link to the GitHub repository.',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'demo',
      title: 'Demo Link',
      type: 'url',
      description: 'Link to the project demo.',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).warning(
          'Demo link is optional but recommended.'
        ),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      description: 'Thumbnail or screenshot of the project.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
