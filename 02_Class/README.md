# What is Hosting?

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. This happens during the Memory Creation Phase of the Execution Context.

### Variables (var):

Only the declaration is hoisted, not the value. It is initialized as undefined.

### Functions:

Function declarations are fully hoisted. You can call them before they appear in your code.

### let & const:

They are hoisted but kept in a Temporal Dead Zone (TDZ). You cannot access them until the engine reaches the line where they are defined.

# Window (The Global Object):

When you run JavaScript in a browser, the JS engine creates a Global Execution Context. Along with it, it creates two things automatically:

A Global Object (which is called `window` & `this` in browsers ).

# Undefined:

Undefined is a special keyword (and a primitive type) in JavaScript. It acts as a placeholder.

### When it happens:

During the Memory Creation Phase, the JS engine scans the code and allocates memory to variables. Since it doesn't know the actual value yet, it assigns undefined to them

# Not Defined

Not Defined is a Runtime Error (ReferenceError).

### When it happens:

During the Code Execution Phase, if you try to access a variable that was never declared (and therefore has no space allocated in the Memory Phase).
