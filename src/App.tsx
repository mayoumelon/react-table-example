import { FC } from 'react';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div>
      <h1 className="bg-red-500">{title}</h1>
    </div>
  );
};

export default App;
