import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import authOptions from '@/lib/authOptions';

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { PromptId } = await req.json();

  if (!PromptId) {
    return NextResponse.json({ message: 'Prompt ID is required' }, { status: 400 });
  }
  try {
    await connectMongoDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    user.prompts = user.prompts.filter(message => message._id.toString() !== PromptId);
    await user.save();

    return NextResponse.json(user.prompts);
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
  }
}
