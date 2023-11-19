import { type ColumnDef } from '@tanstack/react-table';
import { filter, isEmpty, map, startCase } from 'lodash';

export const getColumns = (
    rawTransaction: any,
): ColumnDef<Record<string, any>, any>[] => {
    const keys = !isEmpty(rawTransaction)
        ? filter(Object.keys(rawTransaction), (key) => key !== 'images')
        : [];
    return !isEmpty(keys)
        ? map(keys, (key) => {
              return {
                  accessorKey: key,
                  header: startCase(key.replace(/_/g, ' ')),
                  cell: (value) => {
                      const data = value.row.original;

                      return data[key] ? (
                          <div
                              className={`!max-w-[16rem] break-words`}
                              style={{
                                  width: `${12 * data[key].length}px`,
                              }}
                          >
                              {data[key]}
                          </div>
                      ) : null;
                  },
              };
          })
        : [];
};
