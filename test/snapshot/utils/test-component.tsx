import React from 'react';
import renderer from 'react-test-renderer';

import { ALLOW_ANY, ITestComponent, IMapOfTestPropType } from '../../types';

import { testFactory } from './test-factory';

const propTypes: IMapOfTestPropType = {
  factory: testFactory,
};

export const testComponent: ITestComponent = (Component, name, mapOfProps) => {
  let tree: ALLOW_ANY;

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
