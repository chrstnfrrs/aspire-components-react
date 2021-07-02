import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACFunctions from 'aspire-components-functions';
import * as clsxModule from 'clsx';

import { AGrid, IAGrid } from '../../src/AGrid/AGrid';

jest.mock('aspire-components-functions');
jest.mock('clsx');

const { setLayout, setGap } = ACFunctions as jest.Mocked<typeof ACFunctions>;
const { default: clsx } = clsxModule as jest.Mocked<typeof clsxModule>;

const chance = new Chance();

describe('<AGrid>', () => {
  let classList: (undefined | string | string[])[],
    layoutClasses: string[],
    gapClass: string,
    props: IAGrid,
    align: string | undefined,
    backgroundColor: string | undefined,
    className: string | undefined,
    color: string | undefined,
    direction: string | undefined,
    display: string | undefined,
    gap: string | undefined,
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
    gap = chance.bool() ? chance.string() : undefined;
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
      gap,
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
    gapClass = chance.string();
    setGap.mockReturnValue(gapClass);
    classList = [className, 'a-grid', gapClass, layoutClasses];

    RTL.render(
      <AGrid data-testid='a-grid' {...props}>
        {text}
      </AGrid>,
    );
  });

  afterEach(jest.resetAllMocks);

  test('should get grid gap classes', () => {
    expect(setGap).toHaveBeenCalledTimes(1);
    expect(setGap).toHaveBeenCalledWith(gap);
  });

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
