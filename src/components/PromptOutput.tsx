import React from "react";
import {Skeleton, Button, Textarea} from "@nextui-org/react";

export default function PromptOuput({resultOuput, isLoading}) {
  const handleCopy = (value: string) => {
    if (value == 'null') {
      value = ''
    }
    navigator.clipboard.writeText(value);
  };
  return (
    <>
    {
      isLoading?
      (
        <Skeleton className="rounded-lg mt-10">  
          <div className="h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
      ):
      (
        <div className="relative mt-10">
          <Textarea
          isReadOnly
          size={'lg'}
          minRows={50}
          label="Output"
          value={resultOuput != 'null'?resultOuput:''}
          className="prompt-out"
          color="primary"
          />
          <Button 
            style={{ position: 'absolute', top: 0, right: 0 }}
            onPress={() => handleCopy(resultOuput)}
            size="sm"
            radius="full"
          >
            Copy
          </Button>
        </div>
      )
      }

    </>
  );
}
