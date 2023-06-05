// app/api/route.js 👈🏽
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const CARD_PATH = "public/cards";

export async function POST(request) {
  const filenames = fs.readdirSync(CARD_PATH);
  const lastFile = filenames.slice(-1)[0];
  const noLastFile = lastFile
    .replace("mk-greeting-card-", "")
    .replace(".png", "");
  const curFileNo = Number(noLastFile) + 1;

  const { image } = await request.json();

  const imagePath = path.join(
    process.cwd(),
    CARD_PATH,
    `mk-greeting-card-${curFileNo}.png`
  );
  const buffer = Buffer.from(
    image.replace(/^data:image\/png;base64,/, ""),
    "base64"
  );
  fs.writeFileSync(imagePath, buffer);

  return new NextResponse("Success!", {
    status: 200,
  });
}
