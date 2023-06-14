import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import { LoginContext } from "../ContextProvider/Context";
import "../styles/mix.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [spiner,setSpiner] = useState(false);
    // const { logindata, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();



    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpiner(true)
            const data = {
                email: email
            }

            const response = await sentOtpFunction(data);

            if (response.status === 200) {
                setSpiner(false)
                navigate("/user/otp",{state:email})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
            {/* <section>
                <div className="form_data">
                    <div className="form_heading">
                    <img src="https://itnowtechnologies.us/wp-content/uploads/2023/03/cropped-ITNOW-Technologies-Logo.png" style={{width:200}} alt="" />
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p><NavLink to="/adminLogin">Admin Login</NavLink> </p>
                    </form>
                </div>
                
                <ToastContainer />
            </section> */}
             <div class="login-page customerlogin">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="bg-white shadow logincontainer">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                {/* <section> */}
                <div className="form_data">
                    <div className="form_heading">
                    <img src="https://itnowtechnologies.us/wp-content/uploads/2023/03/cropped-ITNOW-Technologies-Logo.png" style={{width:200}} alt="" />
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p><NavLink to="/adminLogin">Admin Login</NavLink> </p>
                    </form>
                </div>
                
                <ToastContainer />
            {/* </section> */}
                                {/* <div class="form-left h-100 py-5 px-5">
                                    <form action="" class="row g-4">
                                            <div class="col-12">
                                                <label>Username<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Username"/>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="text" class="form-control" placeholder="Enter Password"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <a href="#" class="float-end text-primary">Forgot Password?</a>
                                            </div>

                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary px-4 float-end mt-4">login</button>
                                            </div>
                                    </form>
                                </div> */}
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100 text-white text-center pt-5 loginleft">
                                    <div class="leftText">Hey there,<br/>You have had fun so far. <br/>Let’s start the Sales Engine now?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login