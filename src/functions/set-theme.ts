const createVariableName = (
  componentName: string | undefined,
  property: string,
) => `--${componentName || 'A'}-${property}`;

type SetProperty = (element: any, variable: string, value: string) => void;

const setProperty: SetProperty = (element, variable, value) => {
  element.style.setProperty(variable, value);
};

const setTheme = (theme: any): void => {
  const rootKeys = ['primary'];
  const root = document.documentElement;

  rootKeys.forEach((key) => {
    if (theme[key]) {
      setProperty(root, createVariableName(undefined, key), theme[key]);
    }
  });
  // const root = document.documentElement;

  // keys.forEach((key: string) => {
  //   if (keyToVariableMap[key] && typeof keyToVariableMap[key] === 'string') {
  //     root.style.setProperty(keyToVariableMap[key], theme[key]);
  //   }
  // });

  if (theme?.ANav) {
    const aNav = document.querySelector('.a-nav');

    const navThemeable = ['background', 'color'];

    navThemeable.forEach((key) => {
      if (theme.ANav[key]) {
        setProperty(aNav, createVariableName('ANav', key), theme.ANav[key]);
      }
    });
    // // @ts-ignore
    // aNav?.style.setProperty('--ANav-background', theme.ANav?.background);
    // // @ts-ignore
    // aNav?.style.setProperty('--ANav-color', theme.ANav?.color);
  }
};

export { setTheme };
