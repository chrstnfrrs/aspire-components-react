import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { AContainer } from '../../src/AContainer/AContainer';
import { ILayoutComponent } from '../../src/types';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setLayout } = ACFunctions as jest.Mocked<typeof ACFunctions>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<AContainer>', () => {
  let classList: (undefined | string)[],
    layoutClasses: string[],
    props: ILayoutComponent,
    align: string | undefined,
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
    direction: string | undefined,
    display: string | undefined,
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
    text: string;

  beforeEach(() => {
    className = chance.bool() ? chance.string() : undefined;
    align = chance.bool() ? chance.string() : undefined;
    backgroundColor = chance.bool() ? chance.string() : undefined;
    color = chance.bool() ? chance.string() : undefined;
    direction = chance.bool() ? chance.string() : undefined;
    display = chance.bool() ? chance.string() : undefined;
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
      'data-testid': testid,
      direction,
      display,
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

    layoutClasses = chance.n(chance.string, chance.d6());
    setLayout.mockReturnValue(layoutClasses);
    classList = [className, 'a-container', ...layoutClasses];

    RTL.render(
      <AContainer data-testid='a-container' {...props}>
        {text}
      </AContainer>,
    );
  });

  afterEach(jest.resetAllMocks);
  test('should call setLayout with props', () => {
    expect(setLayout).toHaveBeenCalledTimes(1);
    expect(setLayout).toHaveBeenCalledWith({
      align,
      backgroundColor,
      color,
      direction,
      display,
      height,
      justify,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    });
  });
  test('should call clsx with list of classes', () => {
    expect(clsx).toHaveBeenCalledTimes(1);
    expect(clsx).toHaveBeenCalledWith(classList);
  });
  test('should be able to find by testid', () => {
    expect(RTL.screen.getByTestId(testid)).toBeVisible();
  });
  test('should be able to find by children text', () => {
    expect(RTL.screen.getByText(text)).toBeVisible();
  });
});
