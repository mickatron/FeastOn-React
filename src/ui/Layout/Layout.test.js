
import { shallow } from 'enzyme';
import React from 'react';
import Layout from './Layout';

describe('Layout', () => {

  let wrapper = null;
  beforeAll(() => {
    wrapper = shallow(
      <Layout
        className="test"
        type="corset"
      >
        <p>Some child content</p>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });

});