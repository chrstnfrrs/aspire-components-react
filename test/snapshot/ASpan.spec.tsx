import { ASpan } from '../../src/ASpan/ASpan';
import { AS_BODY_ENUM } from '../enums/as-body-enum';
import { FONTSIZE_ENUM } from '../enums/fontsize-enum';
import { TYPE_BODY_ENUM } from '../enums/type-body-enum';

import { testComponent } from './utils/test-component';
import { testTypography } from './utils/test-typography';

describe('Given ASpan component is used', () => {
  const ASpanProps = {
    factory: {
      fontSize: FONTSIZE_ENUM,
    },
  };

  testComponent(ASpan, 'ASpan', ASpanProps);
  testTypography(ASpan, 'ASpan', 'as', AS_BODY_ENUM);
  testTypography(ASpan, 'ASpan', 'type', TYPE_BODY_ENUM);
});
