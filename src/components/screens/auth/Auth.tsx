'use client'

import Field from "@/components/ui/field/Field";
import {AtSign, KeyRound} from "lucide-react";
import {Button} from "@/components/ui/button/Button";
import {FormEvent} from "react";
import {signIn} from "next-auth/react";

interface IAuth {
    type?: 'Login' | 'Register'
}

export function Auth({type}: IAuth) {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: true,
        })
    }

    return <div className='flex w-screen h-full'>
        <form onSubmit={handleSubmit} className='m-auto block w-96 border border-border p-layout'>
            <h1 className='text-center mb-10'>{type}</h1>
            <Field name='email' placeholder='Enter email:' type='email' Icon={AtSign}/>
            <Field name='password' placeholder='Enter password:' type='password' Icon={KeyRound}/>
            <div className='text-center'><Button type='submit'>{type}</Button></div>
        </form>
    </div>
}