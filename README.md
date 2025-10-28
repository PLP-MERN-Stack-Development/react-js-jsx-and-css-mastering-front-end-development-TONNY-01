# PLP Task Manager

A modern, responsive task management application built with React, Vite, and Tailwind CSS. This application allows users to manage their tasks with a clean, intuitive interface that supports both light and dark modes.

## Live Demo

[View Live Demo](https://plp-task-manager.vercel.app)

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Local Storage**: Tasks persist between sessions
- **Modern UI**: Built with Tailwind CSS for beautiful, responsive design
- **React Hooks**: Utilizes useState, useEffect, and custom hooks for state management

## Technologies Used

- React 18
- Tailwind CSS
- Vite
- React Router
- Local Storage API
- Dark Mode Support

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-TONNY-01.git
   cd react-js-jsx-and-css-mastering-front-end-development-TONNY-01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx   # Custom button component
│   ├── Card.jsx     # Card layout component
│   ├── Navbar.jsx   # Navigation bar
│   ├── Footer.jsx   # Page footer
│   └── TaskManager.jsx  # Main task management component
├── pages/           # Page components
│   ├── Home.jsx     # Home page
│   ├── Tasks.jsx    # Tasks management page
│   └── About.jsx    # About page
├── hooks/           # Custom React hooks
│   └── useLocalStorage.js  # Local storage hook
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## Features in Detail

### Task Management
- Add new tasks with a simple form
- Mark tasks as complete/incomplete
- Delete tasks you no longer need
- Filter tasks by status (All, Active, Completed)

### User Interface
- Clean, modern design with Tailwind CSS
- Responsive layout that works on all devices
- Smooth animations and transitions
- Dark/light mode toggle

### State Management
- React Hooks for state management
- Custom hooks for local storage persistence
- Context API for theme management

## Responsive Design

The application is fully responsive and works on:
- Desktop (≥ 1024px)
- Tablet (≥ 768px)
- Mobile (< 768px)

## Deployment

This application is deployed using Vercel. You can deploy your own version by:

1. Fork this repository
2. Connect to Vercel
3. Import your forked repository
4. Deploy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the example API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.