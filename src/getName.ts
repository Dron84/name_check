import latinize from 'latinize'

export const getName = (name:string) => {
  const nameReg = /(\w)\.\s(\w+)|(\w+)\s(\w+)|(\w)\s(\w+)|(\w+)/i
  const isEmptyObject = (object:any) => object === null || object === undefined ? true : Object.entries(object).length === 0 ? true : false;
  name = latinize(name);
  if(!name) return;
  //@ts-ignore
  name = name !== null && name.trim().match(nameReg);
  if (!isEmptyObject(name[1]) && !isEmptyObject(name[2])) {
      return `${name[1]} ${name[2]}`;
  } else if (
      isEmptyObject(name[1]) &&
      isEmptyObject(name[2]) &&
      !isEmptyObject(name[3]) &&
      !isEmptyObject(name[4])
  ) {
      const newName = name[3].slice(0, 1);
      return `${newName} ${name[4]}`;
  } else if (
      isEmptyObject(name[1]) &&
      isEmptyObject(name[2]) &&
      isEmptyObject(name[3]) &&
      isEmptyObject(name[4]) &&
      !isEmptyObject(name[5]) &&
      !isEmptyObject(name[6])
  ) {
      return `${name[5]} ${name[6]}`;
  } else {
      return `${name[7]}`;
  }
}