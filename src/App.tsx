import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { getUser } from "./redux/features/auth/authSlice";
import { useEffect } from "react";
import Register from "./page/auth/Register";
import Home from "./page/home/Home";
import CreateCouse from "./page/create-couse/CreateCouse";
import Layout from "./components/layout/Layout";
import CreateDetail from "./page/create-couse/CreateDetail";

const App = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route
          path="/create-course"
          element={user ? <CreateCouse /> : <Login />}
        />
        <Route
          path="/create-detail"
          element={
            user ? (
              <Layout>
                <CreateDetail />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
