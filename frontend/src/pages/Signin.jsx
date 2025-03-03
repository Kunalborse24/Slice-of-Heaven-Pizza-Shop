// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { signinUser } from '../services/user';
// export function Signin() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //get navigation function
//   const navigate = useNavigate();

//   const onSignin = async () => {
//     if (email.length ==0) {
//       toast.warn("Please enter your email");
//     } else if (password.length === 0) {
//       toast.warn("Please enter your password");
//     } else {
//       const result = await signinUser(email, password);
//       {
//          if (result['status'] === 'success') {
//           //cache the token
//             const token=result['data']['token']
//             sessionStorage['token']=token 

//           toast.success("Successful login");
//           navigate("/home");
//         } else {
//              toast.error(result['error'])
//          }
//       }
//     }
//   };

//   return (
//     <>
//       <h1 className="title">Signin</h1>
//       <div className="row">
//         <div className="col"></div>
//         <div className="col">
//           <div className="form">
//             <div className="mb3">
//               <label htmlFor="">Email</label>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="abc@gmail.com"
//                 className="form-control"
//               />
//             </div>
//             <div className="mb3">
//               <label htmlFor="">Password</label>
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="xxxxxxx"
//                 className="form-control"
//               />
//             </div>
//             <div className="mb3">
//               <div>
//                 Don't have an account?<Link to="/signup">Signup here</Link>
//               </div>
//               <button onClick={onSignin} className="btn btn-primary mt-2">Signin</button>
//             </div>
//           </div>
//         </div>
//         <div className="col"></div>
//       </div>
//     </>
//   );
// }

// export default Signin;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signinUser } from '../services/user';
import '../css/Signin.css'; 



export function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //get navigation function
  const navigate = useNavigate();

  const onSignin = async () => {
    if (email.length === 0) {
      toast.warn("Please enter your email");
    } else if (password.length === 0) {
      toast.warn("Please enter your password");
    } else {
      const result = await signinUser(email, password);
      if (result['status'] === 'success') {
        // Cache the token
        const token = result['data']['token'];
        sessionStorage['token'] = token;

        toast.success("Successful login");
        navigate("/");
      } else {
        toast.error(result['error']);
      }
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1 className="title">Welcome Back!</h1>
        <div className="signin-card">
          <div className="signin-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="xxxxxxx"
                className="input-field"
              />
            </div>
            <div className="signin-footer">
              <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
              <button onClick={onSignin} className="signin-btn">Signin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
