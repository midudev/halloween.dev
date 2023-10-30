/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import tailwindPlugin from "https://deno.land/x/fresh_tailwindcss@1.0.0/mod.ts";
import tailwindConfig from "./tailwind.config.ts"; // Your tailwind config

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

await start(manifest, { plugins: [
  tailwindPlugin({
    mode: "development", // or 'production'
    input: "./style.css", // Relative path to the running script
    verbose: true,
    tailwindConfig,
  }),
] });
