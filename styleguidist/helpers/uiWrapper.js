module.exports = {
  props: [
    {
      type: {
        name: 'union',
        value: [{ name: 'func' }, { name: 'string' }, { name: 'symbol' }],
      },
      required: false,
      description: 'The type of element to render the component as.',
      defaultValue: { value: '\'ul\'', computed: false },
      tags: {},
      name: 'as',
    },
    {
      type: {
        name: 'union',
        value: [{ name: 'string' }, { name: 'array' }, { name: 'object' }],
      },
      required: false,
      description: 'A custom className.',
      defaultValue: { value: 'undefined', computed: true },
      tags: {},
      name: 'className',
    },
    {
      type: { name: 'node' },
      required: false,
      description: 'The components child elements.',
      tags: {},
      name: 'children',
    },
    {
      type: {
        name: 'union',
        value: [{ name: 'string' }, { name: 'arrayOf', value: { name: 'string' } }],
      },
      required: false,
      description: 'BEM modifier names to be applied to the elements wrapper.',
      defaultValue: { value: 'undefined', computed: true },
      tags: {},
      name: 'modifier',
    },
    {
      type: {
        name: 'enum',
        value:
    [{ value: '\'one-quarter\'', computed: false },
      { value: '\'one-third\'', computed: false },
      { value: '\'one-half\'', computed: false },
      { value: '\'two-thirds\'', computed: false },
      { value: '\'three-quarters\'', computed: false },
      { value: '\'one-whole\'', computed: false }],
      },
      required: false,
      description: 'Width className',
      defaultValue: { value: 'undefined', computed: true },
      tags: {},
      name: 'width',
    },
  ],
};
