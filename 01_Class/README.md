# JavaScript Fundamentals

## 1. What is JavaScript?

JavaScript is a **single-threaded synchronous** language. This means JS can only execute one command at a time in a specific order.

## 2. How JavaScript Works?

Everything in JavaScript happens inside an **Execution Context**.
Imagine JS as a big container where the code is parsed and executed. To run any piece of code, the JS Engine creates an environment that handles the transformation of your code into something the computer can understand.

---

## 3. What is the Execution Context?

Whenever you run a JS program, a **Global Execution Context (GEC)** is created. It consists of two main components:

### A. Memory Component (Variable Environment)

This is where variables and functions are stored as **key-value pairs**.

- Even before a single line of code is executed, JS scans the code and allocates memory.
- Variables are initially stored as `undefined`.
- Functions are stored with their entire code body.

### B. Code Component (Thread of Execution)

This is the place where code is executed **line by line**. This is where values are assigned to variables and functions are actually called.

---

## The 2-Phase Process

Every execution happens in two distinct phases:

1. **Memory Creation Phase:** The engine goes through the code and "hoists" variables and functions.
2. **Code Execution Phase:** The engine runs the code line by line, updating memory values and executing logic.
