import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PermissionUpdate from 'components/environments/PermissionUpdate';
import Home from 'components/templates/Home';
import Layout from 'components/templates/Layout';
import PermissionManagement from 'components/templates/PermissionManagement';
import PermissionSettings from 'components/templates/PermissionSettings';

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="testapp" element={<Layout />}>
        <Route path="" element={<PermissionManagement />} />
        <Route path="create" element={<PermissionSettings />} />
        <Route path=":id" element={<PermissionUpdate />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
