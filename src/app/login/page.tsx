import LoginForm from '@/components/LoginForm';
import authOptions from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/app");
  return (
    <div className='h-screen-app flex items-center justify-center content-center'>
        <LoginForm/>
    </div>
  );
}

export default LoginPage;
