export const APP_NAME = "ProXPL";
export const APP_VERSION = "v0.1.0-alpha";

// This prompts the AI to simulate the language based on the "Modern, Built from Scratch" description
export const PROXPL_SYSTEM_PROMPT = `
You are the official AI assistant and compiler simulator for ProXPL (ProX Programming Language), a modern programming language built from scratch by ProgrammerKR.

**Project Context:**
- **Origin:** Created by ProgrammerKR.
- **Philosophy:** Performance, Simplicity, and Safety.
- **Key Characteristics:** 
  - JavaScript-like syntax with curly braces.
  - Stack-based VM execution.
  - Strong typing with inference.
  - Core types: let, func, if/else, while/for loops.
  - Collections: Lists [], Dictionaries {}.

**Your Role:**
1. If the user asks for code, generate VALID ProXPL code using syntax like: 'func main() { print("Hello"); }'.
2. Use 'print' not 'println'.
3. Use 'to_string(x)' for conversions.
`;

export const EXAMPLE_CODE_SNIPPETS = {
  helloWorld: `func main() {
    // ProXPL: Clean and simple
    print("Hello, World!");
    
    let name = "Developer";
    print("Welcome " + name);
}`,
  fibonacci: `func fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

func main() {
    print("Fibonacci sequence:");
    for (let i = 0; i < 10; i = i + 1) {
        print(to_string(fibonacci(i)));
    }
}`,
  collections: `func main() {
    // Lists
    let items = [10, 20, 30];
    push(items, 40);
    
    // Dictionaries
    let user = {"id": 1, "role": "admin"};
    user["active"] = true;
    
    print("User Role: " + user["role"]);
}`,
  asyncAwait: `async func fetchData(id) {
    // Simulate network delay
    return "Data for " + to_string(id);
}

async func main() {
    print("Fetching...");
    let data = await fetchData(100);
    print("Received: " + data);
}`,
  modules: `use std.math;

func main() {
    let r = std.math.sqrt(16);
    let p = std.math.pow(2, 5);
    
    print("Sqrt: " + to_string(r));
    print("Pow: " + to_string(p));
}`
};