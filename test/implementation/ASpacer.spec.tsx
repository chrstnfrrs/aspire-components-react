import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { ASpacer } from '../../src/ASpacer/ASpacer';
import { IElementComponent } from '../../src/types';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setElement } = ACFunctions as jest.Mocked<typeof ACFunctions>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<ASpacer>', () => {
  let classList: (string | undefined | string[])[],
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
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
    props: IElementComponent;

  beforeEach(() => {
    backgroundColor = chance.bool() ? chance.string() : undefined;
    className = chance.bool() ? chance.string() : undefined;
    color = chance.bool() ? chance.string() : undefined;
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

    setElement.mockReturnValue(elementClasses);

    classList = [className, 'a-spacer', elementClasses];

    RTL.render(
      <ASpacer data-testid={testid} {...props}>
        {text}
      </ASpacer>,
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
