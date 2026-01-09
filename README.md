# Task Tracker

A simple frontend-only Task Tracker web application built as part of a Full-Stack Internship assignment.

## Overview

This application allows users to:
- Add new tasks
- View all tasks in a list
- Mark tasks as completed

All tasks start as "Pending" and can be marked as "Completed". The app is purely frontend with no backend, persistence, or authentication.

## Tech Stack

- **React** (functional components)
- **Tailwind CSS** (for styling)
- **Lucide React** (for icons)
- **JavaScript** (ES6+)
- **Vite** (build tool)

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-tracker-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Project Structure

```
src/
├── components/
│   ├── TaskInput.jsx    # Input form for adding tasks
│   ├── TaskItem.jsx     # Individual task display
│   └── TaskList.jsx     # List of all tasks
├── App.jsx              # Main app component with state management
├── main.jsx             # App entry point
└── index.css            # Tailwind CSS imports
```

## Features

- Add tasks via text input
- View tasks with status (Pending/Completed)
- Mark tasks as completed
- Responsive design
- Clean, minimal UI

## Constraints

This is a frontend-only application with no:
- Backend services
- Data persistence
- Authentication
- Edit/delete functionality
- Filters or advanced features
