import * as React from 'react';
import clsx from 'clsx';
import { setFontSize } from 'aspire-components-functions';

import * as Types from '../types.d';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IStyleProps {
  as?: HeadingAs;
  className?: string;
  fontSize?: string;
}

interface IHeading {
  as?: HeadingAs;
  className?: string;
  'data-testid': string;
  fontSize?: string;
  type?: HeadingType;
}

type GetElementClass = (as: HeadingAs) => string;
type GetElementClassList = (styleProps: IStyleProps) => string;
type GetElementType = (type: HeadingType) => React.FC<IHeading>;
type GetElement = (
  props: IHeading,
) => {
  Component: React.FC<IHeading>;
  className: string;
  props: Types.AllowAny;
};

const H1: React.FC<IHeading> = (props) => <h1>{props.children}</h1>;

const H2: React.FC<IHeading> = (props) => <h2>{props.children}</h2>;

const H3: React.FC<IHeading> = (props) => <h3>{props.children}</h3>;

const H4: React.FC<IHeading> = (props) => <h4>{props.children}</h4>;

const H5: React.FC<IHeading> = (props) => <h5>{props.children}</h5>;

const H6: React.FC<IHeading> = (props) => <h6>{props.children}</h6>;

const AStrong: React.FC<IHeading> = (props) => (
  <strong>{props.children}</strong>
);

const getElementType: GetElementType = (type) => {
  const map = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    strong: AStrong,
  };

  return map[type];
};

const getElementClass: GetElementClass = (as) => {
  const map = {
    h1: 'a-h1',
    h2: 'a-h2',
    h3: 'a-h3',
    h4: 'a-h4',
    h5: 'a-h5',
    h6: 'a-h6',
  };

  return map[as];
};

const getElementClassList: GetElementClassList = ({
  as,
  className,
  fontSize,
}) => {
  const classes = [
    className,
    getElementClass(as as HeadingAs),
    setFontSize(fontSize),
  ];

  return clsx(classes);
};

const getElement: GetElement = ({
  as,
  className,
  fontSize,
  type,
  ...props
}) => {
  const Component = getElementType(type as HeadingType);
  const classes = getElementClassList({
    as,
    className,
    fontSize,
  });

  return {
    className: classes,
    Component,
    props,
  };
};

export { getElement };
export type { HeadingType, IHeading };
