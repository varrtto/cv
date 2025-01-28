import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
    },
  },
});
