import { ALIGN_FACTORY } from './align-factory';
import { COLOR_FACTORY } from './color-factory';
import { DIRECTION_FACTORY } from './direction-factory';
import { DISPLAY_FACTORY } from './display-factory';
import { HEIGHT_FACTORY } from './height-factory';
import { JUSTIFY_FACTORY } from './justify-factory';
import { MARGIN_FACTORY } from './margin-factory';
import { PADDING_FACTORY } from './padding-factory';
import { WIDTH_FACTORY } from './width-factory';

const LAYOUT_FACTORIES = {
  align: ALIGN_FACTORY,
  backgroundColor: COLOR_FACTORY,
  color: COLOR_FACTORY,
  direction: DIRECTION_FACTORY,
  display: DISPLAY_FACTORY,
  height: HEIGHT_FACTORY,
  justify: JUSTIFY_FACTORY,
  margin: MARGIN_FACTORY,
  maxHeight: HEIGHT_FACTORY,
  maxWidth: WIDTH_FACTORY,
  minHeight: HEIGHT_FACTORY,
  minWidth: WIDTH_FACTORY,
  padding: PADDING_FACTORY,
  width: WIDTH_FACTORY,
};

export { LAYOUT_FACTORIES };
