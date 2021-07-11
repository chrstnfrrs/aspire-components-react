import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { ASubtitle } from '../../src/ASubtitle/ASubtitle';
import * as HeadingSelectors from '../../src/typography/heading-selectors';

jest.mock('../../src/typography/heading-selectors');

const chance = new Chance();
const { getElement } = HeadingSelectors as jest.Mocked<typeof HeadingSelectors>;

describe('<ASubtitle />', () => {
  let text: string, testid: string;

  beforeEach(() => {
    text = chance.string();
    testid = chance.string();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getElement.mockReturnValue({
      className: chance.string(),
      // eslint-disable-next-line react/display-name
      Component: (props) => (
        <p data-testid={props['data-testid']}>{props.children}</p>
      ),
    });
  });

  afterEach(jest.resetAllMocks);
  describe('easy path', () => {
    beforeEach(() => {
      RTL.render(<ASubtitle data-testid={testid}>{text}</ASubtitle>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'subtitle-1',
        children: text,
        'data-testid': testid,
        type: 'strong',
      });
    });
    test('should be able to find by children', () => {
      expect(RTL.screen.getByText(text)).toBeVisible();
    });
    test('should be able to find by testid', () => {
      expect(RTL.screen.getByTestId(testid)).toBeVisible();
    });
  });
  describe('when as is passed in props', () => {
    let as: HeadingSelectors.HeadingAs;

    beforeEach(() => {
      as = chance.pickone([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'subtitle-1',
        'subtitle-2',
      ]);
      RTL.render(
        <ASubtitle as={as} data-testid={testid}>
          {text}
        </ASubtitle>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'strong',
      });
    });
    test('should be able to find by children', () => {
      expect(RTL.screen.getByText(text)).toBeVisible();
    });
    test('should be able to find by testid', () => {
      expect(RTL.screen.getByTestId(testid)).toBeVisible();
    });
  });
  describe('when type is passed in props', () => {
    let type: HeadingSelectors.HeadingType;

    beforeEach(() => {
      type = chance.pickone(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
      RTL.render(
        <ASubtitle data-testid={testid} type={type}>
          {text}
        </ASubtitle>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'subtitle-1',
        children: text,
        'data-testid': testid,
        type,
      });
    });
    test('should be able to find by children', () => {
      expect(RTL.screen.getByText(text)).toBeVisible();
    });
    test('should be able to find by testid', () => {
      expect(RTL.screen.getByTestId(testid)).toBeVisible();
    });
  });
});
