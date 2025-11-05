# AI Voice Generator

A text-to-speech application that uses Google's Gemini API to generate high-quality, natural-sounding AI voices. Enter text, choose a voice, adjust speed and pitch, and then listen to or download the generated audio.

This project is built with React, TypeScript, and Tailwind CSS.

## Features

- **Text-to-Speech:** Convert any text into spoken audio.
- **Multiple Voices:** Choose from a diverse list of high-quality AI voices.
- **Audio Controls:** Adjust the playback speed and pitch (low, medium, high).
- **Playback & Download:** Listen to the generated speech directly in the app and download it as a `.wav` file.
- **Persistent API Key:** Your Gemini API key is saved in your browser's local storage, so you don't have to enter it every time.
- **Responsive UI:** A clean and modern interface that works on all screen sizes.
- **Loading & Error States:** Clear feedback during API calls and for any potential errors.

## How to Run

This project is set up to run in modern browser environments that support ES modules, such as Google's AI Studio. No build step is required.

If you want to run this project on your own machine, you will need a local development server that can serve the `index.html` file.

## How to Use the Application

1.  **Enter API Key:** When you first open the application, a modal will appear. Enter your Google Gemini API key to proceed. You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey). The key will be stored in your browser for future sessions.
2.  **Enter Text:** Type or paste the text you want to convert to speech into the text area.
3.  **Choose a Voice:** Select one of the available voice options.
4.  **Adjust Settings (Optional):** Use the sliders and buttons to change the speed and pitch of the voice.
5.  **Generate:** Click the "Generate Speech" button. The app will contact the Gemini API and create the audio.
6.  **Play/Download:** Once generation is complete, use the play button to listen to the audio or the download button to save it as a WAV file.
7.  **Change API Key:** If you need to change your API key, click the "Change Key" button in the top-right corner.