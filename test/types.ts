/* eslint-disable */
// @ts-ignore
export type ALLOW_ANY = any;
/* eslint-enable */

export interface IMapOfPropType {
  [propName: string]: string[];
}

export interface IMapOfProps {
  [propType: string]: IMapOfPropType;
}

export interface IMapOfTestPropType {
  [key: string]: ITestPropType;
}

export type ITestComponent = (
  Component: React.FC,
  name: string,
  mapOfFactories: IMapOfProps,
) => void;

export type ITestPropType = (
  Component: React.FC,
  name: string,
  mapOfFactories: IMapOfPropType,
) => void;
