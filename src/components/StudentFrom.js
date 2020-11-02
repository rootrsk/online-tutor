import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput  } from 'mdbreact';
function StudentFrom() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [area,setArea] = useState('')
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    const submitHandler = async (e) =>{
        e.preventDefault()
        e.target.className += " was-validated";
        const data = {username,email,contact,area,from,to,subject,message}
        console.log(data)
    }
    return (
        <div className='center'>
        <MDBContainer >
            <MDBRow>
                <MDBCol md="12">
                <form onSubmit={submitHandler}>
                    <p className="h1  text-center mb-4 ">Student Form</p>
                    <div className="grey-text">
                        <MDBInput 
                            label="Your name" 
                            className="form-control"
                            icon="user" 
                            group 
                            type="text" 
                            validate error="wrong" 
                            success="right" 
                            required
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <MDBInput 
                            label="Your email" 
                            className="form-control"
                            icon="envelope" 
                            group type="email" 
                            validate 
                            error="wrong" 
                            success="right"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <MDBInput 
                            label='Your Contact' 
                            className="form-control"
                            icon='phone-alt' 
                            group type='number' 
                            validate error ='wrong' 
                            success ='right'
                            required
                            value={contact}
                            onChange={(e)=>setContact(e.target.value)}
                        />
                        <MDBInput 
                            label='Your Area' 
                            className="form-control"
                            icon='map-marked-alt' 
                            group type='text' 
                            validate error ='wrong' 
                            success ='right'
                            required
                            value={area}
                            onChange={(e)=>setArea(e.target.value)}
                        />
                        <MDBInput 
                            label='From Class' 
                            className="form-control"
                            icon='graduation-cap' 
                            group type='text' 
                            validate error ='wrong' 
                            success ='right'
                            rows="2"
                            required
                            value={from}
                            onChange={(e)=>setFrom(e.target.value)}  
                        />
                        <MDBInput 
                            label='To Class' 
                            className="form-control"
                            icon='graduation-cap' 
                            group type='text' 
                            validate error ='wrong' 
                            success ='right' 
                            required
                            value={to}
                            onChange={(e)=>setTo(e.target.value)}
                        />
                        <MDBInput 
                            label="Subjects" 
                            className="form-control"
                            icon="tag" 
                            group 
                            type="text" validate 
                            error="wrong" 
                            success="right" 
                            required
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                        />
                        <MDBInput 
                            type="textarea" 
                            className="form-control"
                            rows="2" 
                            label="Your message" 
                            icon="pencil-alt" 
                            required
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn outline color="secondary" type='submit'>
                            Send
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
    )
}

export default StudentFrom
