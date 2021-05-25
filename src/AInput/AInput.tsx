import React from 'react';
import clsx from 'clsx';
import { setElement, setFontSize } from 'aspire-components-functions';

import { ABox } from '../ABox/ABox';
import { ALabel } from '../ALabel/ALabel';
import { IElementComponent } from '../types.d';

import { IAInput } from './AInput.d';
import './AInput.scss';

const AInput: React.FC<IAInput> = (props) => {
  const classList = [
    props.className,
    'a-input',
    ...setElement(props),
    setFontSize(props.fontSize),
  ];

  let labelClassList: (undefined | string | string[])[];
  let labelText: string | undefined;

  if (typeof props.label === 'string') {
    labelClassList = ['a-input--label'];
    labelText = props.label;
  } else {
    labelClassList = [
      props.label?.className,
      '.a-input--label',
      ...setElement(props.label as IElementComponent),
      setFontSize(props.label?.fontSize),
    ];
    labelText = props.label?.value;
  }

  return (
    <ABox {...props.box}>
      {Boolean(labelText) && (
        <ALabel className={clsx(labelClassList)}>{labelText}</ALabel>
      )}
      <input className={clsx(classList)} style={props.style} {...props} />
    </ABox>
  );
};

export { AInput };
