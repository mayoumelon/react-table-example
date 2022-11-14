import type { FC } from 'react';
import { Link } from 'react-router-dom';

const title = 'テストアプリ';

const Home: FC = () => {
  return (
    <>
      <header>
        <h1 className="bg-red-500">{title}</h1>
      </header>
      <main>
        <p>テストアプリです</p>
        <Link to="/testapp">testapp</Link>
      </main>
      <footer>
        <p>&copy; 2022 mayoumelon</p>
      </footer>
    </>
  );
};

export default Home;
