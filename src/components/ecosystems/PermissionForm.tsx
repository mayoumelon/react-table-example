import type { FC } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Stack,
  Select,
  VisuallyHiddenInput,
} from '@chakra-ui/react';
import { PERMIT_LEVEL } from 'domains';
import { Link } from 'react-router-dom';
import SearchUsers from 'components/ecosystems/SearchUsers';

const testUsers = [
  { value: '0000001', name: '0000001: まゆめろん テスト' },
  { value: '0000002', name: '0000002: まゆめろん テスト' },
  { value: '0000003', name: '0000003: まゆめろん テスト' },
];

const PermissionForm: FC = () => {
  return (
    <Stack as="form" spacing={10}>
      <FormControl isRequired>
        <FormLabel>ユーザー</FormLabel>
        <Stack spacing={3}>
          <SearchUsers />
          <VisuallyHiddenInput />
          <Select placeholder="ユーザーを検索してください">
            {testUsers.map((user) => (
              <option value={user.value} key={user.value}>
                {user.name}
              </option>
            ))}
          </Select>
        </Stack>
      </FormControl>
      {['自組織', '他組織'].map((organization) => (
        <Box key={organization}>
          <FormLabel
            fontSize="xl"
            borderColor="red.100"
            borderLeftWidth={6}
            mb={4}
            pl={2}
          >
            {organization}
          </FormLabel>
          <HStack spacing={10}>
            {['読み取り', '書き込み', 'ダウンロード'].map((type) => (
              <FormControl
                key={type}
                {...(type === '読み取り' && { isRequired: true })}
              >
                <FormLabel>{type}</FormLabel>
                <Select placeholder="未設定">
                  {PERMIT_LEVEL.map((level) => (
                    <option value={level} key={level}>
                      {level}
                    </option>
                  ))}
                </Select>
              </FormControl>
            ))}
          </HStack>
        </Box>
      ))}
      <Flex justifyContent="end" gap={6}>
        <Button variant="link" as={Link} to={'/testapp'}>
          キャンセル
        </Button>
        <Button colorScheme="blue" type="submit">
          権限を作成する
        </Button>
      </Flex>
    </Stack>
  );
};

export default PermissionForm;
