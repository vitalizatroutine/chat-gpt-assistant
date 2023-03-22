import React from "react";
import { Box, Textarea, VStack } from "@chakra-ui/react";

interface PasteBucketProps {
  binValue: string;
  onBinChange: (value: string) => void;
}

const PasteBucket: React.FC<PasteBucketProps> = ({ binValue, onBinChange }) => {
  return (
    <Box flexGrow={1} w="100%">
      <VStack h="100%">
        <Box
          color="white"
          fontSize="md"
          fontWeight="bold"
          mb={1}
          alignSelf="flex-start"
        >
          The Paste Bucket
        </Box>
        <Textarea
          value={binValue}
          onChange={(e) => onBinChange(e.target.value)}
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
      </VStack>
    </Box>
  );
};

export default PasteBucket;
