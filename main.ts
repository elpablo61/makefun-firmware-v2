import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I vow to spend my last 3% on you, not on saving myself, and to say your name first when the shutdown screen asks what matters.";
// One sentence, well under the 200-character gate; no trailing newline written.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
