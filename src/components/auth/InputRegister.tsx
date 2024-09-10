import { RegisterInputProps } from "../../models/auth-model";


const InputRegister = ({ register, errors, onSubmit }: RegisterInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mt-6">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-2 border border-teal-500 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="Enter your Email Address"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-2 border border-teal-500 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="Enter your User name"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 mt-2 border border-teal-500 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="Enter your Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Confirm password</label>
        <input
          type="password"
          className="w-full px-4 py-2 mt-2 border border-teal-500 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="Confirm your Password"
          {...register("password2")}
        />
        {errors.password2 && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password2.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-6">
        <a href="#" className="text-sm text-teal-400 hover:underline">
          Login
        </a>
      </div>

      <div className="mt-6">
        <button className="w-full px-4 py-2 text-white bg-teal-500 rounded-full hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
          Register
        </button>
      </div>
    </form>
  );
};

export default InputRegister;
