import React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';

import AContainer from '../src/AContainer/AContainer';

describe('Given AContainer component is used', () => {
  let result: RTL.RenderResult<typeof RTL.queries, HTMLElement>;

  describe('When no props are used', () => {
    beforeEach(() => {
      result = RTL.render(<AContainer />);
    });
    test('Then the class a-container should be present', () => {
      expect(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result.container.firstChild.classList.contains('a-container'),
      ).toBe(true);
    });
  });
});
