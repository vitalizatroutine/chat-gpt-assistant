import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { assistantService } from "../../services";

interface SpeechToTextButtonProps {
  onTextGenerated: (value: string) => void;
}

const SpeechToTextButton: React.FC<SpeechToTextButtonProps> = ({
  onTextGenerated,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      mediaRecorderRef.current = new MediaRecorder(mediaStream);
      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        audioChunksRef.current.push(event.data);
      });

      mediaRecorderRef.current.addEventListener("stop", async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const response = await sendAudioToSpeechToText(audioBlob);
        onTextGenerated(response);
        audioChunksRef.current = [];
      });

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Error accessing the microphone:", error);
      alert(
        "Error accessing the microphone. Please check your device and permissions."
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const sendAudioToSpeechToText = async (audioBlob: Blob) => {
    return await assistantService.transcribeAudio(audioBlob);
  };

  useEffect(() => {
    return () => {
      stopRecording();
    };
  }, []);

  const handleMouseDown = () => {
    setIsRecording(true);
    startRecording();
  };

  const handleMouseUp = () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <Button
      alignSelf="flex-end"
      mt={2}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {isRecording ? "Recording..." : "Hold to record"}
    </Button>
  );
};

export default SpeechToTextButton;
