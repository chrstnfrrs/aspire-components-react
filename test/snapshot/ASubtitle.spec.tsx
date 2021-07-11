import { ASubtitle } from '../../src/ASubtitle/ASubtitle';
import { AS_HEADING_ENUM } from '../enums/as-heading-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_HEADING_ENUM } from '../enums/type-heading-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given ASubtitle component is used', () => {
  const ASubtitleProps = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(ASubtitle, 'ASubtitle', ASubtitleProps);
  testTypography(ASubtitle, 'ASubtitle', 'as', AS_HEADING_ENUM);
  testTypography(ASubtitle, 'ASubtitle', 'type', TYPE_HEADING_ENUM);
});
