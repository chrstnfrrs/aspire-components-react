import React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { ALLOW_ANY, ITestComponent, IMapOfTestPropType } from '../../types';
import { getClassName } from '../selectors/get-classname';

import { testClass } from './test-class';
import { testFactory } from './test-factory';

const chance = new Chance();

const propTypeUnitMap: IMapOfTestPropType = {
  factory: testFactory,
};

export const testComponent: ITestComponent = (Component, name, mapOfProps) => {
  let result: RTL.RenderResult<typeof RTL.queries, HTMLElement>;

  describe('When no props are used', () => {
    beforeEach(() => {
      result = RTL.render(<Component>{name}</Component>);
    });

    test('Then the class a-container should be present', () => {
      expect(testClass(result, getClassName(name))).toBe(true);
    });
  });

  describe('When className is used', () => {
    let props: ALLOW_ANY;

    beforeEach(() => {
      props = {
        className: chance.string(),
      };

      result = RTL.render(<Component {...props}>{name}</Component>);
    });

    test('Then the className passed in should be present', () => {
      expect(testClass(result, props.className)).toBe(true);
    });
  });

  describe.each(Object.keys(mapOfProps))(
    'When %s prop type is used',
    (propType) => {
      propTypeUnitMap[propType](Component, name, mapOfProps[propType]);
    },
  );
};