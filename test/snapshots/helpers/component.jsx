import React from 'react';
import renderer from 'react-test-renderer';

import { testFactory } from './factories';

const propTypes = {
  factory: testFactory,
};

export const testComponent = (Component, name, mapOfProps) => {
  let tree;

  describe(`When a developer uses ${name} with no props`, () => {
    beforeEach(() => {
      tree = renderer.create(<Component>{name}</Component>).toJSON();
    });
    test('Then the only class should be a-container ', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(`When a developer uses ${name} with a className`, () => {
    beforeEach(() => {
      const props = {
        className: 'asdf',
      };

      tree = renderer.create(<Component {...props}>{name}</Component>).toJSON();
    });
    test('Then the the class should be present', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe.each(Object.keys(mapOfProps))(
    'When a developer uses a %s prop type',
    (type) => {
      propTypes[type](Component, name, mapOfProps[type]);
    },
  );
};
