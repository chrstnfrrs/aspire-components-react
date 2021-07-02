import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ALabel, IALabel } from '../../src/ALabel/ALabel';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setElement, setFontSize } = ACFunctions as jest.Mocked<
  typeof ACFunctions
>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<ALabel>', () => {
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
    text: string,
    props: IALabel;

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
    text = chance.string();

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
      padding,
      width,
    };

    const elementClasses = chance.n(chance.string, chance.d6());
    const fontSizeClass = chance.string();

    setElement.mockReturnValue(elementClasses);
    setFontSize.mockReturnValue(fontSizeClass);

    classList = [className, 'a-label', elementClasses, fontSizeClass];

    RTL.render(
      <ALabel data-testid={testid} {...props}>
        {text}
      </ALabel>,
    );
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

  test('should get font size classes', () => {
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

  test('should be able to find by children', () => {
    expect(RTL.screen.getByText(text)).toBeVisible();
  });
});
