"use client"

import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Alert from './Alert'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 5000);
  }
  , [error, setError])
  
  const router = useRouter();
  
  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (res.error) {
        setError("Invalid Credentials");
        setLoading(false)
        return;
      }
      router.replace('/app')
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  return (
    <div className="flex flex-col max-w-md lg:w-4/6 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      {error && <Alert message={error} setError={setError} color={'danger'} />}

      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <Input
            isRequired
            size='lg'
            className='text-white'
            type="email"
            variant={'faded'}
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isRequired
            size='lg'
            className='text-white'
            type="password"
            variant={'faded'}
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Button isLoading={loading} className='my-3' type="submit" size="lg" fullWidth={true} color="primary">
            Sign in
          </Button>
          <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
            <Link href={'/register'} className="hover:underline text-primary">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
