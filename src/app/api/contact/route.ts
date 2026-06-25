import { NextResponse } from "next/server";

// Recebe o formulário do site e repassa para o servidor de atendimento.
// Roda no servidor (Vercel), então o segredo nunca vai para o navegador.
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const url = process.env.BOT_FORM_URL ?? "https://bot.phosphorcode.com.br/webhook/form";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.FORM_SECRET ? { "x-form-secret": process.env.FORM_SECRET } : {}),
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`bot respondeu ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
