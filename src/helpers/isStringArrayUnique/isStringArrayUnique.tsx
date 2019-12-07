const isStringArrayUnique = (testedArray: string[]) =>
  testedArray.length === new Set(testedArray).size;

export default isStringArrayUnique;