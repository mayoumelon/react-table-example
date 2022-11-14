import type { FC } from 'react';
import { IconButton, HStack, Select, Flex, Text } from '@chakra-ui/react';
import { PAGE_LIMIT } from 'domains';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

const Pagination: FC = () => {
  return (
    <Flex justifyContent="space-between">
      <Text>
        Showing page{' '}
        <Text as="b" fontSize="lg">
          1
        </Text>{' '}
        to{' '}
        <Text as="b" fontSize="lg">
          10
        </Text>{' '}
        of{' '}
        <Text as="b" fontSize="lg">
          100
        </Text>{' '}
        pages
      </Text>
      <HStack justifyContent="end">
        <IconButton
          aria-label="先頭へ"
          variant="outline"
          colorScheme="blue"
          icon={<FiChevronsLeft />}
        />
        <IconButton
          aria-label="前のリストへ"
          variant="outline"
          colorScheme="blue"
          icon={<FiChevronLeft />}
        />
        <IconButton
          aria-label="次のリストへ"
          variant="outline"
          colorScheme="blue"
          icon={<FiChevronRight />}
        />
        <IconButton
          aria-label="最後へ"
          variant="outline"
          colorScheme="blue"
          icon={<FiChevronsRight />}
        />
        <Select>
          {PAGE_LIMIT.map((limit) => (
            <option value={limit} key={limit}>
              show {limit}
            </option>
          ))}
        </Select>
      </HStack>
    </Flex>
  );
};

export default Pagination;
