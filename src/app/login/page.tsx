import LoginForm from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
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
