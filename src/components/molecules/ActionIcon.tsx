import type { FC } from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

type Props = {
  label?: string;
  color?: string;
  icon?: React.ReactElement;
  onAction?: () => void;
};

const ActionIcon: FC<Props> = ({
  label = 'sample',
  color = 'blue.400',
  icon = <FiInfo />,
  onAction = () => undefined,
}) => (
  <Tooltip label={label} bg="gray.500" openDelay={1000}>
    <IconButton
      w={9}
      h={9}
      minW={9}
      variant="ghost"
      aria-label="edit"
      icon={icon}
      color={color}
      isRound
      onClick={onAction}
    />
  </Tooltip>
);

export default ActionIcon;
