import RegisterForm from '@/components/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const RegisterPage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/app");
  return (
    <div className='h-screen-app flex items-center justify-center content-center'>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage
