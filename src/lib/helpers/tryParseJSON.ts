const tryParseJSON = (str: string): any | null => {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};

export default tryParseJSON;
