export const API_CONFIG = {
    isLoggingEnable: false,
    timeout: 600000,
    unauthorizedErrorCode: 401,
    HOST: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export const DEFAULT_TABLE_PAGINATION = {
    total: 0,
    totalPages: 1,
    pageIndex: 0,
    pageSize: 50,
};

export const DEFAULT_GET_LIST_QUERY = {
    pageIndex: 0,
    pageSize: 50,
};

export const JOTAI_LOCAL_STORAGE_KEY = {
    AUTH: 'auth',
    APP: 'app',
};

export const ACCEPT_FILE_TYPE = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
    'application/vnd.ms-excel',
];
