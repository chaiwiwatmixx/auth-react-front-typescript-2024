import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { register } from "../../redux/features/auth/authSlice";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { typeRegister } from "../../models/auth-model";
import InputRegister from "../../components/auth/InputRegister";
import { useNavigate } from "react-router-dom";

// create schema check with yup
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Register = () => {
  // const { token, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // check form
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<typeRegister>({
    resolver: yupResolver(schema),
  });

  // submit
  const onSubmit: SubmitHandler<typeRegister> = (data) => {
    dispatch(register(data));
    reset();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-4xl"> */}
      <div className="container mx-auto px-4 lg:px-8 py-12 bg-white rounded-lg shadow-lg flex max-w-5xl">
        {/* Left Image Section */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="p-8">
            <h1 className="text-white text-2xl font-bold">
              Come learn about the future world
            </h1>
            <p className="text-white mt-2">By : GeekTech</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            GeekTech Welcome
          </h2>

          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-teal-200 text-white rounded-l-lg">
              Login
            </button>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-r-lg">
              Register
            </button>
          </div>

          <p className="text-gray-500 mt-6 text-center">
            Welcome to the world of programming learning
          </p>

          {/* from */}
          <InputRegister
            register={registerInput}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
