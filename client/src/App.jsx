import { Routes, Route, Navigate } from "react-router";
import {
  Home,
  Login,
  Register,
  Jobs,
  Job,
  AddJob,
  Stats,
  NotFound,
} from "./pages";
import { Header, ProtectedRoutes, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-dvh container mx-auto grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="px-6 py-5">
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="dashboard" element={<ProtectedRoutes />}>
            <Route index element={<Navigate to="jobs" replace />} />
            <Route path="jobs">
              <Route index element={<Jobs />} />
              <Route path=":id" element={<Job />} />
            </Route>
            <Route path="stats" element={<Stats />} />
            <Route path="add" element={<AddJob />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
