import { LoginInputProps } from "../../models/auth-model";

const InputLogin = ({ register, errors, onSubmit }: LoginInputProps) => {
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

      <div className="flex items-center justify-between mt-6">
        <a href="#" className="text-sm text-teal-400 hover:underline">
          Register
        </a>
      </div>

      <div className="mt-6">
        <button className="w-full px-4 py-2 text-white bg-teal-500 rounded-full hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
          Login
        </button>
      </div>
    </form>
  );
};

export default InputLogin;
