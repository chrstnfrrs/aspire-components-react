import React from 'react';
import renderer from 'react-test-renderer';
import Chance from 'chance';

const chance = new Chance();

export const testFactory = (Component, name, mapOfFactories) => {
  let tree;

  describe.each(Object.keys(mapOfFactories))(
    'When a developer uses the %s prop',
    (prop) => {
      describe.each(mapOfFactories[prop])(
        'When a developer passes in %s',
        (value) => {
          beforeEach(() => {
            const theProps = {
              [prop]: value,
            };

            tree = renderer
              .create(<Component {...theProps}>{name}</Component>)
              .toJSON();
          });
          test(`Then the class ${prop}-${value} should be used`, () => {
            expect(tree).toMatchSnapshot();
          });
        },
      );
      describe('When a developer passes in an invalid value', () => {
        beforeEach(() => {
          const theProps = {
            [prop]: chance.string(),
          };

          tree = renderer
            .create(<Component {...theProps}>{name}</Component>)
            .toJSON();
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

          tree = renderer
            .create(<Component {...theProps}>{name}</Component>)
            .toJSON();
        });
        test(`Then no ${prop} class should be used`, () => {
          expect(tree).toMatchSnapshot();
        });
      });
    },
  );
};
