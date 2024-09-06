# Audio Recorder with Volume Display

This project is a simple web application that demonstrates the use of the Web Audio API to record audio from the user's microphone and display the volume in real-time. It's a practical example for anyone interested in exploring the capabilities of the Web Audio API, especially in terms of accessing and manipulating audio streams directly in the browser.

## Features

- **Audio Recording**: Users can record audio using their device's microphone.
- **Volume Display**: Real-time display of the audio volume while recording.
- **Playback**: Users can play back their recorded audio immediately after recording.

## Technologies Used

- **HTML5**: For structuring the web application.
- **CSS3**: For styling the application.
- **JavaScript**: For the application's functionality, including using the Web Audio API and the MediaRecorder API.

## How It Works

1. **User Permissions**: The application requests permission to access the user's microphone.
2. **Recording**: Once permissions are granted, users can start recording audio by clicking the "Record" button.
3. **Volume Monitoring**: While recording, the application displays the volume of the audio being recorded in real-time.
4. **Playback**: After stopping the recording, users can play back the recorded audio.

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a modern web browser that supports the Web Audio API and MediaRecorder API.
3. Allow microphone access when prompted by the browser.
4. Start recording and explore the functionality!

## Browser Compatibility

This project uses modern web APIs that are supported in most up-to-date web browsers. However, compatibility may vary, especially with older versions. For the best experience, use the latest version of Google Chrome, Mozilla Firefox, or any other modern browser.

## Contributing

Contributions to improve the project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- This project was created as an exploration of the Web Audio API.
- Thanks to the Web Audio API documentation for providing the necessary information to build this application.
