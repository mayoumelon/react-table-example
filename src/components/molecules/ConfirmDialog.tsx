import { useRef } from 'react';
import type { FC } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
} from '@chakra-ui/react';

type Props = {
  content?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  title?: string;
};

const ConfirmDialog: FC<Props> = ({
  title = 'test',
  content = 'test message',
  isOpen = true,
  onClose = () => undefined,
  onOk = () => undefined,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{content}</AlertDialogBody>
          <AlertDialogFooter gap={4}>
            <Button variant="link" ref={cancelRef} onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={onOk} ml={3}>
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ConfirmDialog;
