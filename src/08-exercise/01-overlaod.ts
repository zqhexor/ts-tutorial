// 重载签名
function greet(person: string): string;
function greet(person: string[]): string[];

// 实现签名
function greet(person: unknown): unknown {
  if (typeof person === "string") {
    return `Hello,${person}`;
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello,${name}`);
  }
  throw new Error("unable to greet");
}

greet("hexor");
greet(["hexor", "lemon"]);
// greet(2);
