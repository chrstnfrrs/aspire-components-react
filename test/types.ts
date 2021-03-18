/* eslint-disable */
// @ts-ignore
type ALLOW_ANY = any;
/* eslint-enable */

interface IMapOfPropType {
  [propName: string]: string[];
}

interface IMapOfProps {
  [propType: string]: IMapOfPropType;
}

interface IMapOfTestPropType {
  [key: string]: ITestPropType;
}

type ITestComponent = (
  Component: React.FC,
  name: string,
  mapOfFactories: IMapOfProps,
) => void;

type ITestPropType = (
  Component: React.FC,
  name: string,
  mapOfFactories: IMapOfPropType,
) => void;

export {
  ALLOW_ANY,
  IMapOfPropType,
  IMapOfProps,
  IMapOfTestPropType,
  ITestComponent,
  ITestPropType,
};
