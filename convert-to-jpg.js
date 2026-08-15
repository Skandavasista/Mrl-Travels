import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "./src/assets";

const files = fs.readdirSync(assetsDir).filter((f) =>
  f.toLowerCase().endsWith(".png")
);

console.log(`Found ${files.length} PNG files to convert...`);

for (const file of files) {
  const inputPath = path.join(assetsDir, file);
  const outputName = file.replace(/\.png$/i, ".jpg");
  const outputPath = path.join(assetsDir, outputName);

  await sharp(inputPath)
    .flatten({ background: "#ffffff" }) // handles transparency, jpg has no alpha
    .jpeg({ quality: 85 })
    .toFile(outputPath);

  console.log(`Converted: ${file} → ${outputName}`);
}

console.log("Done. Original PNGs are still in place — delete them manually once you confirm everything works.");