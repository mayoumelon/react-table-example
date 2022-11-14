import type { FC } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { ACTIONS } from 'domains';
import { Helmet } from 'react-helmet-async';
import PermissionForm from 'components/ecosystems/PermissionForm';
import PermissionGuide from 'components/organisms/PermissionGuide';

const pageTitlePrefix = 'ユーザーの権限';

type Props = {
  action: keyof typeof ACTIONS;
};

const PermissionSettings: FC<Props> = ({ action = 'create' }) => {
  const actionName = ACTIONS[action];

  return (
    <>
      <Helmet>
        <title>{`${pageTitlePrefix}${actionName}`}</title>
      </Helmet>
      <Box py={6}>
        <Heading as="h2" size="lg" color="gray.600">
          {`${pageTitlePrefix}${actionName}`}
        </Heading>
        <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
          <Stack direction={['column', 'row']} spacing={8} mt={6}>
            <PermissionGuide action={action} />
            <PermissionForm />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default PermissionSettings;
