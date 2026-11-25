import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked for a raise and got a pizza party, which is now my salary in slices.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters; gate requires 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Validated ${LINE.length} characters (gate 1-200 OK); wrote /output/entry.txt`);
