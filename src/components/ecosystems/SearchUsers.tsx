import { ChangeEvent, useState } from 'react';
import type { FC } from 'react';
import {
  Button,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const SearchUsers: FC = () => {
  const [empId, setEmpId] = useState('');
  const [nameLike, setNameLike] = useState('');
  const handleChangeEmpId = (event: ChangeEvent<HTMLInputElement>) =>
    setEmpId(event.target.value);
  const handleChangeNameLike = (event: ChangeEvent<HTMLInputElement>) =>
    setNameLike(event.target.value);

  return (
    <Flex justifyContent="space-between" gap={4}>
      <InputGroup maxW="200px">
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.500" />
        </InputLeftElement>
        <Input
          bg="white"
          value={empId}
          onChange={handleChangeEmpId}
          placeholder="氏名コードで検索..."
        />
      </InputGroup>
      <InputGroup maxW="200px">
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.500" />
        </InputLeftElement>
        <Input
          bg="white"
          value={nameLike}
          onChange={handleChangeNameLike}
          placeholder="氏名で検索..."
        />
      </InputGroup>
      <Button colorScheme="blue" variant="outline">
        ユーザー検索
      </Button>
    </Flex>
  );
};

export default SearchUsers;
