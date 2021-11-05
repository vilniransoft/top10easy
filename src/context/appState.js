import { atom } from 'recoil';

export const searchViewState = atom({
    key: 'searchViewState',
    default: 'list',
  });
export const currentBusinessState = atom({
    key: 'currentBusinessState',
    default: {},
  });

export const currentVideoModalState = atom({
  key: 'currentVideoModalState', 
  default: {open:false, link: ''}, 
});