import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACF from 'aspire-components-functions';

import * as BodySelectors from '../../../src/typography/body-selectors';
import * as Types from '../../../src/types';

jest.mock('aspire-components-functions');

const chance = new Chance();
const { setFontSize } = ACF as jest.Mocked<typeof ACF>;

describe('Given the need to select a field for a typography component', () => {
  afterEach(jest.resetAllMocks);
  describe('getElement', () => {
    let props: Types.AllowAny, fontSize: string;

    beforeEach(() => {
      fontSize = chance.string();
      props = {
        as: chance.pickone(['body-1', 'body-2']),
        className: chance.string(),
        fontSize,
        type: chance.pickone(['p', 'strong', 'span', 'em']),
      };
    });
    describe('when as is undefined', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = BodySelectors.getElement({
          ...props,
          as: undefined,
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render', () => {
        expect(result.container).toBeVisible();
      });
    });
    describe('p', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = BodySelectors.getElement({
          ...props,
          type: 'p',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an p', () => {
        expect(result.container.querySelector('p')).toBeVisible();
      });
    });
    describe('strong', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = BodySelectors.getElement({
          ...props,
          type: 'strong',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an strong', () => {
        expect(result.container.querySelector('strong')).toBeVisible();
      });
    });
    describe('span', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = BodySelectors.getElement({
          ...props,
          type: 'span',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an span', () => {
        expect(result.container.querySelector('span')).toBeVisible();
      });
    });
    describe('em', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = BodySelectors.getElement({
          ...props,
          type: 'em',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an em', () => {
        expect(result.container.querySelector('em')).toBeVisible();
      });
    });
  });
});
