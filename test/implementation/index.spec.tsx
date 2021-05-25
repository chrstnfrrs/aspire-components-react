import * as ABoxFile from '../../src/ABox/ABox';
import * as ACardFile from '../../src/ACard/ACard';
import * as AColFile from '../../src/ACol/ACol';
import * as AContainerFile from '../../src/AContainer/AContainer';
import * as AFormFile from '../../src/AForm/AForm';
import * as AGridFile from '../../src/AGrid/AGrid';
import * as AInputFile from '../../src/AInput/AInput';
import * as ANavFile from '../../src/ANav/ANav';
import * as ARowFile from '../../src/ARow/ARow';
import * as ASectionFile from '../../src/ASection/ASection';
import * as ASpacerFile from '../../src/ASpacer/ASpacer';
import * as AspireComponentsReact from '../../src';

jest.mock('../../src/ABox/ABox');
jest.mock('../../src/ACard/ACard');
jest.mock('../../src/ACol/ACol');
jest.mock('../../src/AContainer/AContainer');
jest.mock('../../src/AForm/AForm');
jest.mock('../../src/AGrid/AGrid');
jest.mock('../../src/AInput/AInput');
jest.mock('../../src/ANav/ANav');
jest.mock('../../src/ARow/ARow');
jest.mock('../../src/ASection/ASection');
jest.mock('../../src/ASpacer/ASpacer');

const { ABox } = ABoxFile as jest.Mocked<typeof ABoxFile>;
const { ACard } = ACardFile as jest.Mocked<typeof ACardFile>;
const { ACol } = AColFile as jest.Mocked<typeof AColFile>;
const { AContainer } = AContainerFile as jest.Mocked<typeof AContainerFile>;
const { AForm } = AFormFile as jest.Mocked<typeof AFormFile>;
const { AGrid } = AGridFile as jest.Mocked<typeof AGridFile>;
const { AInput } = AInputFile as jest.Mocked<typeof AInputFile>;
const { ANav } = ANavFile as jest.Mocked<typeof ANavFile>;
const { ARow } = ARowFile as jest.Mocked<typeof ARowFile>;
const { ASection } = ASectionFile as jest.Mocked<typeof ASectionFile>;
const { ASpacer } = ASpacerFile as jest.Mocked<typeof ASpacerFile>;

describe('Given aspire-components-react', () => {
  test('then the following components should be exported', () => {
    expect(AspireComponentsReact).toMatchObject({
      ABox,
      ACard,
      ACol,
      AContainer,
      AForm,
      AGrid,
      AInput,
      ANav,
      ARow,
      ASection,
      ASpacer,
    });
  });
});
