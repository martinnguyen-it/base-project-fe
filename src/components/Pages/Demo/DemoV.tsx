import { Table } from '@components';
import { IPaginationState, IPaginationResponse } from '@types';
import { SetStateAction } from 'jotai';
import { Dispatch, FC, MouseEventHandler, memo, useMemo } from 'react';
import { getColumns } from './Columns';

interface IProps {
    tableData: any[];
    tableQueries: IPaginationState;
    setTableQueries: Dispatch<SetStateAction<IPaginationState>>;
    isLoading: boolean;
    onClickItem: MouseEventHandler<HTMLTableRowElement>;
    paging: IPaginationResponse;
}

const DemoV: FC<IProps> = ({
    tableData,
    tableQueries,
    setTableQueries,
    isLoading,
    onClickItem,
    paging,
}) => {
    const Columns = useMemo(
        () => (tableData ? getColumns(tableData[0]) : []),
        [tableData],
    );

    return (
        <>
            <Table
                tableData={tableData || []}
                paginationQuery={tableQueries}
                setPaginationQuery={setTableQueries}
                isFetching={isLoading}
                columns={Columns}
                paging={paging}
                onClickItem={onClickItem}
            />
        </>
    );
};

export default memo(DemoV);
