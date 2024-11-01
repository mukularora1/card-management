# Card management

This project is a Vue 3 application built using Vite. It utilizes several key libraries including Vuex for state management, Vuetify for UI components, Vue Router for routing, and IMask for input masking. The application includes various features such as dynamic breadcrumb navigation, a responsive layout, and a modal for adding new card information.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mukularora1/card-management.git
   cd card-management
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

## Features

- **Vue Router**: Set up for easy navigation with links configured as empty pages, except for the Transaction page.
- **Dynamic Breadcrumb Navigation**: Breadcrumbs show the navigation hierarchy and are dynamically clickable for easy traversal.
- **Vuetify**: Used for UI components to create a modern and responsive interface.
- **Modal for New Card Entry**: Modal form for adding a new card, including fields for card number, CVV, and expiration date, with input masking via IMask.
- **Parent-Child Communication**: Props and slots for passing data from parent to child components, and `emit` for child-to-parent communication.
- **Responsive Design**: Built with SCSS and media queries to ensure usability across devices.

## Dependencies

This project uses the following main dependencies:

- **Vue 3**: Reactive front-end framework.
- **Vite**: Build tool optimized for Vue 3 applications.
- **Vuex**: State management for handling and centralizing application state.
- **Vue Router**: Router for managing navigation.
- **Vuetify**: UI library for styling and components.
- **IMask**: Library for input masking (used in the card modal).

## Usage

### Navigation

The Sidebar contains navigation links to various pages, including an active Transaction page. All other links are placeholders for additional features.

- **Transaction Page**: Click the "Transaction" link in the sidebar to navigate here.

### Breadcrumb

The breadcrumb component dynamically updates to show the current navigation path. All items are clickable, allowing quick navigation through the hierarchy.

### Adding a New Card

To add a new card:

1. Click on the "Add Card" button to open the modal.
2. Enter card details such as card number, CVV, and expiration date (fields are masked with IMask for better input formatting).
3. Submit to save the new card information.

### Responsive Design

The application is responsive and adjusts layouts based on screen size using SCSS media queries.

## Customization

- **Pages**: You can find pages in `src/pages` .
- **Components**: New components can be created and added in the `src/components` directory.
- **State Management**: Vuex is used for state management. New state modules can be added in `src/store`.

## Author

This project was created by Mukul arora.
Feel free to reach out with questions or suggestions at mukularora7737@gmail.com.

## License

This project is licensed under the MIT License.

---

Feel free to modify the README to suit any specific requirements or project details.
