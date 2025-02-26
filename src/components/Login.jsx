import React, { useState } from 'react';
import { Eye, EyeOff, Droplets } from 'lucide-react';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-gradient-to r from-gray-300  to black-100 p-8 rounded-lg shadow-lg w-96 transform transition-all  ">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 transform transition-all duration-500 hover:rotate-180">
            <Droplets size={32} className="text-gray-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-500 tracking-wider">Dtox</h1>
          <p className="text-gray-500 text-sm mt-2">Refresh Your Digital Life</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-gray-50 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 
              ${isLogin ? 'bg-gray-200 text-gray-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 
              ${!isLogin ? 'bg-gray-200 text-gray-500 shadow-sm' : 'text-gray-500 hover:text-gray-500'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition-all duration-300 transform hover:translate-x-1"
              placeholder="Enter your username"
            />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-300 transform hover:translate-x-1"
                placeholder="Enter your email"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition-all duration-300 transform hover:translate-x-1"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-500">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-300 transform hover:translate-x-1"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-sm text-gray-500 hover:text-gray-500 transition-colors duration-300">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={toggleMode}
            className="text-gray-100 hover:text-gray-100 font-medium transition-colors duration-300"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;