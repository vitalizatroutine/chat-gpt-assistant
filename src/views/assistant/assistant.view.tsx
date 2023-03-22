import React, { useState } from "react";
import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { SpeechManager, TranscriptArea } from "../../components";
import { assistantService } from "../../services";

function Assistant() {
  const [transcript, setTranscript] = useState(
    "Hello, I am your awesome voice assistant. How can I help today?"
  );

  const handleOnSpeech = async (value: string) => {
    console.log("Speech History", value);

    const assistantReply = await assistantService.pingAssistant(value);

    if (assistantReply) {
      setTranscript(assistantReply);
    } else {
      setTranscript("Sorry, I couldn't understand your request.");
    }
  };

  return (
    <VStack h="100vh" w="100%" spacing={0}>
      <Box w="100%">
        <Container maxW="none">
          <Heading as="h1" color="white" fontSize="2xl" py={4}>
            Voice Assistant
          </Heading>
        </Container>
      </Box>
      <Flex
        w="100%"
        flexGrow={1}
        direction={["column", "row"]}
        alignItems="stretch"
      >
        <Container maxW="none" w="100%" padding="16px">
          <Flex
            w="100%"
            h="100%"
            direction={["column", "row"]}
            alignItems="stretch"
          >
            <Box flex={1} pr={[0, 2]} pb={[2, 0]}>
              <SpeechManager onSpeech={handleOnSpeech} />
            </Box>
            <Box flex={1} pl={[0, 2]} pt={[2, 0]}>
              <TranscriptArea value={transcript} />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </VStack>
  );
}

export default Assistant;
