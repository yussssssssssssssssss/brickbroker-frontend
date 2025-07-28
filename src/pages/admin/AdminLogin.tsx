// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Eye, EyeOff, Lock, Mail, Shield, AlertCircle } from 'lucide-react';

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     if (error) setError('');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('adminToken', data.token);
//         navigate('/admin/analytics');
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } catch (err) {
//       // For demo purposes, simulate login
//       if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
//         localStorage.setItem('adminToken', 'demo-jwt-token');
//         navigate('/admin/analytics');
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Enhanced Background */}
//       <div 
//         className="absolute inset-0 bg-gradient-to-br from-[#F9F8F3] via-[#FEFDFB] to-[#F5F4EF]"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at 20% 50%, rgba(188, 134, 100, 0.08) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(188, 134, 100, 0.06) 0%, transparent 50%),
//             radial-gradient(circle at 40% 80%, rgba(188, 134, 100, 0.04) 0%, transparent 50%)
//           `,
//           backgroundSize: '400px 400px, 300px 300px, 500px 500px'
//         }}
//       />

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-[#BC8664]/10 to-[#A0734F]/5 rounded-full blur-2xl animate-float"></div>
//         <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-blue-500/8 to-blue-600/4 rounded-full blur-xl animate-float-delayed"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-purple-500/6 to-purple-600/3 rounded-full blur-3xl animate-float-slow"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8">
//           {/* Header */}
//           <div className="text-center animate-fadeIn">
//             <Link to="/" className="mb-6 sm:mb-8 inline-block group">
//               <img 
//                 src="/logo.PNG" 
//                 alt="Brick Broker" 
//                 className="h-10 sm:h-12 w-auto mx-auto transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
//               />
//             </Link>
//             <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//               <div className="p-2 sm:p-3 bg-[#BC8664]/10 rounded-xl sm:rounded-2xl border border-[#BC8664]/20">
//                 <Shield size={20} className="sm:w-6 sm:h-6 text-[#BC8664]" />
//               </div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#484848]">
//                 Admin Portal
//               </h1>
//             </div>
//             <p className="text-base sm:text-lg text-[#7A7A7A] leading-relaxed px-2">
//               Secure access to Brick Broker management system
//             </p>
//           </div>

//           {/* Login Card */}
//           <div className="relative animate-slideUp">
//             <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 p-6 sm:p-8 md:p-10 overflow-hidden">
//               {/* Card Background Pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/70 rounded-2xl sm:rounded-3xl"></div>
              
//               <div className="relative z-10">
//                 <h2 className="text-xl sm:text-2xl font-bold text-[#484848] mb-6 sm:mb-8 text-center">
//                   Administrator Login
//                 </h2>

//                 {/* Error Message */}
//                 {error && (
//                   <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 animate-shake">
//                     <AlertCircle size={18} className="sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
//                     <span className="text-red-700 text-sm">{error}</span>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                   {/* Email Input */}
//                   <div>
//                     <label className="block text-sm font-semibold text-[#484848] mb-2 sm:mb-3">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 border border-gray-200/50 rounded-lg bg-gray-50/50 backdrop-blur-sm">
//                         <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-[#7A7A7A]" />
//                       </div>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-12 sm:pl-16 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all duration-300 bg-white/60 backdrop-blur-sm hover:border-gray-300/70 text-base sm:text-lg"
//                         placeholder="admin@example.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Password Input */}
//                   <div>
//                     <label className="block text-sm font-semibold text-[#484848] mb-2 sm:mb-3">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 border border-gray-200/50 rounded-lg bg-gray-50/50 backdrop-blur-sm">
//                         <Lock size={16} className="sm:w-[18px] sm:h-[18px] text-[#7A7A7A]" />
//                       </div>
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-12 sm:pl-16 pr-12 sm:pr-16 py-3 sm:py-4 border-2 border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all duration-300 bg-white/60 backdrop-blur-sm hover:border-gray-300/70 text-base sm:text-lg"
//                         placeholder="Enter your password"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 border border-gray-200/50 rounded-lg hover:border-[#BC8664]/30 transition-all duration-300 bg-gray-50/50 hover:bg-gray-100/50 backdrop-blur-sm"
//                       >
//                         {showPassword ? (
//                           <EyeOff size={16} className="sm:w-[18px] sm:h-[18px] text-[#7A7A7A]" />
//                         ) : (
//                           <Eye size={16} className="sm:w-[18px] sm:h-[18px] text-[#7A7A7A]" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Remember Me */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         checked={rememberMe}
//                         onChange={(e) => setRememberMe(e.target.checked)}
//                         className="h-4 w-4 sm:h-5 sm:w-5 text-[#BC8664] focus:ring-[#BC8664]/20 border-gray-300 rounded transition-colors"
//                       />
//                       <label htmlFor="remember-me" className="ml-2 sm:ml-3 block text-sm text-[#7A7A7A] font-medium">
//                         Remember me
//                       </label>
//                     </div>

//                     <div className="text-sm">
//                       <a href="#" className="font-semibold text-[#BC8664] hover:text-[#A0734F] transition-colors">
//                         Forgot password?
//                       </a>
//                     </div>
//                   </div>

//                   {/* Login Button */}
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] disabled:from-gray-400 disabled:to-gray-500 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 text-base sm:text-lg relative overflow-hidden group min-h-[44px] sm:min-h-[56px]"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     {isLoading ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
//                         <span className="relative z-10">Signing In...</span>
//                       </>
//                     ) : (
//                       <>
//                         <div className="p-1.5 sm:p-2 border border-white/30 rounded-lg bg-white/10 relative z-10">
//                           <Shield size={16} className="sm:w-[18px] sm:h-[18px]" />
//                         </div>
//                         <span className="relative z-10">Sign In to Admin Panel</span>
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 {/* Demo Credentials */}
//                 <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-[#BC8664]/5 border border-[#BC8664]/20 rounded-xl sm:rounded-2xl">
//                   <p className="text-sm text-[#7A7A7A] text-center mb-2 font-medium">Demo Credentials:</p>
//                   <div className="space-y-1 text-xs text-[#666] text-center leading-relaxed">
//                     <p>admin@brickbroker.in | admin123</p>
//                     <p>admin@example.com | admin123</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Back to Home */}
//           <div className="text-center animate-fadeIn">
//             <Link 
//               to="/" 
//               className="inline-flex items-center gap-2 sm:gap-3 text-[#BC8664] hover:text-[#A0734F] transition-all duration-300 font-semibold group relative min-h-[44px] px-4 py-2 rounded-lg"
//             >
//               <div className="p-1.5 sm:p-2 rounded-lg border border-[#BC8664]/20 group-hover:border-[#BC8664]/40 group-hover:bg-[#BC8664]/5 transition-all duration-300">
//                 <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="15,18 9,12 15,6"></polyline>
//                 </svg>
//               </div>
//               <span className="relative text-sm sm:text-base">
//                 ← Back to Website
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BC8664] transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(-3deg); }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(2deg); }
//         }
        
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 10s ease-in-out infinite;
//         }
        
