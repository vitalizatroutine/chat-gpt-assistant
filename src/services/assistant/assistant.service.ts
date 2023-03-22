export interface IAssistantService {
  transcribeAudio(audioBlob: Blob): Promise<string>;
  pingAssistant(message: string): Promise<string>;
}

class AssistantService implements IAssistantService {
  private readonly baseUrl = "http://localhost:5001";

  async transcribeAudio(audioBlob: Blob): Promise<string> {
    try {
      const formData = new FormData();
      formData.append("audio", audioBlob);

      const response = await fetch(`${this.baseUrl}/transcribe`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        return data.text || "";
      } else {
        throw new Error(`Server error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error sending audio to server:", error);
      return "";
    }
  }

  async pingAssistant(message: string): Promise<string> {
    try {
      const response = await fetch("http://localhost:5001/ping-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.reply || "";
      } else {
        throw new Error(`Server error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error sending message to assistant:", error);
      return "";
    }
  }
}

export const assistantService: IAssistantService = new AssistantService();
