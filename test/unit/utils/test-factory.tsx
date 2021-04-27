import React from 'react';
import * as RTL from '@testing-library/react';

import { ALLOW_ANY, ITestPropType } from '../../types';

import { testClass } from './test-class';

export const testFactory: ITestPropType = (Component, name, factoryMap) => {
  let result: ALLOW_ANY;
  let key: string;

  describe.each(Object.keys(factoryMap))('When %s prop is used', (prop) => {
    describe.each(factoryMap[prop])(
      `When %s is passed into ${prop}`,
      (value) => {
        beforeEach(() => {
          const props = {
            [prop]: value,
          };

          key = value.split('.').join('_').split('/').join('__');

          result = RTL.render(<Component {...props}>{name}</Component>);
        });
        test(`Then the class for ${value} should be present`, () => {
          expect(testClass(result, `${prop}-${key}`)).toBe(true);
        });
      },
    );
  });
};
