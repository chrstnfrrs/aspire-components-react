import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ABtn, IABtn } from '../../src/ABtn/ABtn';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setElement, setElevation } = ACFunctions as jest.Mocked<
  typeof ACFunctions
>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<ABtn>', () => {
  let props: IABtn,
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
    elevation: string | undefined,
    height: string | undefined,
    margin: string | undefined,
    maxHeight: string | undefined,
    maxWidth: string | undefined,
    minHeight: string | undefined,
    minWidth: string | undefined,
    padding: string | undefined,
    type: 'button' | 'submit' | 'reset' | undefined,
    width: string | undefined,
    classList: (undefined | string | string[])[],
    onClick: jest.Mock,
    button: HTMLElement,
    testid: string,
    text: string;

  beforeEach(() => {
    testid = chance.string();
    text = chance.string();
    backgroundColor = chance.bool() ? chance.string() : undefined;
    className = chance.bool() ? chance.string() : undefined;
    color = chance.bool() ? chance.string() : undefined;
    elevation = chance.bool() ? chance.string() : undefined;
    height = chance.bool() ? chance.string() : undefined;
    margin = chance.bool() ? chance.string() : undefined;
    maxHeight = chance.bool() ? chance.string() : undefined;
    maxWidth = chance.bool() ? chance.string() : undefined;
    minHeight = chance.bool() ? chance.string() : undefined;
    minWidth = chance.bool() ? chance.string() : undefined;
    padding = chance.bool() ? chance.string() : undefined;
    type = chance.bool()
      ? chance.pickone(['button', 'submit', 'reset'])
      : undefined;
    width = chance.bool() ? chance.string() : undefined;
    onClick = jest.fn();

    props = {
      backgroundColor,
      className,
      color,
      'data-testid': testid,
      elevation,
      height,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onClick,
      padding,
      type,
      width,
    };

    const elementClasses = chance.n(chance.string, chance.d6());
    const elevationClass = chance.string();

    setElement.mockReturnValue(elementClasses);
    setElevation.mockReturnValue(elevationClass);
    classList = [className, 'a-btn', elementClasses, elevationClass];
  });

  afterEach(jest.resetAllMocks);

  describe('Default Button', () => {
    beforeEach(() => {
      RTL.render(<ABtn {...props}>{text}</ABtn>);
    });
    test('should get element classes', () => {
      expect(setElement).toHaveBeenCalledTimes(1);
      expect(setElement).toHaveBeenCalledWith({
        backgroundColor,
        color,
        height,
        margin,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        padding,
        width,
      });
    });
    test('should get elevation classes', () => {
      expect(setElevation).toHaveBeenCalledTimes(1);
      expect(setElevation).toHaveBeenCalledWith(elevation);
    });
    test('should create a className string from an array', () => {
      expect(clsx).toHaveBeenCalledTimes(1);
      expect(clsx).toHaveBeenCalledWith(classList);
    });
    test('should be able to find button with data-testid', () => {
      expect(RTL.screen.getByTestId(testid)).toBeVisible();
    });
    test('should be able to find button with child text', () => {
      expect(RTL.screen.getByText(text)).toBeVisible();
    });
    describe('onclick', () => {
      beforeEach(() => {
        button = RTL.screen.getByText(text);
        RTL.fireEvent.click(button);
      });
      test('should call onclick function', () => {
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('Button Type', () => {
    describe('When no type is passed in', () => {
      beforeEach(() => {
        delete props.type;
        RTL.render(<ABtn {...props}>{text}</ABtn>);
      });
      test('should find button', () => {
        expect(RTL.screen.getByText(text)).toBeVisible();
      });
    });
    describe('When type is passed in', () => {
      beforeEach(() => {
        type = chance.pickone(['button', 'submit', 'reset']);
        props.type = type;
        RTL.render(<ABtn {...props}>{text}</ABtn>);
      });
      test('should find button', () => {
        expect(RTL.screen.getByText(text)).toBeVisible();
      });
    });
  });
});
