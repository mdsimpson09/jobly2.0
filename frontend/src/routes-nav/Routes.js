import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import currentUser from "./PrivateRoute";

// Placeholder components
// const NotFound = () => <div>Page Not Found</div>;

const home = () => {
  return <h2>Landing (Public: anyone can access this page)</h2>;
};

const Companies = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};

const Jobs = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};


//navigation Component
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

// Site-wide routes
const Routea = ({ login, signup }) => {
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
  return (
    <div className="pt-5">
      <Navigation />
      <Routes>
      <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="/companies" element={<ProtectedRoute Currentuser={currentUser}> <CompanyList /> </ProtectedRoute> } />
        <Route path="/jobs" element={<ProtectedRoute currentUser={currentUser}> <JobList /> </ProtectedRoute>} />
        <Route path="/companies/:handle" element={<ProtectedRoute currentUser={currentUser}> <CompanyDetail /> </ProtectedRoute>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<ProtectedRoute currentUser={currentUser}> <ProfileForm /> </ProtectedRoute>} />
        <Route path="*" element={<p> Page not found</p>} />
      </Routes>
    </div>
  );
};

export default Routea;




// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Homepage from "../homepage/Homepage";
// import CompanyList from "../companies/CompanyList";
// import JobList from "../jobs/JobList";
// import CompanyDetail from "../companies/CompanyDetail";
// import LoginForm from "../auth/LoginForm";
// import ProfileForm from "../profiles/ProfileForm";
// import SignupForm from "../auth/SignupForm";
// import PrivateRoute from "./PrivateRoute";
// import {Routes, createBrowserRouter } from "react-router-dom"
/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

// function Routea({ login, signup }) {
//   console.debug(
//       "Routea",
//       `login=${typeof login}`,
//       `register=${typeof register}`,
//   );
//   const Routea = createBrowserRouter([
//     {
//       path: "/",
//       element: <div>Hello world!</div>,
//     },
//   ]);
//   return (
//       <div className="pt-5">
//           <Routes>
//           { path: "/", element: <Homepage /> },


//           <PrivateRoute exact path="/companies">
//             <CompanyList />
//           </PrivateRoute>

//           <PrivateRoute exact path="/jobs">
//             <JobList />
//           </PrivateRoute>

//           <PrivateRoute exact path="/companies/:handle">
//             <CompanyDetail />
//           </PrivateRoute>

//           <PrivateRoute path="/profile">
//             <ProfileForm />
//           </PrivateRoute>

//           <Navigate to="/" />

//           </Routes>
//       </div>
//   );
// }

  // const Routea = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Homepage />
  //   },
  //   {
  //     path: "/login",
  //     element: <LoginForm  />
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignupForm />
  //   },
  //   {
  //     path: "/profile",
  //     element: <>
  //               <PrivateRoute path="/profile">
  //           <ProfileForm />
  //         </PrivateRoute></>
  //   }, 
  // ]);

// export default Routea;
