import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useLayman } from "@/context/LaymanContext";
import { useSession } from "next-auth/react";
import axios from "axios";
import getUserPrompts from "@/utils/getUserPrompts";

export default function DeletePromptItemBtn({ promptItem, setSelectedPromptId, selectedPromptId }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { laymanSavedPrompts, setLaymanSavedPrompts, setLaymanSavedPromptsCloud } = useLayman();
  const { data: session } = useSession();

  const handleDelete = async (id: string) => {
    if (!session) {
      const updatedPrompts = laymanSavedPrompts.filter((prompt) => {
        if (prompt.id == id) {
          return false
        } else {
          return true
        }
      })
      setLaymanSavedPrompts(updatedPrompts);
      localStorage.setItem('laymanSavedPrompts', JSON.stringify(updatedPrompts));
    } else {
      await axios.delete('api/layman-prompt/delete', {
        data: {
          PromptId: id
        }
      });
      setLaymanSavedPromptsCloud(await getUserPrompts());
    }
    if (selectedPromptId == id)
      setSelectedPromptId(null);
  }

  return (
    <>
      <Button isIconOnly color="danger" aria-label="Like" size='sm' onPress={onOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" color='white' className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Prompt?</ModalHeader>
              <ModalBody>
                <p>
                  This will delete <b>{promptItem.user_input.length <= 80 ? promptItem.user_input : `${promptItem.user_input.substring(0, 80)}...`}</b>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose} onClick={() => handleDelete(promptItem._id || promptItem.id)}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
