# Notes_App

A simple yet powerful notes application built with React, Firebase, and various supporting libraries.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The React Notes App is a user-friendly application that allows you to create, edit, and manage your notes seamlessly. It leverages the power of Firebase as the data host, ensuring your notes are securely stored and accessible across devices.

## Features
- **Firebase Integration**: The app utilizes Firebase for real-time data storage and synchronization, providing a reliable and scalable backend for your notes.
- **Markdown Support**: The application integrates the React-MDE library, which enables you to write and format your notes using Markdown syntax.
- **Split-Screen Layout**: The React-Split library is used to provide a split-screen layout, allowing you to view and edit your notes simultaneously.
- **Live Preview**: The Showdown library is integrated to offer a live preview of your Markdown-formatted notes.
- **Responsive Design**: The app is designed to be responsive, ensuring a consistent user experience across various devices and screen sizes.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A comprehensive app development platform that provides a suite of tools and services for building high-quality apps.
- **React-MDE**: A Markdown editor component for React, providing a rich text editing experience.
- **React-Split**: A React component for creating resizable split-screen layouts.
- **Showdown**: A JavaScript Markdown to HTML converter, used for live previewing of Markdown notes.

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm (version 6 or later)
- A Firebase project with the necessary configurations

### Installation
1. Clone the repository:
```
git clone https://github.com/Juin28/Notes_App.git
```

2. Navigate to the project directory:
```
cd Notes_App
```

3. Install the dependencies:
```
npm install
```

4. Set up the Firebase configuration:
   - Create a new Firebase project in the Firebase console.
   - Obtain the Firebase configuration details (API key, project ID, etc.) and replace the placeholders in the `firebase.js` file.

5. Start the development server:
```
npm start
```

The Notes_App should now be running at your local host.

## Usage
1. Create a new note by clicking the "New Note" button.
2. Start writing your note using Markdown syntax.
3. The note will be automatically saved to Firebase as you type.
4. Use the split-screen layout to view the live preview of your note.
5. Manage your notes by editing, deleting, or creating new ones as needed.

## Contributing
If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make the necessary changes and commit them
4. Submit a pull request with a detailed description of your changes

In case if the database is full, you can reach me at:
- jtanat@connect.ust.hk

## License
This project is licensed under the [MIT License](LICENSE).
