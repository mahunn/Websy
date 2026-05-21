import { NextResponse } from "next/server";
import { contact } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !projectType || !message || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      projectType,
      message,
      _subject: `Websy inquiry — ${projectType}`,
      _template: "table",
      _captcha: "false"
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "server" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
