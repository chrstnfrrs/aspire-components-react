import { COLOR_FACTORY } from './color-factory';
import { HEIGHT_FACTORY } from './height-factory';
import { MARGIN_FACTORY } from './margin-factory';
import { PADDING_FACTORY } from './padding-factory';
import { WIDTH_FACTORY } from './width-factory';

const ELEMENT_ENUM = {
  backgroundColor: COLOR_FACTORY,
  color: COLOR_FACTORY,
  height: HEIGHT_FACTORY,
  margin: MARGIN_FACTORY,
  maxHeight: HEIGHT_FACTORY,
  maxWidth: WIDTH_FACTORY,
  minHeight: HEIGHT_FACTORY,
  minWidth: WIDTH_FACTORY,
  padding: PADDING_FACTORY,
  width: WIDTH_FACTORY,
};

export { ELEMENT_ENUM };
