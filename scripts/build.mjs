import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(path.join(output, 'assets'), { recursive: true });

// Publish only the website and image assets, not local logs or source metadata.
for (const file of ['index.html', 'styles.css', 'app.js', 'brand-fonts.css']) {
  await copyFile(path.join(root, file), path.join(output, file));
}
const assets = await readdir(path.join(root, 'assets'), { withFileTypes: true });
let count = 0;
for (const asset of assets) {
  if (asset.isFile() && /\.(png|jpe?g|webp|gif|svg|ico|avif|mp4|woff2?|ttf|txt)$/i.test(asset.name)) {
    await copyFile(path.join(root, 'assets', asset.name), path.join(output, 'assets', asset.name));
    count++;
  }
}
await mkdir(path.join(output, 'demo-2'), { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'interactions.js']) {
  await copyFile(path.join(root, 'demo-2', file), path.join(output, 'demo-2', file));
}
console.log(`Static website ready: dist/ (demo 01 + demo 02, ${count} media assets).`);
