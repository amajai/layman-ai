import RegisterForm from '@/components/RegisterForm'
import authOptions from '@/lib/authOptions';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

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
