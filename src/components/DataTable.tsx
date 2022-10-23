import type { FC } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { User, userColumnsType } from 'domains';

type Props = {
  data: User[];
  columns: userColumnsType;
};

const DataTable: FC<Props> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <table className="min-w-full table-auto">
        <thead className="divide-y divide-black bg-gray-100 text-xs">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="p-4 text-left">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-3 px-6">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white text-sm">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 px-6">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
