import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const UserSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });

  const Submit = (data) => {
    // e.preventDefault();

    console.log(data);
    setMessage("");
    setIsLoading(true);

    setTimeout(() => {

        setIsLoading(false);

        // Find user in localStorage
        // const users = JSON.parse(localStorage.getItem('users') || '[]');
        // const user = users.find(u => u.email === formData.email && u.password === formData.password);

        // if (user) {
        //   login(user);
        //   setMessage('Login successful! Redirecting...');
        //   setTimeout(() => navigate('/events'), 800);
        // } else {
        //   setMessage('Invalid email or password');
        // }
      
      setIsLoading(false);
    }, 2000);
  };

  // console.log(errors.email, errors.password?.message);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-xl mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Event Scheduler
            </h1>
            <p className="text-slate-600 mt-2">
              {"Welcome back to your events"}
            </p>
          </div>

          {/* Message */}
          {message && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm animate-slideIn">
              {message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(Submit)} className="space-y-0">
            {/* Email */}
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              error={errors.email?.message}
              required
              register={register}
            />

            {/* Password */}
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="••••••••"
              error={errors.password?.message}
              required
              register={register}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">or</span>
            </div>
          </div>

          {/* Signup link */}
          <div className="text-center">
            <p className="text-slate-600 text-sm">
              {"Don't have an account?"}{" "}
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
              >
                {"Create one"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
