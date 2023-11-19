import {
    Dispatch,
    FC,
    MouseEventHandler,
    memo,
    useCallback,
    useMemo,
} from 'react';

import { ButtonRedirect, Spinner } from '@components';
import { DEFAULT_TABLE_PAGINATION } from '@constants';
import EmptyRecord from '@public/assets/images/empty-document.png';
import { ClassifyIcon } from '@public/assets/svg';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from '@tanstack/react-table';
import { IPaginationState } from '@types';
import { SetStateAction } from 'jotai';
import { isEmpty, map, size } from 'lodash';
import Image from 'next/image';

interface IProps {
    paginationQuery?: IPaginationState;
    setPaginationQuery?: Dispatch<SetStateAction<IPaginationState>>;
    isFetching: boolean;
    tableData: Record<string, any>[];
    columns: ColumnDef<Record<string, any>, any>[];
    paging?: { totalPages: number; total: number };
    onClickItem?: MouseEventHandler<HTMLTableRowElement>;
    isClassify?: boolean;
    hasPagination?: boolean;
    customStyles?: any;
}

const Table: FC<IProps> = ({
    paginationQuery,
    setPaginationQuery,
    isFetching,
    tableData,
    columns,
    paging,
    onClickItem,
    isClassify,
    hasPagination = true,
    customStyles = '',
}) => {
    const pagination = useMemo(
        () => ({
            pageIndex:
                paginationQuery?.pageIndex ??
                DEFAULT_TABLE_PAGINATION.pageIndex,
            pageSize:
                paginationQuery?.pageSize ?? DEFAULT_TABLE_PAGINATION.pageSize,
        }),
        [paginationQuery?.pageIndex, paginationQuery?.pageSize],
    );

    const defaultData = useMemo(() => {
        return tableData;
    }, [tableData]);

    const pageOptions = useMemo(
        () => [50, 100, 500, paging?.total ?? DEFAULT_TABLE_PAGINATION.total],
        [paging?.total],
    );

    const table = useReactTable({
        data: defaultData,
        columns,
        pageCount: paging?.totalPages,
        state: {
            pagination,
        },
        onPaginationChange: setPaginationQuery,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    });

    const { pageIndex: currentPageIndex, pageSize: currentPageSize } =
        table.getState().pagination;

    const transformColumnValue = useCallback((value: any) => {
        const renderValue = value?.props?.getValue();
        return renderValue !== null ? value : '--';
    }, []);

    return (
        <div
            className={`text-dim-gray ${
                hasPagination ? 'min-h-[calc(100vh-230px)]' : ''
            }`}
        >
            {isFetching && (
                <span className="absolute flex justify-center w-full h-full">
                    <Spinner className="w-6 h-6 mt-[calc(50vh-140px)] text-blue-700" />
                </span>
            )}
            <table className={`w-full ${customStyles}`}>
                <thead>
                    {map(table.getHeaderGroups(), (headerGroup) => (
                        <tr key={headerGroup.id} className="text-[15px] ">
                            <>
                                {(!isEmpty(columns) && size(defaultData) > 0) ||
                                !isClassify ? (
                                    <th className="text-center border-b border-blue-solitude sticky top-0 z-10 bg-white h-20 shadow-bottom min-w-[80px]">
                                        #
                                    </th>
                                ) : null}
                                {map(headerGroup.headers, (header, index) => {
                                    return (
                                        <th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            className={`text-left px-4 py-5 !font-semibold border-b border-blue-solitude sticky top-0 z-10 bg-white whitespace-nowrap shadow-bottom ${
                                                index ===
                                                size(headerGroup?.headers) - 1
                                                    ? 'pr-10'
                                                    : ''
                                            }`}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div>
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )}
                                                </div>
                                            )}
                                        </th>
                                    );
                                })}
                                {isClassify &&
                                    size(columns) > 0 &&
                                    size(defaultData) > 0 && (
                                        <th className="sticky top-0 right-0 z-20 !border-b border-blue-solitude bg-white !shadow-2xl px-5">
                                            Action
                                        </th>
                                    )}
                            </>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {map(table.getRowModel().rows, (row) => {
                        return (
                            <tr
                                key={row.id}
                                className={`bg-[#FEFEFE] ${
                                    onClickItem
                                        ? 'hover:bg-white-smoke hover:cursor-pointer'
                                        : ''
                                }`}
                                onClick={onClickItem}
                                data-item={JSON.stringify(row.original)}
                            >
                                <>
                                    <td className="w-28 min-w-[112px] text-center py-5 border-b border-blue-solitude">
                                        {currentPageSize * currentPageIndex +
                                            +row.id +
                                            1}
                                    </td>
                                    {map(
                                        row.getVisibleCells(),
                                        (cell, index) => {
                                            return (
                                                <td
                                                    key={cell.id}
                                                    className={`py-5 px-4 border-b border-blue-solitude ${
                                                        index ===
                                                        size(
                                                            row.getVisibleCells(),
                                                        ) -
                                                            1
                                                            ? 'pr-10'
                                                            : ''
                                                    }`}
                                                >
                                                    {transformColumnValue(
                                                        flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext(),
                                                        ),
                                                    )}
                                                </td>
                                            );
                                        },
                                    )}

                                    {isClassify ? (
                                        <td className="sticky right-0 z-[5] border-b border-blue-solitude bg-white shadow-2xl px-5">
                                            <div className="w-full min-w-full">
                                                <ButtonRedirect
                                                    label="Classify"
                                                    icon={<ClassifyIcon />}
                                                    path={`/settings/journal-entry/add/${row.original.id}`}
                                                    className="text-white bg-[#54b77c] hover:opacity-80"
                                                />
                                            </div>
                                        </td>
                                    ) : null}
                                </>
                            </tr>
                        );
                    })}
                    {!isFetching && size(tableData) === 0 ? (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-52 pb-56">
                            <div className=" flex justify-center flex-col items-center gap-4">
                                <Image
                                    layout="fixed"
                                    src={EmptyRecord}
                                    alt="No data"
                                    width={84}
                                    height={100}
                                />
                                <p className="text-gray-400 font-medium italic">
                                    No Data Available!
                                </p>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </tbody>
            </table>
            {hasPagination ? (
                <div
                    className={`fixed bottom-0 border-t bg-white py-4 text-dim-gray shadow-top z-10 w-full`}
                >
                    <div className="px-8 grid grid-cols-3">
                        <div className="flex items-center">
                            {`${
                                size(defaultData) > 0
                                    ? currentPageIndex ===
                                      DEFAULT_TABLE_PAGINATION.pageIndex
                                        ? 1
                                        : currentPageSize * currentPageIndex + 1
                                    : DEFAULT_TABLE_PAGINATION.pageIndex
                            } - ${
                                paging &&
                                (currentPageIndex + 1) * currentPageSize >
                                    paging.total
                                    ? paging.total
                                    : (currentPageIndex + 1) * currentPageSize
                            }`}
                        </div>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<'}
                            </button>
                            <div className="flex items-center justify-center bg-gray-200 px-3 py-1 rounded-lg">
                                <span>
                                    {currentPageIndex + 1} /{' '}
                                    {paging
                                        ? paging?.totalPages / paging?.total
                                        : 1}
                                </span>
                            </div>
                            <button
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                {'>'}
                            </button>
                        </div>
                        {paging &&
                        paging.total > DEFAULT_TABLE_PAGINATION.pageSize ? (
                            <div className="flex items-center justify-end">
                                {map(pageOptions, (pageSize, index) => (
                                    <button
                                        key={pageSize}
                                        onClick={() => {
                                            table.setPageIndex(1);
                                            table.setPageSize(pageSize);
                                        }}
                                        className={`border px-3 ${
                                            currentPageSize === pageSize
                                                ? 'bg-white-smoke'
                                                : ''
                                        }`}
                                    >
                                        {index + 1 !== size(pageOptions)
                                            ? pageSize
                                            : 'All'}
                                    </button>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default memo(Table);
