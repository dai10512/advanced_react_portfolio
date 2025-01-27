import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { FocusableElement } from "@chakra-ui/utils";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const {
    isOpen,
    type,
    message,
    onClose,
  }: {
    isOpen: boolean;
    type: String;
    message: String;
    onClose: () => void;
  } = useAlertContext();
  const cancelRef = useRef<FocusableElement>(null as unknown as FocusableElement);
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? "All good!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
