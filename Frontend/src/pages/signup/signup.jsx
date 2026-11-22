import "./signup.css"
import InputObraznic from "./input.jsx"

import nameIcon from "./../../assets/person.png"
import lockIcon from "./../../assets/lock.png"
import mailIcon from "./../../assets/mail.png"
import phoneIcon from "./../../assets/phone.png"
import { useState } from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SignUpPage(){

const [remembername, setRemembername] = useState()
const [rememberphone, setRememberphone] = useState()
const [remembermail, setRemembermail] = useState()
const [rememberpassword, setRememberpassword] = useState()

    return(<div className="signup-container">
             <div className="title-wrapper">
                <p>Pregatit sa devii influencer IT? {remembername}</p>
             </div>
             <div className="inputs-wrapper">
                <InputObraznic text={"full name"} image={nameIcon} setThing={setRemembername}/>
                <InputObraznic text={"phone"} image={phoneIcon} setThing={setRememberphone}/>
                <InputObraznic text={"mail"} image={mailIcon} setThing={setRemembermail}/>
                <InputObraznic text={"password"} image={lockIcon} setThing={setRememberpassword}/>
                <InputObraznic text={"confirm password"} image={lockIcon} />
             </div>
             <div className="button-wrapper">
                <button onClick={()=>{console.log(remembername, "  ", rememberphone, "  ", remembermail, "   ", rememberpassword, "(ne preafcaem ca asta dispare/hash)")}}>
                    Sign up
                </button>
             </div>
             <div>
                <Button startIcon={<DeleteIcon />}
                    onClick={() => {
                        alert('clicked');
                    }}
                    >
                    CLEAR FORM
                    </Button>

             </div>

    </div>)
}