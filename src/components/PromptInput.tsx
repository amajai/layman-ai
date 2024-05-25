import React, { ChangeEvent } from 'react';
import {Textarea} from "@nextui-org/react";

interface PromptInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ value, isLoading, onChange }) => {
  return (
    <Textarea
      disabled={isLoading}
      isRequired
      size={'lg'}
      minRows={500}
      label="Input"
      placeholder="Enter the text you want to simplify"
      value={value}
      onChange={onChange}
    />
  );
}

export default PromptInput
