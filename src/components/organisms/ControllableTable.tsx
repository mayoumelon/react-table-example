import type { FC } from 'react';
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Thead,
  Td,
  Tr,
  Th,
  Tbody,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import ActionIcon from 'components/molecules/ActionIcon';

type Props = {
  onDelete?: () => void;
  onEdit?: () => void;
};

const ControllableTable: FC<Props> = ({
  onDelete = () => undefined,
  onEdit = () => undefined,
}) => {
  const handleClickEdit = () => {
    console.log('edit');
    onEdit();
  };

  const handleClickDelete = () => {
    console.log('delete');
    onDelete();
  };

  return (
    <>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.300"
        overflow="hidden"
        bg="white"
        p={4}
      >
        <TableContainer overflow="auto">
          <Table variant="simple">
            <Thead bg="gray.100">
              <Tr>
                <Th rowSpan={2}>氏名コード</Th>
                <Th rowSpan={2}>氏名</Th>
                <Th rowSpan={2}>退職日</Th>
                <Th colSpan={3} borderWidth="0px" pb="">
                  <Box bg="red.100" pl={2} py={0.5} borderRadius="lg">
                    自組織
                  </Box>
                </Th>
                <Th colSpan={3} borderWidth="0px" pb={1}>
                  <Box bg="gray.300" pl={2} py={0.5} borderRadius="lg">
                    他組織
                  </Box>
                </Th>
                <Th rowSpan={2}>{}</Th>
              </Tr>
              <Tr>
                <Th>読み取り</Th>
                <Th>書き込み</Th>
                <Th>ダウンロード</Th>
                <Th>読み取り</Th>
                <Th>書き込み</Th>
                <Th>ダウンロード</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td py={2}>0000001</Td>
                <Td py={2}>まゆめろん テスト</Td>
                <Td py={2}>{}</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>
                  <Flex justifyContent="end" gap={1}>
                    <ActionIcon
                      label="編集"
                      icon={<FiEdit size={18} />}
                      onAction={handleClickEdit}
                    />
                    <ActionIcon
                      label="削除"
                      color="red.400"
                      icon={<FiTrash2 size={18} />}
                      onAction={handleClickDelete}
                    />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td py={2}>0000002</Td>
                <Td py={2}>まゆめろん</Td>
                <Td py={2}>2022-10-31</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>
                  <Flex justifyContent="end" gap={1}>
                    <ActionIcon
                      label="編集"
                      icon={<FiEdit size={18} />}
                      onAction={handleClickEdit}
                    />
                    <ActionIcon
                      label="削除"
                      color="red.400"
                      icon={<FiTrash2 size={18} />}
                      onAction={handleClickDelete}
                    />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td py={2}>0000003</Td>
                <Td py={2}>まゆめろん</Td>
                <Td py={2}>{}</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>30</Td>
                <Td py={2}>
                  <Flex justifyContent="end" gap={1}>
                    <ActionIcon
                      label="編集"
                      icon={<FiEdit size={18} />}
                      onAction={handleClickEdit}
                    />
                    <ActionIcon
                      label="削除"
                      color="red.400"
                      icon={<FiTrash2 size={18} />}
                      onAction={handleClickDelete}
                    />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ControllableTable;