//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Eye, EyeOff, Lock, Mail, Shield, AlertCircle, Server, ServerOff, Loader2 } from 'lucide-react';
// import { adminLogin, checkApiHealth } from '../../services/api';

// const AdminLogin = () => {
//   // State management
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [temporarilyVisible, setTemporarilyVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
//   const [loginAttempts, setLoginAttempts] = useState(0);
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   // Check API health on mount
//   useEffect(() => {
//     const checkApi = async () => {
//       try {
//         const isHealthy = await checkApiHealth();
//         setApiStatus(isHealthy ? 'online' : 'offline');
//       } catch (err) {
//         console.error('API health check failed:', err);
//         setApiStatus('offline');
//       }
//     };
//     checkApi();
//   }, []);

//   // Load remembered email
//   useEffect(() => {
//     const rememberedEmail = localStorage.getItem('rememberedEmail');
//     if (rememberedEmail) {
//       setFormData(prev => ({ ...prev, email: rememberedEmail }));
//       setRememberMe(true);
//     }
//   }, []);

//   // Password visibility timer
//   useEffect(() => {
//     if (temporarilyVisible) {
//       const timer = setTimeout(() => {
//         setTemporarilyVisible(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [temporarilyVisible]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
    
//     if (name === 'password') {
//       validatePassword(value);
//     }
    
//     if (error) setError('');
//   };

//   const validatePassword = (password: string) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     if (!regex.test(password)) {
//       setPasswordError('Password must contain 8+ chars with uppercase, lowercase, and numbers');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Rate limiting
//     if (loginAttempts >= 3) {
//       setError('Too many attempts. Please try again later.');
//       return;
//     }

//     // Validation
//     if (passwordError) {
//       setError('Please fix password requirements');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await adminLogin(formData);

//       if (response.success && response.data?.token) {
//         // Successful login
//         localStorage.setItem('adminToken', response.data.token);
//         setLoginAttempts(0);

//         if (rememberMe) {
//           localStorage.setItem('rememberedEmail', formData.email);
//         } else {
//           localStorage.removeItem('rememberedEmail');
//         }

//         navigate('/admin/dashboard');
//       } else {
//         // Failed login
//         setLoginAttempts(prev => prev + 1);
//         setError(
//           response.error || 
//           response.message || 
//           'Authentication failed. Please check your credentials.'
//         );
//       }
//     } catch (err) {
//       setLoginAttempts(prev => prev + 1);
//       setError('Network error. Please try again later.');
//       console.error('Login error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     if (showPassword) {
//       setTemporarilyVisible(true);
//     }
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Link to="/" className="inline-block mb-6">
//             <img 
//               src="/logo.png" 
//               alt="Brick Broker" 
//               className="h-12 mx-auto"
//             />
//           </Link>
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="p-3 bg-indigo-100 rounded-xl border border-indigo-200">
//               <Shield className="w-6 h-6 text-indigo-600" />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
//           </div>
//           <p className="text-gray-600">Secure access to Brick Broker management system</p>
//         </div>

//         {/* API Status Indicator */}
//         <div className={`mb-6 p-3 rounded-lg flex items-center gap-2 ${
//           apiStatus === 'online' 
//             ? 'bg-green-100 text-green-800' 
//             : apiStatus === 'offline' 
//               ? 'bg-red-100 text-red-800' 
//               : 'bg-blue-100 text-blue-800'
//         }`}>
//           {apiStatus === 'online' ? (
//             <Server className="w-5 h-5" />
//           ) : apiStatus === 'offline' ? (
//             <ServerOff className="w-5 h-5" />
//           ) : (
//             <Loader2 className="w-5 h-5 animate-spin" />
//           )}
//           <span>
//             {apiStatus === 'online' 
//               ? 'Connected to server' 
//               : apiStatus === 'offline' 
//                 ? 'Server connection failed' 
//                 : 'Checking server status...'}
//           </span>
//         </div>

//         {/* Login Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Administrator Login
//           </h2>

//           {error && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
//               <AlertCircle className="w-5 h-5 text-red-500" />
//               <span className="text-red-700">{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                   <Mail className="w-5 h-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
//                   placeholder="admin@example.com"
//                   disabled={apiStatus !== 'online'}
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                   <Lock className="w-5 h-5 text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword || temporarilyVisible ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
//                   placeholder="Enter your password"
//                   disabled={apiStatus !== 'online'}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword || temporarilyVisible ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//               {passwordError && (
//                 <p className="mt-1 text-xs text-red-500">{passwordError}</p>
//               )}
//               <p className="mt-1 text-xs text-gray-500">
//                 Password must contain at least 8 characters, including uppercase, lowercase, and numbers
//               </p>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isLoading || apiStatus !== 'online' || !!passwordError}
//               className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
//                 isLoading || apiStatus !== 'online' || passwordError
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
//               } flex items-center justify-center gap-2`}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                   Signing in...
//                 </>
//               ) : (
//                 <>
//                   <Shield className="w-5 h-5" />
//                   Sign In
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Development Credentials (only shown in development) */}
//           {process.env.NODE_ENV === 'development' && (
//             <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded-lg">
//               <p className="text-sm text-gray-500 text-center mb-1 font-medium">
//                 Development Credentials:
//               </p>
//               <div className="text-xs text-gray-600 text-center">
//                 <p>admin@example.com | Admin123!</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Back to Home Link */}
//         <div className="mt-6 text-center">
//           <Link 
//             to="/" 
//             className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
//           >
//             <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
//             </svg>
//             Back to Homepage
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, Shield, AlertCircle, Server, ServerOff, Loader2 } from 'lucide-react';
import { adminLogin, checkApiHealth } from '../../services/api';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [temporarilyVisible, setTemporarilyVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Check API health on mount
  useEffect(() => {
    const checkApi = async () => {
      console.log("Checking API health...");
      try {
        const isHealthy = await checkApiHealth();
        console.log("API health status:", isHealthy ? "Online" : "Offline");
        setApiStatus(isHealthy ? 'online' : 'offline');
      } catch (err) {
        console.error('API health check failed:', err);
        setApiStatus('offline');
      }
    };
    checkApi();
  }, []);

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      console.log("Remembered email found:", rememberedEmail);
      setFormData(prev => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, []);

  // Temporary password visibility
  useEffect(() => {
    if (temporarilyVisible) {
      const timer = setTimeout(() => setTemporarilyVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [temporarilyVisible]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name} updated:`, value);

    if (name === 'password') validatePassword(value);
    if (error) setError('');
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(password)) {
      setPasswordError('Password must contain 8+ chars with uppercase, lowercase, and numbers');
      console.warn("Password validation failed");
    } else {
      setPasswordError('');
      console.log("Password validation passed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loginAttempts >= 3) {
      console.warn("Too many login attempts");
      setError('Too many attempts. Please try again later.');
      return;
    }

    if (passwordError) {
      setError('Please fix password requirements');
      return;
    }

    setIsLoading(true);
    setError('');
    console.log("Attempting admin login with:", formData.email);

    try {
      const response = await adminLogin(formData);
      console.log("Login API response:", response);

      if (response.success) {
        console.log("Login successful: JWT cookie set by server");
        setLoginAttempts(0);

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email);
          console.log("Email remembered");
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        navigate('/admin/dashboard');
      } else {
        setLoginAttempts(prev => prev + 1);
        console.error("Login failed:", response.error || response.message);
        setError(response.error || response.message || 'Authentication failed. Please check your credentials.');
      }
    } catch (err) {
      setLoginAttempts(prev => prev + 1);
      setError('Network error. Please try again later.');
      console.error('Login exception:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    if (showPassword) setTemporarilyVisible(true);
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src="/logo.png" alt="Brick Broker" className="h-12 mx-auto" />
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-xl border border-indigo-200">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
          </div>
          <p className="text-gray-600">Secure access to Brick Broker management system</p>
        </div>

        {/* API Status Indicator */}
        <div className={`mb-6 p-3 rounded-lg flex items-center gap-2 ${
          apiStatus === 'online'
            ? 'bg-green-100 text-green-800'
            : apiStatus === 'offline'
              ? 'bg-red-100 text-red-800'
              : 'bg-blue-100 text-blue-800'
        }`}>
          {apiStatus === 'online' ? <Server className="w-5 h-5" /> : apiStatus === 'offline' ? <ServerOff className="w-5 h-5" /> : <Loader2 className="w-5 h-5 animate-spin" />}
          <span>
            {apiStatus === 'online'
              ? 'Connected to server'
              : apiStatus === 'offline'
                ? 'Server connection failed'
                : 'Checking server status...'}
          </span>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Administrator Login
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
                  placeholder="admin@example.com"
                  disabled={apiStatus !== 'online'}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword || temporarilyVisible ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
                  placeholder="Enter your password"
                  disabled={apiStatus !== 'online'}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword || temporarilyVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && (
                <p className="mt-1 text-xs text-red-500">{passwordError}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || apiStatus !== 'online' || !!passwordError}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                isLoading || apiStatus !== 'online' || passwordError
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              } flex items-center justify-center gap-2`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
