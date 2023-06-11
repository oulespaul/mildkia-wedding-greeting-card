// app/api/route.js 👈🏽
import fs from "fs";
import { NextResponse } from "next/server";
import { uploadFile } from "@uploadcare/upload-client";

const CARD_PATH = "public/cards";

export async function POST(request) {
  const { image } = await request.json();

  const buffer = Buffer.from(
    image.replace(/^data:image\/png;base64,/, ""),
    "base64"
  );

  const result = await uploadFile(buffer, {
    publicKey: "d301acb7618fdebaac59",
    store: "auto",
    fileName: 'mk-card.png',
    metadata: {
      subsystem: "js-client",
    },
  });

  return new NextResponse("Success!", {
    status: 200,
    success: result.isStored,
  });
}

export async function GET(request) {
  const filenames = fs.readdirSync(CARD_PATH);

  return new NextResponse(filenames, {
    status: 200,
  });
}
