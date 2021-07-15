import * as React from 'react';
import clsx from 'clsx';
import { setFontSize } from 'aspire-components-functions';

import * as Types from '../types';

type BodyType = 'p' | 'strong' | 'em' | 'span';
type BodyAs =
  | 'body-1'
  | 'body-2'
  | 'button-text'
  | 'caption'
  | 'overline'
  | undefined;

interface IStyleProps {
  as?: BodyAs;
  className?: string;
  fontSize?: string;
}

interface IBody {
  as?: BodyAs;
  className?: string;
  'data-testid'?: string;
  fontSize?: string;
  type?: BodyType;
}

type GetElementClass = (as: BodyAs) => string | undefined;
type GetElementClassList = (styleProps: IStyleProps) => string;
type GetElementType = (type: BodyType) => React.FC<IBody>;
type GetElement = (
  props: IBody,
) => {
  Component: React.FC<IBody>;
  className: string;
  props: Types.AllowAny;
};

const Em: React.FC<IBody> = ({ className, ...props }) => (
  <em className={className} data-testid={props['data-testid']}>
    {props.children}
  </em>
);

const P: React.FC<IBody> = ({ className, ...props }) => (
  <p className={className} data-testid={props['data-testid']}>
    {props.children}
  </p>
);

const Span: React.FC<IBody> = ({ className, ...props }) => (
  <span className={className} data-testid={props['data-testid']}>
    {props.children}
  </span>
);

const Strong: React.FC<IBody> = ({ className, ...props }) => (
  <strong className={className} data-testid={props['data-testid']}>
    {props.children}
  </strong>
);

const getElementType: GetElementType = (type) => {
  const map = {
    em: Em,
    p: P,
    span: Span,
    strong: Strong,
  };

  return map[type];
};

const getElementClass: GetElementClass = (as) => {
  const map = {
    'body-1': 'a-body-1',
    'body-2': 'a-body-2',
    'button-text': 'a-button-text',
    caption: 'a-caption',
    overline: 'a-overline',
  };

  return as ? map[as] : undefined;
};

const getElementClassList: GetElementClassList = ({
  as,
  className,
  fontSize,
}) => {
  const classes = [className, getElementClass(as), setFontSize(fontSize)];

  return clsx(classes);
};

const getElement: GetElement = ({
  as,
  className,
  fontSize,
  type,
  ...props
}) => {
  const Component = getElementType(type as BodyType);
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
export type { BodyAs, BodyType, IBody };
