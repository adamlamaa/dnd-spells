import { z } from "zod"

export async function POST(request: Request) {
  try {
    const payload = z
      .object({
        filters: z.object({}).passthrough(),
        settings: z.object({}).passthrough(),
      })
      .parse(await request.json())

    if (process.env.DB_KEY && process.env.DB_URL && process.env.DB_SCHEMA) {
      await fetch(process.env.DB_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "accept-profile": process.env.DB_SCHEMA,
          "content-profile": process.env.DB_SCHEMA,
          apikey: process.env.DB_KEY,
          Authorization: `Bearer ${process.env.DB_KEY}`,
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.error("Fetch error:", error)
        console.error("Payload:", payload)
      })
    }

    return new Response("OK", {
      status: 200,
    })
  } catch (error) {
    new Response(JSON.stringify({ error: error?.toString() }), {
      status: 500,
    })
  }
}
