import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import { AP } from '../../src/AP/AP';
import * as BodySelectors from '../../src/typography/body-selectors';

jest.mock('../../src/typography/Body-selectors');

const chance = new Chance();
const { getElement } = BodySelectors as jest.Mocked<typeof BodySelectors>;

describe('<AP />', () => {
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
      RTL.render(<AP data-testid={testid}>{text}</AP>);
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        children: text,
        'data-testid': testid,
        type: 'p',
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
        <AP as={as} data-testid={testid}>
          {text}
        </AP>,
      );
    });
    test('should get element', () => {
      expect(getElement).toHaveBeenCalledTimes(1);
      expect(getElement).toHaveBeenCalledWith({
        as,
        children: text,
        'data-testid': testid,
        type: 'p',
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
      type = chance.pickone(['span', 'em', 'strong']);
      RTL.render(
        <AP data-testid={testid} type={type}>
          {text}
        </AP>,
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
