import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Link from "next/link";

export default function LimitModel({ isOpen, onOpenChange, limit }) {

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Prompt Limit Reached</ModalHeader>
              <ModalBody>
                <p>
                  You have reached the daily limit of <span className="text-danger">{limit}</span> prompts for today in the demo version.
                </p>
                <p>
                  Please sign up for a free account to get increased prompt limit.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button as={Link} color="primary" href="/register">
                  Sign Up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
