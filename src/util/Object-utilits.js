import { getId } from "./CustomGenerateId";

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const transforObj = (obj, property) => {
  let formData = Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key][property]
    return acc
  }, {})

  formData['id'] = getId.next().value;
  return formData
}