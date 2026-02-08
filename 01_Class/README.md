# What is JavaScript?

JavaScript is a single-threaded, synchronous language, meaning it executes one command at a time in a specific order.

# What is Execution Context?

Everything in JavaScript happens inside an Execution Context.

# The Execution Context (The Container)

Think of the Execution Context as a big box where your code is evaluated and executed. It has two components:

### Memory Component (Variable Environment):

This is where variables and functions are stored as key-value pairs.

### Code Component (Thread of Execution):

This is where code is executed line-by-line.

# The Call Stack:

To keep track of all these Execution Contexts (Global and Functions), JS uses a Call Stack.

Global Execution Context (GEC): The engine creates this first and pushes it to the bottom of the stack.

Function Execution Context (FEC): Every time a function is called, it is pushed onto the top of the stack.

Pop Off: When a function finishes, it is "popped" off the stack, and the engine goes back to where it left off in the GEC.
