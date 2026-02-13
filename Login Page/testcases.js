import { authenticateUser } from './login.js';

const testCases = [
  ["john@example.com", "john123", true],
  ["alice@gmail.com", "wrongpass", false],
  ["john@", "john123", false],
  ["", "", false],
  ["test.user@company.com", "test@123", true],
  ["BOB@yahoo.com", "bob789", true],
  ["john@example.com", "JOHN123", false],
  ["   alice@gmail.com ", "alice456", true]
];

(async () => {
  for (let i = 0; i < testCases.length; i++) {
    const [email, password, expected] = testCases[i];
    const result = await authenticateUser(email, password);
    const pass = result === expected ? "✅ Pass" : "❌ Fail";
    console.log(`Test ${i + 1}: "${email}" / "${password}" → ${result} (${pass})`);
  }
})();
