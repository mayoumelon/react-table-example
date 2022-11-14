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

const FilterPermissionByName: FC = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <Flex gap={3}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.500" />
        </InputLeftElement>
        <Input
          bg="white"
          value={value}
          onChange={handleChange}
          placeholder="氏名で検索..."
        />
      </InputGroup>
      <Button colorScheme="blue" variant="outline">
        絞り込み
      </Button>
    </Flex>
  );
};

export default FilterPermissionByName;
