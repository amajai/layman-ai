"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Input } from "@nextui-org/react";
import axios from 'axios';
import Alert from './Alert';
import { useRouter } from 'next/navigation';

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('')
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

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    setLoading(true)
    
    try {
      const res = await axios.post(
        '/api/register',
        JSON.stringify({
          name,
          email,
          password
        }),
        {
          headers: {
            'Content-Type': `application/json`
          }
        }
      )
      if (res.status == 201) {
        const form = e.target;
        form.reset()
        router.push('/login')
      }
    } catch (error) {
      setError(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col max-w-md lg:w-4/6 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      {error && <Alert message={error} setError={setError} color={'danger'} />}

      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm dark:text-gray-600">Register for a new account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <Input
            isRequired
            size='lg'
            className='text-white' type="text" variant={'faded'}
            label="Full Name"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </Button>
          <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
            <Link href={'/login'} className="hover:underline text-primary">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
