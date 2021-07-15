import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { AEm } from '../../src/AEm/AEm';
import * as BodySelectors from '../../src/typography/body-selectors';

jest.mock('../../src/typography/body-selectors');

const chance = new Chance();
const { getElement } = BodySelectors as jest.Mocked<typeof BodySelectors>;

describe('<AEm />', () => {
  let text: string, testid: string;

  beforeEach(() => {
    text = chance.string();
    testid = chance.string();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getElement.mockReturnValue({
      className: chance.string(),
      Component: (props) => (
        <p data-testid={props['data-testid']}>{props.children}</p>
      ),
    });
  });

  afterEach(jest.resetAllMocks);
  describe('easy path', () => {
    beforeEach(() => {
      RTL.render(<AEm data-testid={testid}>{text}</AEm>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        children: text,
        'data-testid': testid,
        type: 'em',
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
    let as: BodySelectors.BodyAs;

    beforeEach(() => {
      as = chance.pickone(['body-1', 'body-2']);
      RTL.render(
        <AEm as={as} data-testid={testid}>
          {text}
        </AEm>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'em',
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
    let type: BodySelectors.BodyType;

    beforeEach(() => {
      type = chance.pickone(['strong', 'span', 'p']);
      RTL.render(
        <AEm data-testid={testid} type={type}>
          {text}
        </AEm>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
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
