import { Spinner } from '@components';
import { DEFAULT_GET_LIST_QUERY, DEFAULT_TABLE_PAGINATION } from '@constants';
import { getListDemoAtom } from '@services';
import { useAtom } from 'jotai';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
const DemoV = dynamic(import('@components/Pages/Demo/DemoV'), {
    ssr: false,
});
const AuthenticationPage: NextPage = () => {
    const [tableQueries, setTableQueries] = useState(DEFAULT_GET_LIST_QUERY);
    const [paging, setPaging] = useState({
        totalPages: DEFAULT_TABLE_PAGINATION.totalPages,
        total: DEFAULT_TABLE_PAGINATION.total,
    });
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const [{ isLoading, data, isSuccess, isError }, getListDemo] =
        useAtom(getListDemoAtom);

    useEffect(() => {
        if (isSuccess || isError) {
            setIsFirstLoad(true);
        }
    }, [isError, isSuccess]);

    useEffect(() => {
        getListDemo([tableQueries]);
    }, [tableQueries, getListDemo]);

    useEffect(() => {
        if (isSuccess && data) {
            const { total, limit } = data;
            setPaging({
                totalPages: total,
                total: limit,
            });
        }
    }, [data, isSuccess]);

    const handleClickItem = useCallback(
        (evt: MouseEvent<HTMLTableRowElement>) => {
            const itemDetails =
                evt.currentTarget.getAttribute('data-item') ?? '';
            const val = JSON.parse(itemDetails);
            console.log('🚀 ~ file: index.tsx:44 ~ val:', val);
        },
        [],
    );

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                {isLoading && isFirstLoad && (
                    <div className="absolute flex items-center justify-center w-full h-screen bg-slate-100 opacity-70 z-50 gap-x-4">
                        <Spinner className="w-6 h-6 text-blue-700" />
                        <span className="italic text-blue-800 font-medium">
                            Get data...
                        </span>
                    </div>
                )}
                <DemoV
                    isLoading={isLoading}
                    onClickItem={handleClickItem}
                    paging={paging}
                    setTableQueries={setTableQueries}
                    tableData={(data && data.products) || []}
                    tableQueries={tableQueries}
                />
            </section>
        </>
    );
};

export default AuthenticationPage;
