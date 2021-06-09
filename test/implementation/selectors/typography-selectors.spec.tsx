import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';

import * as TypographySelectors from '../../../src/selectors/typography-selectors';

describe('Given the need to select a field for a typography component', () => {
  describe('When selecting the typography element', () => {
    let type: TypographySelectors.TypographyAs;

    describe('When selecting h1', () => {
      beforeEach(() => {
        type = 'h1';
        const Component = TypographySelectors.getElementType(type);

        RTL.render(<Component>{type}</Component>);
      });
      test('Then should render an h1', () => {
        expect(RTL.screen.getByTestId(type)).toBeVisible();
      });
    });
    describe('When selecting h2', () => {
      beforeEach(() => {
        type = 'h2';
        const Component = TypographySelectors.getElementType(type);

        RTL.render(<Component>{type}</Component>);
      });
      test('Then should render an h2', () => {
        expect(RTL.screen.getByTestId(type)).toBeVisible();
      });
    });
  });
});
