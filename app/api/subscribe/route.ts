import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// In production, you would use Resend Contacts API or integrate with a proper email marketing service
// For now, we'll just send a notification email

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification to admin about new subscriber
    const { error: notifyError } = await resend.emails.send({
      from: 'WaveArc Newsletter <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mete@wavearc.co',
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (notifyError) {
      console.error('Notify error:', notifyError);
    }

    // Send welcome email to subscriber
    const { error: welcomeError } = await resend.emails.send({
      from: 'WaveArc <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to WaveArc Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Welcome to WaveArc Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll receive updates about:</p>
          <ul>
            <li>Latest technology trends</li>
            <li>Our new projects and case studies</li>
            <li>Software development tips and insights</li>
            <li>Company news and updates</li>
          </ul>
          <p>We're excited to have you with us!</p>
          <p>Best regards,<br/>WaveArc Team</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #666;">
            WaveArc - Think Different, Build Better<br/>
            mete@wavearc.co
          </p>
        </div>
      `,
    });

    if (welcomeError) {
      console.error('Welcome email error:', welcomeError);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
