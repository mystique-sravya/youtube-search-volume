# Keyword Search Volume Feature using YouTube Api

This project implements a keyword search volume feature using HTML, CSS, and JavaScript. Users can input a keyword, and the application will display an estimated search volume for that keyword.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Learnings](#learnings)
- [Limitations](#limitations)
- [Contributing](#contributing)

## Getting Started

1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.

## Usage

1. Enter a keyword in the input field.
2. Click the "Search" button.
3. The application will display an estimated search volume for the entered keyword.

## Learnings 
### CSS
#### Transitions

Transitions are used to create smooth and gradual changes between different states of an element. In this project, transitions are applied to elements like buttons and input fields to provide visual feedback when hovering or interacting with them.

#### Animations

Animations are used to create dynamic and interactive effects in the user interface. In this project, animations are used for fading in elements (`fadeInUp`), creating a wave-like effect on headings (`wave`), and rotating background shapes (`rotateShape1` and `rotateShape2`).

#### @keyframes Rule

The `@keyframes` rule is used to define animations and their intermediate states. It allows specifying how an element should change from one set of CSS styles to another over a specified duration. The project uses `@keyframes` to define the rotation of background shapes and the spiral background effect.

### JavaScript
#### JavaScript Interactivity

JavaScript is used to provide interactivity to the application. The project demonstrates how to retrieve user input from the input field, handle button clicks, fetch data from public APIs (such as YouTube API), and display the results dynamically on the webpage.

#### Asynchronous Programming

Fetching data from APIs is an asynchronous operation, and JavaScript's `async` and `await` keywords are used to handle asynchronous code execution. This ensures that the application remains responsive while waiting for data to be fetched.

#### Error Handling

The project showcases error handling techniques when fetching data from APIs. It handles potential errors, such as network issues or invalid responses, and provides appropriate feedback to the user.

## Limitations

The project has the following limitations:

- **Search Volume Estimation**: The project uses simplified methods to estimate search volume based on public APIs. This might result in inaccurate or identical search volume values for different keywords.

- **Public APIs**: Public APIs (such as YouTube API) might have limitations, including rate limits and data sampling. This can affect the accuracy and reliability of search volume data.

- **Data Source Variability**: Accurate search volume data is difficult to obtain due to factors like privacy, data sampling, and algorithmic estimation. Commercial tools and APIs provide approximate estimates, not precise values.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, please submit a pull request.

