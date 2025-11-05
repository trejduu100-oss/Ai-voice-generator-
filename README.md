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

## How to Run Locally

To run this project on your local machine, you'll need [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1.  **Install a static server:** Open your terminal and install the `serve` package globally. This is a simple and effective way to serve static files.
    ```bash
    npm install -g serve
    ```

2.  **Navigate to the project directory:** Use the `cd` command to move into the folder where you saved the project files.
    ```bash
    cd path/to/your-project-folder
    ```

3.  **Start the server:** Run the following command to start the local server.
    ```bash
    serve
    ```

4.  **Open in browser:** The terminal will output a local address (usually `http://localhost:3000`). Open this URL in your web browser to use the application.


## How to Use the Application

1.  **Enter API Key:** When you first open the application, a modal will appear. Enter your Google Gemini API key to proceed. You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey). The key will be stored in your browser for future sessions.
2.  **Enter Text:** Type or paste the text you want to convert to speech into the text area.
3.  **Choose a Voice:** Select one of the available voice options.
4.  **Adjust Settings (Optional):** Use the sliders and buttons to change the speed and pitch of the voice.
5.  **Generate:** Click the "Generate Speech" button. The app will contact the Gemini API and create the audio.
6.  **Play/Download:** Once generation is complete, use the play button to listen to the audio or the download button to save it as a WAV file.
7.  **Change API Key:** If you need to change your API key, click the "Change Key" button in the top-right corner.