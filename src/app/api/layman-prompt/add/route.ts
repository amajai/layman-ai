import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import authOptions from '@/lib/authOptions';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { user_input, output } = await req.json();

  if (!user_input || !output) {
    console.log(user_input, output);
    
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    await connectMongoDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const newPrompt = { user_input, output };
    user.prompts.unshift(newPrompt);
    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
  }
}
