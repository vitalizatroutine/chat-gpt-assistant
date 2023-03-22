# Voice Assistant
This project is a React-based web application that allows users to convert their speech into text and interact with the ChatGPT model. It has a Paste Bucket feature where users can paste additional text, which will be combined with the transcribed speech. The app also includes a Transcript Area where the final output is displayed and can be read aloud using the browser's Text-to-Speech feature. The user can launch the ChatGPT model in a separate window to interact with it directly.

## Features
- Speech-to-text functionality
- Paste Bucket for adding additional text
- Transcript Area with text-to-speech
- Launch ChatGPT in a new window
- Components
- PasteBucket
- TranscriptArea
- SpeechManager
- SpeechToTextButton

## Installation
1. Clone the repository.
2. Install the required dependencies using `npm install` or `yarn`.
3. Start the development server using `npm start` or `yarn start`.

## Usage
1. Hold the "Hold to record" button to record your speech.
2. Release the button to stop recording.
3. Your speech will be transcribed and displayed in the Transcript Area.
4. Add any additional text to the Paste Bucket.
5. Transcript Area will combine the transcribed speech and Paste Bucket content.
6. The app will read the transcript aloud using the browser's Text-to-Speech feature.
7. Click "Launch ChatGPT" to open a new window and interact with the ChatGPT model directly.

## Testing
The project contains tests using the React Testing Library. Run the tests using `npm test` or `yarn test`.

## License
This project is open source and available under the MIT License.