# Todo App – SVVT Project

This is a simple **React-based Todo application** developed for the *Software Verification, Validation, and Testing (SVVT)* course project. It showcases core testing practices using modern JavaScript tools, and it is deployed using GitHub Pages.

 **Live Demo:** [https://ajlaxo.github.io/todo-svvt/](https://ajlaxo.github.io/todo-svvt/)

---

## Project Structure
```
todo-react/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.test.jsx   <-- Unit & UI tests
│   ├── index.jsx
│   └── components/    <-- UI components
├── dist/              <-- Production build
├── package.json
├── vite.config.js
└── README.md
```

---

##  Setup Instructions

```bash
# Clone the repository
git clone https://github.com/ajlaxo/todo-svvt.git
cd todo-svvt

# Install dependencies
npm install

# Run the development server
npm run dev

# Run tests
npx vitest run

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Testing Details

This project includes **unit and UI tests** using **Vitest** and **React Testing Library**.

### Tests Included:
- Adding a new task
- Deleting a task
- Toggling task completion
- Filtering completed tasks

### Run Tests:
```bash
npx vitest run
```

> All tests are located in `src/App.test.jsx`

---

## Tech Stack
- **React** (with Vite)
- **Vitest** (for testing)
- **React Testing Library**
- **GitHub Pages** (for deployment)

---

## Learning Outcomes
This project demonstrates:
- Clean component-based architecture in React
- Proper testing of UI behavior
- Test-driven development practices
- Static analysis using ESLint
- CI-ready project structure

---
The project was originally adapted from:
Original Source: https://github.com/mdn/todo-react

## 📄 License
This project is licensed under the MIT License.
