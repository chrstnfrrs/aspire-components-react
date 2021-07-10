import React from 'react';
import renderer from 'react-test-renderer';

import { ALLOW_ANY } from '../../types';

type TestTypography = (
  Component: React.FC,
  name: string,
  prop: string,
  propList: Array<string>,
) => void;

const testTypography: TestTypography = (Component, name, prop, propList) => {
  describe.each(propList)(
    `When rendering ${name} with ${prop} set to %p`,
    (value) => {
      let tree: ALLOW_ANY;

      beforeEach(() => {
        const props = {
          [prop]: value,
        };

        console.log('prop', prop);

        tree = renderer
          .create(<Component {...props}>{name}</Component>)
          .toJSON();
      });

      test('Then the component should render as expected', () => {
        expect(tree).toMatchSnapshot();
      });
    },
  );
};

export { testTypography };
