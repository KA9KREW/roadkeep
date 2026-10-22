/**
 * The match requests the ground photos, the log pile, and its colormap.
 * Other catalogue files stay in public/ for the model preview, and are
 * removed from the portal dist so they are not part of the upload.
 */
import { readdirSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const keep = new Set([
  "models/textures/dirt.jpg",
  "models/textures/gravel_road.jpg",
  "models/textures/leafy_grass.jpg",
  "models/textures/stony_dirt_path.jpg",
  "models/textures/withered_grass.jpg",
  "models/kenney/nature-log_stack.glb",
  "models/kenney/Textures/colormap.png",
  "models/kenney/CREDITS.txt",
]);

const dist = join(process.cwd(), "dist");
const root = join(dist, "models");

function walk(dir) {
  let names;
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    const rel = relative(dist, full).split("\\").join("/");
    if (!keep.has(rel)) rmSync(full);
  }
}

function prune(dir) {
  let names;
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) prune(full);
  }
  if (dir !== root && readdirSync(dir).length === 0) rmSync(dir, { recursive: true });
}

walk(root);
prune(root);
