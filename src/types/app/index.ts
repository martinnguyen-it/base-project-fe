import { ReactElement } from 'react';

export type TActiveClient = {
    fullname: string;
    companyName: boolean;
    fiscalYearStart: string;
    fiscalYearEnd: string;
};

export type TTransactionParams = {
    start_date: string | null;
    end_date: string | null;
    addresses: string;
    type: string;
};

export type TTrialBalanceParams = {
    start_date: string | null;
    end_date: string | null;
};

export interface TGeneralLedgerParams {
    start_date: string | null;
    end_date: string | null;
    account: string;
    include_cancelled: boolean;
    ref_name: string;
    ref_type: string;
}
export interface IAppState {
    menuActive: string;
    isCollapseSidebar: boolean;
    activeClient: TActiveClient | null;
    filterTransactionParams: TTransactionParams;
    filterGeneralLedgerParams: TGeneralLedgerParams;
    trialBalanceParams: TTrialBalanceParams;
}

export interface IRouter {
    path: string;
    name: string;
    children?: IRouter[];
    icon?: ReactElement;
}

export interface IPaginationResponse {
    totalPages: number;
    total: number;
}
export interface IPaginationState {
    pageIndex: number;
    pageSize: number;
}

export interface IPaginationParams {
    page_index: number;
    page_size: number;
}

export interface IOption {
    value: number | string;
    label: string;
}

export interface IGroupOptions {
    label: string;
    options: IOption[];
}
