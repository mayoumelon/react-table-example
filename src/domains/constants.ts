import { createColumnHelper } from '@tanstack/react-table';
import type { User } from './types';

export const PERMIT_LEVEL = [10, 20, 25, 30] as const;

export const PERMIT_TYPE = {
  read: 'r',
  write: 'w',
  download: 'd',
} as const;

const columnHelper = createColumnHelper<User>();
export const USER_COLUMNS = [
  columnHelper.accessor('id', {
    header: '氏名コード',
    cell: (info) => info.getValue(),
  }),
  // Combine first and last names
  columnHelper.accessor((row) => `${row.lastName} ${row.firstName}`, {
    header: '氏名',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('exitDate', {
    header: '退職日',
    cell: (info) => info.getValue(),
  }),
];
