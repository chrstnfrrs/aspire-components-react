export const getClassName = (name: string): string => {
  const lowercaseName = name.toLowerCase();

  return `${lowercaseName.slice(0, 1)}-${lowercaseName.slice(1)}`;
};
