import React, { memo, useEffect, useState } from "react";
import { Box, Button, Textarea, VStack } from "@chakra-ui/react";

interface TranscriptAreaProps {
  value: string;
}

const TranscriptArea: React.FC<TranscriptAreaProps> = ({ value }) => {
  const [previousValue, setPreviousValue] = useState("");

  const getSelectedVoice = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    const selectedVoiceName = "Google UK English Female";

    const selectedVoice = availableVoices.find(
      (voice) => voice.name === selectedVoiceName
    );
    return selectedVoice || availableVoices[0];
  };

  useEffect(() => {
    if (value === previousValue) return;

    const utterance = new SpeechSynthesisUtterance(value);
    utterance.voice = getSelectedVoice();
    window.speechSynthesis.speak(utterance);

    setPreviousValue(value);
  }, [value, previousValue]);

  return (
    <VStack h="100%">
      <Box
        color="white"
        fontSize="md"
        fontWeight="bold"
        mb={1}
        alignSelf="flex-start"
      >
        The Transcript
      </Box>
      <Textarea
        readOnly
        value={value}
        backgroundColor="#1b2027"
        color="white"
        fontSize="lg"
        borderRadius="8px"
        flexGrow={1}
        w="100%"
        p={4}
        _hover={{
          borderColor: "#222831",
        }}
        _focus={{
          borderColor: "#222831",
        }}
      />
      <Button
        onClick={() =>
          window.open("https://chat.openai.com/chat?model=gpt-4", "_blank")
        }
        alignSelf="flex-end"
        mt={2}
      >
        Launch ChatGPT
      </Button>
    </VStack>
  );
};

export default memo(TranscriptArea);
