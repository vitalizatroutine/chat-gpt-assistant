import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { PasteBucket, SpeechToTextButton } from "../index";

interface SpeechManagerProps {
  onSpeech: (value: string) => void;
}

const SpeechManager: React.FC<SpeechManagerProps> = ({ onSpeech }) => {
  const [binValue, setBinValue] = useState("");

  const handleTextGenerated = (value: string) => {
    if (binValue) {
      onSpeech(`${value}\n\nThis is the paste bucket content:\n\n${binValue}`);
    } else {
      onSpeech(value);
    }
  };

  return (
    <VStack h="100%">
      <PasteBucket binValue={binValue} onBinChange={setBinValue} />
      <SpeechToTextButton onTextGenerated={handleTextGenerated} />
    </VStack>
  );
};

export default SpeechManager;
