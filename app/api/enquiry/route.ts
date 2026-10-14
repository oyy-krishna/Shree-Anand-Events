import { NextResponse } from 'next/server'

const REQUIRED_FIELDS = ['name', 'phone', 'eventType', 'eventDate', 'guestCount', 'message']

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { website, ...payload } = body ?? {}

    if (website) {
      return NextResponse.json(
        { success: false, message: 'Spam protection blocked this submission.' },
        { status: 400 },
      )
    }

    for (const key of REQUIRED_FIELDS) {
      if (!payload[key] || !String(payload[key]).trim()) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${key}.` },
          { status: 400 },
        )
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const contactEmailTo = process.env.CONTACT_EMAIL_TO
    const contactEmailFrom = process.env.CONTACT_EMAIL_FROM

    if (apiKey && contactEmailTo && contactEmailFrom) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: contactEmailFrom,
          to: [contactEmailTo],
          subject: `New enquiry from ${payload.name}`,
          reply_to: payload.phone,
          html: `
            <h2>New enquiry</h2>
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Phone:</strong> ${payload.phone}</p>
            <p><strong>Event type:</strong> ${payload.eventType}</p>
            <p><strong>Event date:</strong> ${payload.eventDate}</p>
            <p><strong>Guest count:</strong> ${payload.guestCount}</p>
            <p><strong>Message:</strong> ${payload.message}</p>
          `,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        return NextResponse.json(
          { success: false, message: `Email delivery failed: ${errorText}` },
          { status: 500 },
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Your enquiry was sent successfully. We will contact you soon.',
      })
    }

    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919818523902'}?text=${encodeURIComponent(
      `Hello Shree Anand, I would like to enquire about a ${payload.eventType} for ${payload.eventDate}. My name is ${payload.name}. Phone: ${payload.phone}. Guest count: ${payload.guestCount}. Message: ${payload.message}`,
    )}`
    const mailtoUrl = `mailto:${process.env.CONTACT_EMAIL_TO ?? 'Shreeanand.caterers7@gmail.com'}?subject=${encodeURIComponent(
      `Enquiry for ${payload.eventType}`,
    )}&body=${encodeURIComponent(
      `Name: ${payload.name}\nPhone: ${payload.phone}\nEvent type: ${payload.eventType}\nEvent date: ${payload.eventDate}\nGuest count: ${payload.guestCount}\n\nMessage:\n${payload.message}`,
    )}`

    return NextResponse.json({
      success: true,
      message: 'No email service was configured, so we have prepared a direct WhatsApp and email fallback for you.',
      fallback: {
        whatsapp: whatsappUrl,
        mailto: mailtoUrl,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred while processing the enquiry.',
      },
      { status: 500 },
    )
  }
}
