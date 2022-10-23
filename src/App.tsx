import type { FC } from 'react';
import { userData } from 'data';
import { USER_COLUMNS } from 'domains';
import DataTable from 'components/DataTable';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div>
      <h1 className="bg-red-500">{title}</h1>
      <div className="m-4">
        <DataTable data={userData} columns={USER_COLUMNS} />
      </div>
    </div>
  );
};

export default App;
