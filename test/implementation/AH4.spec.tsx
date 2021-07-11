import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { AH4 } from '../../src/AH4/AH4';
import * as HeadingSelectors from '../../src/typography/heading-selectors';

jest.mock('../../src/typography/heading-selectors');

const chance = new Chance();
const { getElement } = HeadingSelectors as jest.Mocked<typeof HeadingSelectors>;

describe('<AH4 />', () => {
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
      RTL.render(<AH4 data-testid={testid}>{text}</AH4>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h4',
        children: text,
        'data-testid': testid,
        type: 'h4',
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
        'h5',
        'h6',
        'subtitle-1',
        'subtitle-2',
      ]);
      RTL.render(
        <AH4 as={as} data-testid={testid}>
          {text}
        </AH4>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'h4',
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
      type = chance.pickone(['h1', 'h2', 'h3', 'h5', 'h6', 'strong']);
      RTL.render(
        <AH4 data-testid={testid} type={type}>
          {text}
        </AH4>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h4',
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
