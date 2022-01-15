import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const searchViewState = atom({
    key: 'searchViewState',
    default: 'list',
    effects_UNSTABLE: [persistAtom],
  });
export const searchQueryState = atom({
    key: 'searchQueryState',
    default: {
      query: '',
      refinementList: {
        },
    },
    effects_UNSTABLE: [persistAtom],
  });

export const currentBusinessState = atom({
    key: 'currentBusinessState',
    default: {},
    effects_UNSTABLE: [persistAtom],
  });

export const currentVideoModalState = atom({
  key: 'currentVideoModalState', 
  default: {open:false, link: ''},
  effects_UNSTABLE: [persistAtom],
});

export const localeState = atom({
  key: 'localeState', 
  default: "en",
  effects_UNSTABLE: [persistAtom],
});