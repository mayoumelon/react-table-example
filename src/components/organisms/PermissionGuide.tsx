import type { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { ACTIONS } from 'domains';

type Props = {
  action: keyof typeof ACTIONS;
};

const PermissionGuide: FC<Props> = ({ action }) => {
  const actionName = ACTIONS[action];

  return (
    <Text>
      {actionName}{' '}
      氏名コードまたは氏名で検索します。氏名コードまたは氏名で検索します。
    </Text>
  );
};

export default PermissionGuide;
