import { NextResponse } from "next/server";
import { getClient, modelName, systemPrompt } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "لا توجد رسائل" }, { status: 400 });
    }

    // ناخذ آخر رسائل بس حتى ما يطول الطلب
    const clean: { role: "user" | "assistant"; content: string }[] = [];
    for (const m of messages.slice(-10)) {
      if ((m.role === "user" || m.role === "assistant") && m.content) {
        clean.push({
          role: m.role,
          content: String(m.content).slice(0, 1500),
        });
      }
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "حط GROQ_API_KEY بملف .env.local" },
        { status: 503 },
      );
    }

    const groq = getClient();
    const result = await groq.chat.completions.create({
      model: modelName,
      temperature: 0.45,
      max_completion_tokens: 220,
      messages: [
        { role: "system", content: systemPrompt() },
        ...clean,
      ],
    });

    const reply =
      result.choices[0]?.message?.content?.trim() || "ما قدرت أرد حالياً";

    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "صار خطأ بالمساعد" }, { status: 500 });
  }
}
