'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInFaliure, signInStart, signInSuccess } from '@/redux/slice/authSlice'
import { useCookies } from "react-cookie"
import { toast } from 'react-toastify'

const page = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['auth_token']);
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const setVisibleNumber = () => {
        setVisible(!visible)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signInStart())
        axios.post("http://localhost:4000/api/auth/signin", {
            email,
            number,
            password
        }).then((data) => {
            toast.success('Sign in Successfull!');
            setCookie("auth_token", data.data.token)
            dispatch(signInSuccess(data.data.user))
            router.push("/")
        }).catch((err) => {
            toast.error(err.response.data.message);
            dispatch(signInFaliure(err.response.data.message))
        })
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                {visible ?
                    <input onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Enter your phone' /> :
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your email' />}
                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter your password' />
                <button>Sign in</button>
            </form>
            <p>Signin with <span onClick={setVisibleNumber} className='cursor-pointer'>number</span></p>
        </div>
    )
}

export default page
