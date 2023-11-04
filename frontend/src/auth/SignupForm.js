import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!signup) {
      throw new Error("Signup function not defined");
    }

    let result = await signup(formData);
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>First name</label>
                  <input
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;
//  import React from 'react';
// import { useState } from 'react';
 
// export default function Form() {
 
//     // States for registration
//     const [userName, setUserName] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
 
//     // States for checking the errors
//     const [submitted, setSubmitted] = useState(false);
//     const [error, setError] = useState(false);
 
//     // Handle form input changes
//     const handleChange = (e) => {
//     const {name, value} = e.target;

//      // Update state for the input that changed
//   //   setFormData(formData => ({
//   //   ...formData, 
//   //   [name]: value
//   // }));
//     function handleChange(evt){
//     // Handling the name change
//     const handleUserName = (e) => {
//         setUserName(e.target.value);
//         setSubmitted(false);
//     };
//     const handleFirstName = (e) => {
//       setFirstName(e.target.value);
//       setSubmitted(false);
//     };  
//    const handleLastName = (e) => {
//     setlastName(e.target.value);
//     setSubmitted(false);
//     };
//     // Handling the email change
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setSubmitted(false);
//     };
 
//     // Handling the password change
//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         setSubmitted(false);
//     };
 
//     // Handling the form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (firstName === '' || email === '' || password === '',lastName === '', userName === '' ) {
//             setError(true);
//         } else {
//             setSubmitted(true);
//             setError(false);
//         }
//     };}
 
//     // Showing success message
//     const successMessage = () => {
//         return (
//             <div
//                 className="success"
//                 style={{
//                     display: submitted ? '' : 'none',
//                 }}>
//                 <h1>User {firstName} successfully registered!!</h1>
//             </div>
//         );
//     };
 
//     // Showing error message if error is true
//     const errorMessage = () => {
//         return (
//             <div
//                 className="error"
//                 style={{
//                     display: error ? '' : 'none',
//                 }}>
//                 <h1>Please enter all the fields</h1>
//             </div>
//         );
//     };
 
    
//   return (
//     <div className="SignupForm">
//       <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//         <h2 className="mb-3">Sign Up</h2>
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Username</label>
//                 <input
//                   name="username"
//                   className="form-control"
//                   value={setUserName.UserName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   value={setPassword.password}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>First name</label>
//                 <input
//                   name="firstName"
//                   className="form-control"
//                   value={setFirstName.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Last name</label>
//                 <input
//                   name="lastName"
//                   className="form-control"
//                   value={setlastName.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   value={setEmail.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null} */}

//               <button type="submit" className="btn btn-primary float-right">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Alert from "../common/Alert";

// /** Signup form.
//  *
//  * Shows form and manages update to state on changes.
//  * On submission:
//  * - calls signup function prop
//  * - redirects to /companies route
//  *
//  * Routes -> SignupForm -> Alert
//  * Routed as /signup
//  */
// export default function Form() { 
// function SignupForm({ signup }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//   });
//   const [formErrors, setFormErrors] = useState([]);

//   console.debug(
//     "SignupForm",
//     "signup=",
//     typeof signup,
//     "formData=",
//     formData,
//     "formErrors=",
//     formErrors
//   );

//   /** Handle form submit:
//    *
//    * Calls login func prop and, if successful, redirect to /companies.
//    */
//   const handleSubmit = async (evt) => {
//     try {
//       evt.preventDefault();
//       if (typeof signup === "function") {
//         let result = await signup(formData);
//         if (result.success) {
//           navigate("/companies");
//         } else {
//           setFormErrors(result.errors);
//         }
//       } else {
//         throw new Error("Signup function not defined or not a function");
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       // Handle error, set formErrors accordingly
//       setFormErrors(["An error occurred during signup. Please try again later."]);
//     }
//   };

//   /** Update form data field */
//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   return (
//     <div className="SignupForm">
//       <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//         <h2 className="mb-3">Sign Up</h2>
//         <div className="card">
//           <div className="card-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Username</label>
//                 <input
//                   name="username"
//                   className="form-control"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>First name</label>
//                 <input
//                   name="firstName"
//                   className="form-control"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Last name</label>
//                 <input
//                   name="lastName"
//                   className="form-control"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

//               <button type="submit" className="btn btn-primary float-right">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupForm;
 