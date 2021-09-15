import { atom } from 'recoil';

export const searchViewState = atom({
    key: 'searchViewState', // unique ID (with respect to other atoms/selectors)
    default: 'list', // default value (aka initial value)
  });
export const currentBusinessState = atom({
    key: 'currentBusinessState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });