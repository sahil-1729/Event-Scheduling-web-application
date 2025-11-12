// import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      {/* no need because, all route initially leads to login */}
      {/* <div>
        <Link  to="/login">login</Link>
        <Link  to="/notes">notes</Link>
        <Link  to="/profile">profile</Link>
      </div> */}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes */}
        {/* <Route
              path="/events"
              element={<ProtectedRoute element={<AllEvents />} />}
            /> */}

        {/* <Route
              path="/event-details/:eventId"
              element={<ProtectedRoute element={<EventDetails />} />}
            /> */}

        {/* <Route
              path="/create-event"
              element={<ProtectedRoute element={<CreateEditEvent />} />}
            /> */}

        {/* <Route
              path="/edit-event/:eventId"
              element={<ProtectedRoute element={<CreateEditEvent />} />}
            /> */}

        <Route path="/profile" element={<>Profile</>} />

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
