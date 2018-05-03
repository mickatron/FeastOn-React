/* eslint-disable */
const { createConfig, babel } = require('webpack-blocks');
const find = require('lodash/find');
const uiWrapperProps = require('./styleguidist/helpers/uiWrapper').props;

module.exports = {
  components: '/**/*.doc.{js,jsx}',
  sections: [
    {
      name: 'elements',
      components: './elements/**/*.doc.{js,jsx}',
    },
    {
      name: 'collections',
      components: './collections/**/*.doc.{js,jsx}',
    },
    {
      name: 'forms',
      components: './forms/**/*.doc.{js,jsx}',
    },
    {
      name: 'Higher Order Components',
      components: './HOC/uiWrapper/**/*.doc.{js,jsx}',
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            '/styleguidist/index.css'
        }
      ]
    }
  },
  webpackConfig: createConfig([
    babel({
      cacheDirectory: true,
      presets: [
        'env',
        'react-app',
      ],
    }),
  ]),
  updateDocs(docs) { 

    if (docs.doclets.composedWith === 'UiWrapper') {
      docs.props = docs.props || [];
      // do not write over props that have more specific definitions
      uiWrapperProps.forEach((prop, i) => {
        if(!find(docs.props, {name: prop.name})) docs.props.unshift(uiWrapperProps[i]);
      });
      // TODO: allow removeable props from the docs.
      // TODO: re-order props
    }
    return docs;
  },
};
