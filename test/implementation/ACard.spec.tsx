import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ACard, IACard } from '../../src/ACard/ACard';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const {
  setElement,
  setAlign,
  setJustify,
  setElevation,
} = ACFunctions as jest.Mocked<typeof ACFunctions>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<ACard />', () => {
  let classList: (string | undefined)[],
    align: string | undefined,
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
    elevation: string | undefined,
    height: string | undefined,
    justify: string | undefined,
    margin: string | undefined,
    maxHeight: string | undefined,
    maxWidth: string | undefined,
    minHeight: string | undefined,
    minWidth: string | undefined,
    padding: string | undefined,
    width: string | undefined,
    testid: string,
    text: string,
    props: IACard;

  beforeEach(() => {
    align = chance.bool() ? chance.string() : undefined;
    backgroundColor = chance.bool() ? chance.string() : undefined;
    className = chance.bool() ? chance.string() : undefined;
    color = chance.bool() ? chance.string() : undefined;
    elevation = chance.bool() ? chance.string() : undefined;
    height = chance.bool() ? chance.string() : undefined;
    justify = chance.bool() ? chance.string() : undefined;
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
      align,
      backgroundColor,
      className,
      color,
      elevation,
      height,
      justify,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    };

    const elementClasses = chance.n(chance.string, chance.d6());
    const alignClass = chance.bool() ? chance.string() : undefined;
    const justifyClass = chance.bool() ? chance.string() : undefined;
    const elevationClass = chance.bool() ? chance.string() : undefined;

    setElement.mockReturnValue(elementClasses);
    setAlign.mockReturnValue(alignClass);
    setJustify.mockReturnValue(justifyClass);
    setElevation.mockReturnValue(elevationClass);

    classList = [
      className,
      'a-card',
      ...elementClasses,
      alignClass,
      justifyClass,
      elevationClass,
    ];

    RTL.render(
      <ACard data-testid={testid} {...props}>
        {text}
      </ACard>,
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

  test('should find align classes', () => {
    expect(setAlign).toHaveBeenCalledTimes(1);
    expect(setAlign).toHaveBeenCalledWith(align);
  });

  test('should find justify classes', () => {
    expect(setJustify).toHaveBeenCalledTimes(1);
    expect(setJustify).toHaveBeenCalledWith(justify);
  });

  test('should find elevation classes', () => {
    expect(setElevation).toHaveBeenCalledTimes(1);
    expect(setElevation).toHaveBeenCalledWith(elevation);
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
