import React from 'react';
import renderer from 'react-test-renderer';

import { ALLOW_ANY, ITestPropType } from '../../types';

export const testFactory: ITestPropType = (Component, mapOfFactories) => {
  let tree: ALLOW_ANY;

  describe.each(Object.keys(mapOfFactories))(
    'When a developer uses the %s prop',
    (prop: string) => {
      describe.each(mapOfFactories[prop])(
        'When a developer passes in %s',
        (value: string) => {
          beforeEach(() => {
            const theProps = {
              [prop]: value,
            };

            tree = renderer.create(<Component {...theProps} />).toJSON();
          });
          test(`Then the class ${prop}-${value} should be used`, () => {
            expect(tree).toMatchSnapshot();
          });
        },
      );
      describe('When a developer passes in an invalid value', () => {
        beforeEach(() => {
          const theProps = {
            [prop]: 'asdf',
          };

          tree = renderer.create(<Component {...theProps} />).toJSON();
        });
        test(`Then no ${prop} class should be used`, () => {
          expect(tree).toMatchSnapshot();
        });
      });
      describe('When a developer passes in undefined', () => {
        beforeEach(() => {
          const theProps = {
            [prop]: undefined,
          };

          tree = renderer.create(<Component {...theProps} />).toJSON();
        });
        test(`Then no ${prop} class should be used`, () => {
          expect(tree).toMatchSnapshot();
        });
      });
    },
  );
};
