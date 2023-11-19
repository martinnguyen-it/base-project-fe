import { JOTAI_LOCAL_STORAGE_KEY } from '@constants';
import { IAppState } from '@types';
import { atomWithLocalStorage } from '@utils';

const INITIAL_STATE: IAppState = {
    menuActive: 'Settings',
    isCollapseSidebar: false,
    activeClient: null,
    filterTransactionParams: {
        start_date: null,
        end_date: null,
        addresses: '',
        type: '',
    },
    filterGeneralLedgerParams: {
        start_date: null,
        end_date: null,
        account: '',
        include_cancelled: false,
        ref_name: '',
        ref_type: '',
    },
    trialBalanceParams: {
        start_date: null,
        end_date: null,
    },
};

export const appAtom = atomWithLocalStorage<IAppState>(
    JOTAI_LOCAL_STORAGE_KEY.APP,
    INITIAL_STATE,
);
