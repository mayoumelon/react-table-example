import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import PermissionTable from 'components/ecosystems/PermissionTable';

const pageTitle = 'ユーザー権限一覧';

const PermissionManagement: FC = () => (
  <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <Box py={6}>
      <Heading as="h2" size="lg" color="gray.600">
        {pageTitle}
      </Heading>
      <Box mt={6}>
        <PermissionTable />
      </Box>
    </Box>
  </>
);

export default PermissionManagement;
