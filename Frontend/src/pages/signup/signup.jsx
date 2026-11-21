import "./signup.css"
import InputObraznic from "./input.jsx"

import nameIcon from "./../../assets/person.png"
import lockIcon from "./../../assets/lock.png"
import mailIcon from "./../../assets/mail.png"
import phoneIcon from "./../../assets/phone.png"
import { useState } from "react"

export default function SignUpPage(){

const [remembername, setRemembername] = useState()

    return(<div className="signup-container">
             <div className="title-wrapper">
                <p>Pregatit sa devii influencer IT? {remembername}</p>
             </div>
             <div className="inputs-wrapper">
                <InputObraznic text={"full name"} image={nameIcon} setThing={setRemembername}/>
                <InputObraznic text={"phone"} image={phoneIcon} />
                <InputObraznic text={"mail"} image={mailIcon} />
                <InputObraznic text={"password"} image={lockIcon} />
                <InputObraznic text={"confirm password"} image={lockIcon} />
             </div>
             <div className="button-wrapper">
                <button onClick={()=>{console.log(remembername)}}>
                    Sign up
                </button>
             </div>

    </div>)
}