import { Resend } from "resend";
import * as React from "react";
import Email from "@/emails";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Made With Make <wambui@madewithmake.com>",
      to: [email], // Send to the user's email
      subject: "Your Automation Template is Here! 🚀",
      react: Email({ name }) as React.ReactElement,
      text: `Welcome, ${name}!`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
