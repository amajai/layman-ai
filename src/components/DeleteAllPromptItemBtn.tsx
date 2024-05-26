import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useLayman } from "@/context/LaymanContext";

export default function DeleteAllPromptItemBtn({setSelectedPromptId }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { laymanSavedPrompts, setLaymanSavedPrompts } = useLayman();

  const handleDeleteALL = () => {
    localStorage.removeItem('laymanSavedPrompts')
    setLaymanSavedPrompts([]);
    setSelectedPromptId(null);
  }

  return (
    <>
      <Button fullWidth={true} color="danger" className='mt-1' onPress={onOpen}>
        Delete All
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete All Prompts?</ModalHeader>
              <ModalBody>
                <p>
                  This will delete <b>All your past prompts</b>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose} onClick={()=>handleDeleteALL()}>
                  Delete All
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
