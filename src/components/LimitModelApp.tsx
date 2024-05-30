import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Link from "next/link";

export default function LimitModelApp({ isOpen, onOpenChange, limit }) {

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Prompt Limit Reached</ModalHeader>
              <ModalBody>
                <p>
                  You have reached the daily limit of <span className="text-danger">{limit}</span> prompts for today.
                </p>
                <p>
                  You will have to wait until tomorrow. Thank you.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
