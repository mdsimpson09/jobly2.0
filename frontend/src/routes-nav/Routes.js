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
const home = () => {
  return <h2>Landing (Public: anyone can access this page)</h2>;
};

const Companies = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};

const Jobs = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};

// Navigation Component
// const Navigation= () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/companies">Companies</Link>
//       <Link to="/jobs">Jobs</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Signup</Link>
//       <Link to="/profile">Profile</Link>
//     </nav>
//   );
// };

// Site-wide routes
const Routea = () => {
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <div className="pt-5">
      {/* <Navigation /> */}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/companies"
          element={
            <ProtectedRoute user={currentUser}>
              <CompanyList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute user={currentUser}>
              <JobList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:handle"
          element={
            <ProtectedRoute user={currentUser}>
              <CompanyDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={currentUser}>
              <ProfileForm />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p> Page not found</p>} />
      </Routes>
    </div>
  );
};

export default Routea;

// import React, { useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navigation from "./Navigation"; // Adjust the import path as necessary
// import Homepage from "../homepage/Homepage";
// import CompanyList from "../companies/CompanyList";
// import JobList from "../jobs/JobList";
// import CompanyDetail from "../companies/CompanyDetail";
// import LoginForm from "../auth/LoginForm";
// import ProfileForm from "../profiles/ProfileForm";
// import SignupForm from "../auth/SignupForm";
// import currentUser from "./PrivateRoute";
// import UserContext from "../auth/UserContext"; // Adjust the import path as necessary

// // Site-wide routes component
// const AppRoutes = () => {
//   const { currentUser } = useContext(UserContext); // Use the context to determine the current user state

//   const ProtectedRoute = ({ children }) => {
//     if (!currentUser) {
//       return <Navigate to="/" replace />;
//     }

//     return children;
//   };

//   return (
//     <div className="pt-5">
//       <Navigation /> {/* This is your navigation bar, included once at the top */}
//       <Routes>
//         <Route index element={<Homepage />} />
//         <Route path="/home" element={<Homepage />} />
//         <Route path="/companies" element={<ProtectedRoute><CompanyList /></ProtectedRoute>} />
//         <Route path="/jobs" element={<ProtectedRoute><JobList /></ProtectedRoute>} />
//         <Route path="/companies/:handle" element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/profile" element={<ProtectedRoute><ProfileForm /></ProtectedRoute>} />
//         <Route path="*" element={<p>Page not found</p>} />
//       </Routes>
//     </div>
//   );
// };

// export default AppRoutes;