import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ATextArea, IATextArea } from '../../src/ATextArea/ATextArea';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setElement, setFontSize } = ACFunctions as jest.Mocked<
  typeof ACFunctions
>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<ATextArea>', () => {
  let classList: (string | undefined | string[])[],
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
    fontSize: string | undefined,
    height: string | undefined,
    margin: string | undefined,
    maxHeight: string | undefined,
    maxWidth: string | undefined,
    minHeight: string | undefined,
    minWidth: string | undefined,
    padding: string | undefined,
    width: string | undefined,
    testid: string,
    onBlur: jest.Mock,
    onChange: jest.Mock,
    props: IATextArea;

  beforeEach(() => {
    backgroundColor = chance.bool() ? chance.string() : undefined;
    className = chance.bool() ? chance.string() : undefined;
    color = chance.bool() ? chance.string() : undefined;
    fontSize = chance.bool() ? chance.string() : undefined;
    height = chance.bool() ? chance.string() : undefined;
    margin = chance.bool() ? chance.string() : undefined;
    maxHeight = chance.bool() ? chance.string() : undefined;
    maxWidth = chance.bool() ? chance.string() : undefined;
    minHeight = chance.bool() ? chance.string() : undefined;
    minWidth = chance.bool() ? chance.string() : undefined;
    padding = chance.bool() ? chance.string() : undefined;
    width = chance.bool() ? chance.string() : undefined;
    testid = chance.string();
    onChange = jest.fn();
    onBlur = jest.fn();

    props = {
      backgroundColor,
      className,
      color,
      fontSize,
      height,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onBlur,
      onChange,
      padding,
      width,
    };

    const elementClasses = chance.n(chance.string, chance.d6());
    const fontSizeClass = chance.bool() ? chance.string() : undefined;

    setElement.mockReturnValue(elementClasses);
    setFontSize.mockReturnValue(fontSizeClass);

    classList = [className, 'a-textarea', elementClasses, fontSizeClass];

    RTL.render(<ATextArea data-testid={testid} {...props} />);
  });

  afterEach(jest.resetAllMocks);

  test('should find element classes', () => {
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

  test('should find align classes', () => {
    expect(setFontSize).toHaveBeenCalledTimes(1);
    expect(setFontSize).toHaveBeenCalledWith(fontSize);
  });

  test('should make a className string from list of classes', () => {
    expect(clsx).toHaveBeenCalledTimes(1);
    expect(clsx).toHaveBeenCalledWith(classList);
  });

  test('should be able to find by testid', () => {
    expect(RTL.screen.getByTestId(testid)).toBeVisible();
  });
  describe('onBlur', () => {
    let value: string;

    beforeEach(() => {
      value = chance.string();
      const input = RTL.screen.getByTestId(testid);

      RTL.act(() => {
        RTL.fireEvent.blur(input, { target: { value } });
      });
    });

    test('should find input text', () => {
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
  describe('onChange', () => {
    let value: string;

    beforeEach(() => {
      value = chance.string();
      const input = RTL.screen.getByTestId(testid);

      RTL.act(() => {
        RTL.fireEvent.change(input, { target: { value } });
      });
    });

    test('should find input text', () => {
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
