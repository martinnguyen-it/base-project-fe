import { JOTAI_LOCAL_STORAGE_KEY } from '@constants';
import { IAuthState } from '@types';
import { atomWithLocalStorage } from '@utils';

export const INITIAL_STATE: IAuthState = {
    accessToken: null,
    userInfo: null,
};

export const authAtom = atomWithLocalStorage<IAuthState>(
    JOTAI_LOCAL_STORAGE_KEY.AUTH,
    INITIAL_STATE,
);
