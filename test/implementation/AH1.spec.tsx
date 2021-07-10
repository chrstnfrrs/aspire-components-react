import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { AH1 } from '../../src/AH1/AH1';
import * as TypographySelectors from '../../src/selectors/typography-selectors';

jest.mock('../../src/selectors/typography-selectors');

const chance = new Chance();
const { getElement } = TypographySelectors as jest.Mocked<
  typeof TypographySelectors
>;

describe('<AH1 />', () => {
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
      RTL.render(<AH1 data-testid={testid}>{text}</AH1>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h1',
        children: text,
        'data-testid': testid,
        type: 'h1',
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
    let as: TypographySelectors.HeadingAs;

    beforeEach(() => {
      as = chance.pickone(['h2', 'h3', 'h4', 'h5', 'h6']);
      RTL.render(
        <AH1 as={as} data-testid={testid}>
          {text}
        </AH1>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'h1',
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
    let type: TypographySelectors.HeadingType;

    beforeEach(() => {
      type = chance.pickone(['h2', 'h3', 'h4', 'h5', 'h6', 'strong']);
      RTL.render(
        <AH1 data-testid={testid} type={type}>
          {text}
        </AH1>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as: 'h1',
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
