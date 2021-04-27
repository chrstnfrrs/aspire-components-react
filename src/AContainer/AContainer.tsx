import React from 'react';
import clsx from 'clsx';
import { setLayout } from 'aspire-components-functions';

import { AContainerProps } from './AContainer.types';
import './AContainer.scss';

// const setColor = (color: string | undefined) => (color ? undefined : undefined);

// const propFactoryMap = {
//   align: setAlign,
//   color: setColor,
//   justify: setJustify,
// };

// const propStyleMap = {
//   align: 'alignItems',
//   color: 'color',
//   justify: 'justifyContent',
// };

// const styleProp = (styles: any, props: AContainerProps) => {
//   const listOfProps = Object.keys(props);

//   listOfProps.forEach((prop) => {
//     if (
//       // @ts-ignore
//       typeof propFactoryMap[prop] === 'function' &&
//       // @ts-ignore
//       !propFactoryMap[prop](props[prop]) &&
//       // @ts-ignore
//       Boolean(props[prop])
//     ) {
//       // @ts-ignore
//       // eslint-disable-next-line no-param-reassign
//       styles[propStyleMap[prop]] = props[prop];
//     }
//   });
// };

const AContainer: React.FC<AContainerProps> = (props) => {
  const classList = [props.className, 'a-container', ...setLayout(props)];
  // const styles: any = {};

  // styleProp(styles, props);
  // styleProp(styles, props);

  return <div className={clsx(classList)}>{props.children}</div>;
};

export default AContainer;
