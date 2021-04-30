import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';

export const testClass = (
  render: RTL.RenderResult<typeof RTL.queries, HTMLElement>,
  className: string,
): boolean =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render.container.firstChild.classList.contains(className);
