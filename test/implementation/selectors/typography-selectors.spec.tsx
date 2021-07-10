import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';
import * as ACF from 'aspire-components-functions';

import * as TypographySelectors from '../../../src/selectors/typography-selectors';
import * as Types from '../../../src/types.d';

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
        as: chance.pickone(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
        className: chance.string(),
        fontSize,
        type: chance.pickone(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
      };
    });
    describe('H1', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h1',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H1', () => {
        expect(result.container.querySelector('h1')).toBeVisible();
      });
    });
    describe('H2', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h2',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H2', () => {
        expect(result.container.querySelector('h2')).toBeVisible();
      });
    });
    describe('H3', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h3',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H3', () => {
        expect(result.container.querySelector('h3')).toBeVisible();
      });
    });
    describe('H4', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h4',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H4', () => {
        expect(result.container.querySelector('h4')).toBeVisible();
      });
    });
    describe('H5', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h5',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H5', () => {
        expect(result.container.querySelector('h5')).toBeVisible();
      });
    });
    describe('H6', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
          ...props,
          type: 'h6',
        });

        result = RTL.render(<Component />);
      });
      test('should call setFontSize', () => {
        expect(setFontSize).toHaveBeenCalledTimes(1);
        expect(setFontSize).toHaveBeenCalledWith(fontSize);
      });
      test('should render an H6', () => {
        expect(result.container.querySelector('h6')).toBeVisible();
      });
    });
    describe('Strong', () => {
      let result: RTL.RenderResult;

      beforeEach(() => {
        const { Component } = TypographySelectors.getElement({
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
  });
});
