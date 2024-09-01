'use client'
import { useState } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [country_code, setCountryCode] = useState("")
    const [visible, setVisible] = useState(false)

    const sumbitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/api/auth/signup", {
            username,
            email,
            number,
            password,
            country_code: "+92"
        }).then((data) => {
            toast.success(data.data.message)
            router.push("/signin")
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    const changeVisiblity = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <form onSubmit={(e) => sumbitHandler(e)}>
                <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <select onChange={(e) => setCountryCode(e.target.value)}>
                    <option selected value="+92">+92</option>
                </select>
                <input type="number" maxLength={10} placeholder='Enter your number' onChange={(e) => setNumber(e.target.value)} />
                <input type={visible ? "text" : "password"} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                {visible ? <RemoveRedEyeIcon onClick={changeVisiblity} /> : <VisibilityOffIcon onClick={changeVisiblity} />}
                <button>Create your account</button>
            </form>
        </div>
    )
}

export default page
