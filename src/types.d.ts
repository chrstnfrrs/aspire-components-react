interface IElementComponent {
  backgroundColor?: string;
  className?: string;
  color?: string;
  height?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  style?: React.CSSProperties | undefined;
  width?: string;
}

interface ILayoutComponent {
  align?: string;
  backgroundColor?: string;
  className?: string;
  color?: string;
  direction?: string;
  display?: string;
  height?: string;
  justify?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  style?: React.CSSProperties | undefined;
  width?: string;
}

export { IElementComponent, ILayoutComponent };
