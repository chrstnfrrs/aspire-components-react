import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ABtn } from '../../src/ABtn/ABtn';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setElement, setElevation } = ACFunctions as jest.Mocked<
  typeof ACFunctions
>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

interface IABtnTestingProps {
  children?: string;
  className?: string;
  elevation?: string;
  onClick?: jest.Mock;
  type?: 'reset' | 'submit';
}

describe('Given ABtn component is used', () => {
  let props: IABtnTestingProps,
    children: string,
    className: string,
    elevation: string,
    expectedClasses: string[],
    onClick: jest.Mock,
    button: HTMLElement;

  beforeEach(() => {
    children = chance.string();
    className = chance.string();
    elevation = chance.string();
    onClick = jest.fn();

    props = {
      children,
      className,
      elevation,
    };
    const elementClasses = chance.n(chance.string, chance.d6());
    const elevationClass = chance.string();

    setElement.mockReturnValue(elementClasses);
    setElevation.mockReturnValue(elevationClass);
    expectedClasses = [className, 'a-btn', ...elementClasses, elevationClass];
  });

  afterEach(jest.resetAllMocks);
  describe('When button type is passed in', () => {
    describe('When onClick is passed in', () => {
      beforeEach(() => {
        props = {
          ...props,
          onClick,
          type: chance.pickone(['reset', 'submit']),
        };

        RTL.render(<ABtn {...props} />);
        button = RTL.screen.getByText(children);
      });
      test('then it should render a button', () => {
        expect(button).toBeVisible();
      });
      test('then it should setElement classes', () => {
        expect(setElement).toHaveBeenCalledTimes(1);
        expect(setElement).toHaveBeenCalledWith(props);
      });
      test('then it should set elevation classes', () => {
        expect(setElevation).toHaveBeenCalledTimes(1);
        expect(setElevation).toHaveBeenCalledWith(elevation);
      });
      test('then it should find valid classes', () => {
        expect(clsx).toHaveBeenCalledTimes(1);
        expect(clsx).toHaveBeenCalledWith(expectedClasses);
      });
      describe('when the button is clicked', () => {
        beforeEach(() => {
          RTL.fireEvent.click(button);
        });
        test('then a click should trigger onClick', () => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe('When onClick is not passed in', () => {
      beforeEach(() => {
        props = {
          ...props,
          type: chance.pickone(['reset', 'submit']),
        };

        RTL.render(<ABtn {...props} />);
        button = RTL.screen.getByText(children);
      });
      test('then it should render a button', () => {
        expect(button).toBeVisible();
      });
      test('then it should setElement classes', () => {
        expect(setElement).toHaveBeenCalledTimes(1);
        expect(setElement).toHaveBeenCalledWith(props);
      });
      test('then it should set elevation classes', () => {
        expect(setElevation).toHaveBeenCalledTimes(1);
        expect(setElevation).toHaveBeenCalledWith(elevation);
      });
      test('then it should find valid classes', () => {
        expect(clsx).toHaveBeenCalledTimes(1);
        expect(clsx).toHaveBeenCalledWith(expectedClasses);
      });
    });
  });
  describe('When button type is not passed in', () => {
    describe('When onClick is passed in', () => {
      beforeEach(() => {
        props = {
          ...props,
          onClick,
        };

        RTL.render(<ABtn {...props} />);
        button = RTL.screen.getByText(children);
      });
      test('then it should render a button', () => {
        expect(button).toBeVisible();
      });
      test('then it should setElement classes', () => {
        expect(setElement).toHaveBeenCalledTimes(1);
        expect(setElement).toHaveBeenCalledWith(props);
      });
      test('then it should set elevation classes', () => {
        expect(setElevation).toHaveBeenCalledTimes(1);
        expect(setElevation).toHaveBeenCalledWith(elevation);
      });
      test('then it should find valid classes', () => {
        expect(clsx).toHaveBeenCalledTimes(1);
        expect(clsx).toHaveBeenCalledWith(expectedClasses);
      });
      describe('when the button is clicked', () => {
        beforeEach(() => {
          RTL.fireEvent.click(button);
        });
        test('then a click should trigger onClick', () => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe('When onClick is not passed in', () => {
      beforeEach(() => {
        props = {
          ...props,
        };

        RTL.render(<ABtn {...props} />);
        button = RTL.screen.getByText(children);
      });
      test('then it should render a button', () => {
        expect(button).toBeVisible();
      });
      test('then it should setElement classes', () => {
        expect(setElement).toHaveBeenCalledTimes(1);
        expect(setElement).toHaveBeenCalledWith(props);
      });
      test('then it should set elevation classes', () => {
        expect(setElevation).toHaveBeenCalledTimes(1);
        expect(setElevation).toHaveBeenCalledWith(elevation);
      });
      test('then it should find valid classes', () => {
        expect(clsx).toHaveBeenCalledTimes(1);
        expect(clsx).toHaveBeenCalledWith(expectedClasses);
      });
    });
  });
});
