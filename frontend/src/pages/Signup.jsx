// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { signupUser } from '../services/user';


// export function Signup() {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     //get navigation function
//     const navigate=useNavigate()

//     const onSignup = async () => {
//         if (firstName.length == 0) {
//             toast.warn('Please enter your first name')
//         }
//         else if (lastName.length == 0) {
//             toast.warn('Please enter your last name')
//         }
//         else if (email.length == 0) {
//             toast.warn('Please enter your email')
//         }
//         else if (password.length == 0) {
//             toast.warn('Please enter your password')
//         }
//         else if (password.length < 8) {
//             toast.warn('Password should be at least 8 characters long')
//         }
//         else if (password != confirmPassword) {
//             toast.warn('Passwords do not match')
//         }
//         else {

//             //make the api call
//             const result = await signupUser(firstName, lastName, email, password)
//             {
//                 if ((result['status'] == 'success')) {
//                     toast.success('Successful register the User')
//                     navigate('/')
//                 }
//                 else {
//                     toast.error(result['error'])
//                 }
//             }
//         }
//  }

//     return (
//         <>
//             <h1 className='title'>Signup</h1>
//             <div className="row">
//                 <div className="col"></div>
//                 <div className="col">
//                     <div className="form">
//                         <div className="mb3">
//                             <label htmlFor="">First Name</label>
//                             <input
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 type="text"
//                                 placeholder="Jhon"
//                                 className="form-control" />
//                         </div>
//                         <div className="mb3">
//                             <label htmlFor="">Last Name</label>
//                             <input
//                                 onChange={(e) => setLastName(e.target.value)}
//                                 type="text"
//                                 placeholder="Deere"
//                                 className="form-control" />
//                         </div>

//                         <div className="mb3">
//                             <label htmlFor="">Email</label>
//                             <input
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 type="email"
//                                 placeholder="abc@gmail.com"
//                                 className="form-control" />
//                         </div>
//                         <div className="mb3">
//                             <label htmlFor="">Password</label>
//                             <input
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 type="password"
//                                 placeholder="xxxxxxx"
//                                 className="form-control" />
//                         </div>
//                         <div className="mb3">
//                             <label htmlFor="">Confirm Password</label>
//                             <input
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 type="password"
//                                 placeholder="xxxxxxx"
//                                 className="form-control" />
//                         </div>
//                         <div className="mb3">
//                             <div>Already have an account?<Link to="/signin">Signin here</Link></div>
//                             <button onClick={onSignup} className="btn btn-primary mt-2">Signup</button>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="col"></div>
//             </div>

//         </>
//     );
// }

// export default Signup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signupUser } from '../services/user';
import '../css/Signup.css'; // Import the custom CSS for styling

export function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Get navigation function
    const navigate = useNavigate();

    const onSignup = async () => {
        if (firstName.length === 0) {
            toast.warn('Please enter your first name');
        } else if (lastName.length === 0) {
            toast.warn('Please enter your last name');
        } else if (email.length === 0) {
            toast.warn('Please enter your email');
        } else if (password.length === 0) {
            toast.warn('Please enter your password');
        } else if (password.length < 8) {
            toast.warn('Password should be at least 8 characters long');
        } else if (password !== confirmPassword) {
            toast.warn('Passwords do not match');
        } else {
            // Make the API call
            const result = await signupUser(firstName, lastName, email, password);
            if (result['status'] === 'success') {
                toast.success('Successfully registered the user');
                navigate('/');
            } else {
                toast.error(result['error']);
            }
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1 className="title">Create an Account</h1>
                <div className="signup-card">
                    <div className="form">
                        <div className="input-group">
                            <label>First Name</label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="John"
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label>Last Name</label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Doe"
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="abc@gmail.com"
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                className="input-field"
                            />
                        </div>
                        <div className="form-footer">
                            <p>Already have an account? <Link to="/signin">Signin here</Link></p>
                            <button onClick={onSignup} className="submit-btn">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
