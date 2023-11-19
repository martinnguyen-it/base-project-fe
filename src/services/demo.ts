import { IPaginationState } from '@types';
import { atomsWithMutation } from 'jotai-tanstack-query';
import { get } from './HTTPService';

export const [, getListDemoAtom] = atomsWithMutation(() => ({
    mutationKey: ['getListDemoAtom'],
    mutationFn: async (paginationState: IPaginationState) => {
        const url = `/products`;
        const data = {
            skip: paginationState?.pageIndex * paginationState.pageSize,
            limit: paginationState?.pageSize,
        };
        const result = await get({
            url,
            data,
        });
        return result?.data;
    },
}));
