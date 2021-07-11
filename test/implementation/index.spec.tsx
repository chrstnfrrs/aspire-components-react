import * as ABoxFile from '../../src/ABox/ABox';
import * as ABtnFile from '../../src/ABtn/ABtn';
import * as ACardFile from '../../src/ACard/ACard';
import * as AColFile from '../../src/ACol/ACol';
import * as AContainerFile from '../../src/AContainer/AContainer';
import * as AFormFile from '../../src/AForm/AForm';
import * as AGridFile from '../../src/AGrid/AGrid';
import * as AH1File from '../../src/AH1/AH1';
import * as AH2File from '../../src/AH2/AH2';
import * as AH3File from '../../src/AH3/AH3';
import * as AH4File from '../../src/AH4/AH4';
import * as AH5File from '../../src/AH5/AH5';
import * as AInputFile from '../../src/AInput/AInput';
import * as ALabelFile from '../../src/ALabel/ALabel';
import * as ANavFile from '../../src/ANav/ANav';
import * as ARowFile from '../../src/ARow/ARow';
import * as ASectionFile from '../../src/ASection/ASection';
import * as ASpacerFile from '../../src/ASpacer/ASpacer';
import * as ATextAreaFile from '../../src/ATextArea/ATextArea';
import * as AspireComponentsReact from '../../src';

jest.mock('../../src/ABox/ABox');
jest.mock('../../src/ABtn/ABtn');
jest.mock('../../src/ACard/ACard');
jest.mock('../../src/ACol/ACol');
jest.mock('../../src/AContainer/AContainer');
jest.mock('../../src/AForm/AForm');
jest.mock('../../src/AGrid/AGrid');
jest.mock('../../src/AH1/AH1');
jest.mock('../../src/AH2/AH2');
jest.mock('../../src/AH3/AH3');
jest.mock('../../src/AH4/AH4');
jest.mock('../../src/AH5/AH5');
jest.mock('../../src/AInput/AInput');
jest.mock('../../src/ALabel/ALabel');
jest.mock('../../src/ANav/ANav');
jest.mock('../../src/ARow/ARow');
jest.mock('../../src/ASection/ASection');
jest.mock('../../src/ASpacer/ASpacer');
jest.mock('../../src/ATextArea/ATextArea');

const { ABox } = ABoxFile as jest.Mocked<typeof ABoxFile>;
const { ABtn } = ABtnFile as jest.Mocked<typeof ABtnFile>;
const { ACard } = ACardFile as jest.Mocked<typeof ACardFile>;
const { ACol } = AColFile as jest.Mocked<typeof AColFile>;
const { AContainer } = AContainerFile as jest.Mocked<typeof AContainerFile>;
const { AForm } = AFormFile as jest.Mocked<typeof AFormFile>;
const { AGrid } = AGridFile as jest.Mocked<typeof AGridFile>;
const { AH1 } = AH1File as jest.Mocked<typeof AH1File>;
const { AH2 } = AH2File as jest.Mocked<typeof AH2File>;
const { AH3 } = AH3File as jest.Mocked<typeof AH3File>;
const { AH4 } = AH4File as jest.Mocked<typeof AH4File>;
const { AH5 } = AH5File as jest.Mocked<typeof AH5File>;
const { AInput } = AInputFile as jest.Mocked<typeof AInputFile>;
const { ALabel } = ALabelFile as jest.Mocked<typeof ALabelFile>;
const { ANav } = ANavFile as jest.Mocked<typeof ANavFile>;
const { ARow } = ARowFile as jest.Mocked<typeof ARowFile>;
const { ASection } = ASectionFile as jest.Mocked<typeof ASectionFile>;
const { ASpacer } = ASpacerFile as jest.Mocked<typeof ASpacerFile>;
const { ATextArea } = ATextAreaFile as jest.Mocked<typeof ATextAreaFile>;

describe('Given aspire-components-react', () => {
  test('then the following components should be exported', () => {
    expect(AspireComponentsReact).toMatchObject({
      ABox,
      ABtn,
      ACard,
      ACol,
      AContainer,
      AForm,
      AGrid,
      AH1,
      AH2,
      AH3,
      AH4,
      AH5,
      AInput,
      ALabel,
      ANav,
      ARow,
      ASection,
      ASpacer,
      ATextArea,
    });
  });
});
