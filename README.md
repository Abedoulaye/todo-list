# 📝 Modern Todo List Application

A sleek, feature-rich todo list application built with vanilla JavaScript, HTML5, and modern CSS. Features a stunning glassmorphism design with smooth animations and persistent local storage.

## ✨ Features

- **🎨 Modern Glassmorphism UI** - Beautiful gradient backgrounds with frosted glass effects
- **💾 Persistent Storage** - Tasks automatically save to localStorage
- **✏️ Full CRUD Operations** - Create, Read, Update, and Delete tasks
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🎭 Smooth Animations** - Elegant transitions and micro-interactions
- **🛡️ Input Validation** - Prevents empty tasks and whitespace-only entries
- **💬 Smart Dialog** - Warns about unsaved changes before closing
- **🔒 XSS Protection** - Sanitizes user input by removing special characters

## 🚀 Demo

Add tasks with titles, dates, and descriptions. Edit existing tasks or delete them with a single click. All data persists even after closing the browser!

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with `<dialog>` element
- **CSS3** - Advanced styling with backdrop filters, animations, custom properties
- **Vanilla JavaScript** - No frameworks, pure ES6+, Local Storage API

## 📁 Project Structure
todo-list/
│
├── index.html # Main HTML structure
├── styles.css # All styling (glassmorphism, animations)
├── script.js # Application logic & interactivity
└── README.md # Project documentation


## 🎯 Key Features Explained

### Task Management
- **Add tasks** with title (required), date, and description
- **Edit tasks** with pre-filled form fields
- **Delete tasks** with instant UI updates
- **Unique IDs** generated from title and timestamp

### Data Persistence
Tasks are stored in localStorage as JSON and retrieved on page load:

```javascript
// Save tasks
localStorage.setItem("data", JSON.stringify(taskData));

// Load tasks
const taskData = JSON.parse(localStorage.getItem("data")) || [];
Smart Form Handling
Form toggles visibility with slide animation

Discard dialog appears when closing with unsaved changes

Form resets after submission or cancellation

Button text dynamically changes ("Add Task" ↔ "Update Task")

Input Sanitization
javascript
function removeSpecialCharacters(input) {
  return input.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}
Removes potentially harmful characters while keeping alphanumeric, hyphens, and spaces.

🎨 Design System
Color Palette
Variable	Color	Usage
--accent	#16c79a	Highlights, labels
--yellow	#e94560	Primary buttons, scrollbar
--card-bg	#16213e	Container backgrounds
--white	#fff	Text color
Typography
Font Family: Segoe UI, system-ui, sans-serif stack

Heading: 2.8rem, bold, gradient text effect

Buttons: Uppercase, letter-spaced, semi-bold

🔧 Setup & Installation
Clone the repository

bash
git clone <your-repository-url>
cd todo-list
Open in browser

bash
# Simply open index.html
open index.html
# Or use a local server
npx serve .
No build tools, dependencies, or configuration needed!

💻 Usage
Click "Add New Task" to open the form

Enter a title (required), optional date and description

Click "Add Task" to save

Click any task to edit or delete it

Use the discard dialog to safely close the form

🎯 Browser Support
Chrome/Edge 90+

Firefox 88+

Safari 14+

Opera 76+

The <dialog> element requires modern browser support.

📚 Code Features
CSS Architecture
Josh Comeau's CSS Reset for consistent cross-browser styling

CSS custom properties for maintainable theming

Prefers-reduced-motion media query for accessibility

Mobile-first responsive design

JavaScript Best Practices
Event delegation and proper listener management

Functional programming with array methods

Template literals for dynamic HTML generation

Modular functions with single responsibilities

🚧 Future Enhancements
Drag-and-drop task reordering

Task categories and filtering

Dark/Light theme toggle

Due date notifications

Task completion checkboxes

Export/Import tasks

Keyboard shortcuts

🤝 Contributing
Contributions are welcome! Feel free to:

Fork the project

Create a feature branch

Submit a pull request

Please maintain the existing code style and add comments where necessary.

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Josh Comeau for the CSS Reset methodology

FreeCodeCamp and the Odin Project for inspiration

Modern CSS techniques from the web development community

<div align="center"> <sub>Built with ❤️ and vanilla JavaScript</sub> </div> ```