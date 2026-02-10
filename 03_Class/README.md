# What is lexical envirnment?

A Lexical Environment is a data structure that holds identifier-variable mapping. (Identifier refers to the name of variables/functions, and the mapping is the actual value). Every time the JavaScript engine creates an execution context (like when a function starts), a new Lexical Environment is created.

# What is scrope chaning?

When you try to use a variable, JavaScript first looks in the current Lexical Environment. If it doesn’t find it there, it uses that "Reference to the Outer Environment" to jump up to the parent’s Lexical Environment. This continues until it either finds the variable or reaches the Global Scope.

# What is closure?

A Closure is one of the most powerful features of JavaScript. It occurs when a function is defined inside another function, and the inner function "remembers" the variables of its outer (parent) function, even after the parent function has finished executing.
