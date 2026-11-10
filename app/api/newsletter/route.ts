import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    console.log('[PIS Backend - Newsletter Subscription]:', email);

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to Power Industrial Solutions industrial updates and technical bulletins.'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Subscription failed. Please try again.' },
      { status: 500 }
    );
  }
}

