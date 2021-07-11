import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { AH6 } from '../../src/AH6/AH6';
import * as HeadingSelectors from '../../src/typography/heading-selectors';

jest.mock('../../src/typography/heading-selectors');

const chance = new Chance();
const { getElement } = HeadingSelectors as jest.Mocked<typeof HeadingSelectors>;

describe('<AH6 />', () => {
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
      RTL.render(<AH6 data-testid={testid}>{text}</AH6>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h6',
        children: text,
        'data-testid': testid,
        type: 'h6',
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
        <AH6 as={as} data-testid={testid}>
          {text}
        </AH6>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'h6',
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
      type = chance.pickone(['h1', 'h2', 'h3', 'h4', 'h5', 'strong']);
      RTL.render(
        <AH6 data-testid={testid} type={type}>
          {text}
        </AH6>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h6',
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
