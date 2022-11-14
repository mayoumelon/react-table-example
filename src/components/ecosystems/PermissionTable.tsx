import type { FC } from 'react';
import {
  Button,
  Flex,
  Stack,
  useDisclosure,
  useToast,
  UseToastOptions,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import FilterPermissionByName from 'components/ecosystems/FilterPermissionByName';
import ConfirmDialog from 'components/molecules/ConfirmDialog';
import Pagination from 'components/molecules/Pagination';
import ControllableTable from 'components/organisms/ControllableTable';

const toastCommonStyle: UseToastOptions = {
  variant: 'subtle',
  position: 'top',
  duration: 9000,
  isClosable: true,
};

const PermissionTable: FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const confirmDelete = () => {
    onOpen();
  };

  const deleteItem = () => {
    onClose();
    toast({
      ...toastCommonStyle,
      title: 'Success',
      description: '権限を削除しました',
      status: 'success',
    });
  };

  const editItem = () => {
    navigate('/testapp/123');
  };

  return (
    <>
      <Stack>
        <Flex justifyContent="space-between">
          <FilterPermissionByName />
          <Button colorScheme="blue" as={Link} to={'/testapp/create'}>
            新規作成
          </Button>
        </Flex>
        <ControllableTable onDelete={confirmDelete} onEdit={editItem} />
        <Pagination />
      </Stack>
      <ConfirmDialog
        title="ユーザー権限削除"
        content="削除しますか？"
        isOpen={isOpen}
        onClose={onClose}
        onOk={deleteItem}
      />
    </>
  );
};

export default PermissionTable;
