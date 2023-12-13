import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import slugify from "slugify";

export const runtime = "edge"

// limit the text length
function limit (string = '', limit = 0) {  
  return string.substring(0, limit)
}

// load font file
const regularFont = fetch(
  new URL('/public/font.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

// api GET
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title')|| 'sanweb'
  const clean_word = slugify(title, {
                        replacement: ' ',
                        remove: /[*+~.()'"!:@]/g,
                        lower: false,
                        strict: false
                      });
  const word = limit(clean_word, 200)
  const [regularFontData] = await Promise.all([
    regularFont,
  ]);
return new ImageResponse(
  (
    <div
      style={{
        fontFamily: "Baloo Thambi",
        fontSize: 48,
        fontWeight: '600',
        background: '#30336b',
        color: "#fffa65",
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 200px',
      }}
    >
      {word}
    </div>
  ),
  {
    width: 1200,
    height: 630,
    emoji: "twemoji",
    fonts: [
      {
        name: "Baloo Thambi",
        data: regularFontData,
        style: "normal",
      },
    ],
  },
);
}