import React from "react";
import {Skeleton, Button, Textarea} from "@nextui-org/react";

export default function PromptOuput({resultOutput, isLoading}) {
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
        <Skeleton className="rounded-lg lg:mt-6 mt-0">  
          <div className="h-60 rounded-lg bg-default-300"></div>
        </Skeleton>
      ):
      (
        <div className="relative lg:mt-6 mt-0">
          <Textarea
          isReadOnly
          size={'lg'}
          minRows={50}
          label="Output"
          value={resultOutput != 'null'?resultOutput:''}
          className="prompt-out"
          color="primary"
          />
          <Button 
            style={{ position: 'absolute', top: 0, right: 0 }}
            onPress={() => handleCopy(resultOutput)}
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
