// import { apiRequest, ApiResponse, LoginRequest, LoginResponse, RegisterUserRequest, RegisterAgentRequest } from './api';

// export class AuthService {
//   // Login user/agent/admin - matches /login endpoint
//   static async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
//     return apiRequest<LoginResponse>('/logout', {
//       method: 'POST',
//       body: JSON.stringify(credentials)
//     });
//   }

//   // Register new user - matches /profile/register-user endpoint
//   static async registerUser(userData: RegisterUserRequest, profilePicture?: File): Promise<ApiResponse<any>> {
//     const formData = new FormData();
//     formData.append('user', JSON.stringify(userData));
    
//     if (profilePicture) {
//       formData.append('profilePicture', profilePicture);
//     }

//     return apiRequest<any>('/profile/register-user', {
//       method: 'POST',
//       headers: {}, // Don't set Content-Type for FormData
//       body: formData
//     });
//   }

//   // Register new agent - matches /profile/register-agent endpoint
//   static async registerAgent(agentData: RegisterAgentRequest, profilePicture?: File): Promise<ApiResponse<any>> {
//     const formData = new FormData();
//     formData.append('user', JSON.stringify(agentData));
    
//     if (profilePicture) {
//       formData.append('profilePicture', profilePicture);
//     }

//     return apiRequest<any>('/profile/register-agent', {
//       method: 'POST',
//       headers: {}, // Don't set Content-Type for FormData
//       body: formData
//     });
//   }

//   // Get authenticated user profile - matches /profile endpoint
//   static async getProfile(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/profile');
//   }

//   // Send password reset OTP - matches /send-reset-otp endpoint
//   static async sendResetOTP(email: string): Promise<ApiResponse<any>> {
//     const formData = new URLSearchParams();
//     formData.append('email', email);

//     return apiRequest<any>('/send-reset-otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: formData
//     });
//   }

//   // Reset password with OTP - matches /reset-password endpoint
//   static async resetPassword(email: string, otp: string, newPassword: string): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/reset-password', {
//       method: 'POST',
//       body: JSON.stringify({
//         email,
//         otp,
//         newPassword
//       })
//     });
//   }

//   // Send verification OTP - matches /send-otp endpoint
//   static async sendVerifyOTP(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/send-otp', {
//       method: 'POST'
//     });
//   }

//   // Verify OTP - matches /verify-otp endpoint
//   static async verifyOTP(otp: string): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/verify-otp', {
//       method: 'POST',
//       body: JSON.stringify({ otp })
//     });
//   }

//   // Check if user is authenticated - matches /is-authenticated endpoint
//   static async checkAuthentication(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/is-authenticated');
//   }

//   // Logout user - matches /logout endpoint
//   static async logout(): Promise<ApiResponse<any>> {
//     const response = await apiRequest<any>('/logout', {
//       method: 'POST'
//     });
    
//     // Clear local storage on successful logout
//     if (response.success) {
//       localStorage.removeItem('adminToken');
//       localStorage.removeItem('userToken');
//       localStorage.removeItem('userRole');
//       localStorage.removeItem('userEmail');
//     }
    
//     return response;
//   }

//   // Store authentication data
//   static storeAuthData(token: string, user: any): void {
//     if (user.role === 'ADMIN') {
//       localStorage.setItem('adminToken', token);
//       localStorage.setItem('userRole', 'admin');
//     } else {
//       localStorage.setItem('userToken', token);
//       localStorage.setItem('userRole', user.role.toLowerCase());
//     }
//     localStorage.setItem('userEmail', user.email);
//     localStorage.setItem('userName', user.name);
//     localStorage.setItem('userId', user.id);
//   }

//   // Check if user is admin
//   static isAdmin(): boolean {
//     return localStorage.getItem('userRole') === 'admin';
//   }

//   // Check if user is agent
//   static isAgent(): boolean {
//     return localStorage.getItem('userRole') === 'agent';
//   }

//   // Get current user role
//   static getCurrentRole(): string | null {
//     return localStorage.getItem('userRole');
//   }

//   // Get current user info
//   static getCurrentUser(): { id: string; name: string; email: string; role: string } | null {
//     const id = localStorage.getItem('userId');
//     const name = localStorage.getItem('userName');
//     const email = localStorage.getItem('userEmail');
//     const role = localStorage.getItem('userRole');
    
//     if (id && name && email && role) {
//       return { id, name, email, role };
//     }
    
//     return null;
//   }

//   // Clear all auth data
//   static clearAuthData(): void {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('userEmail');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('userId');
//   }
// }

// import { apiRequest, ApiResponse, LoginRequest, LoginResponse, RegisterUserRequest, RegisterAgentRequest } from './api';

// export class AuthService {
//   // ✅ FIXED: Login user/agent/admin - matches /login endpoint
//   static async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
//     return apiRequest<LoginResponse>('/login', {
//       method: 'POST',
//       body: JSON.stringify(credentials)
//     });
//   }

//   // Register new user - matches /profile/register-user endpoint
//   static async registerUser(userData: RegisterUserRequest, profilePicture?: File): Promise<ApiResponse<any>> {
//     const formData = new FormData();
//     formData.append('user', JSON.stringify(userData));
//     if (profilePicture) {
//       formData.append('profilePicture', profilePicture);
//     }
//     return apiRequest<any>('/profile/register-user', {
//       method: 'POST',
//       headers: {}, // Don't set Content-Type for FormData
//       body: formData
//     });
//   }

//   // Register new agent - matches /profile/register-agent endpoint
//   static async registerAgent(agentData: RegisterAgentRequest, profilePicture?: File): Promise<ApiResponse<any>> {
//     const formData = new FormData();
//     formData.append('user', JSON.stringify(agentData));
//     if (profilePicture) {
//       formData.append('profilePicture', profilePicture);
//     }
//     return apiRequest<any>('/profile/register-agent', {
//       method: 'POST',
//       headers: {}, // Don't set Content-Type for FormData
//       body: formData
//     });
//   }

//   // Get authenticated user profile - matches /profile endpoint
//   static async getProfile(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/profile');
//   }

//   // Send password reset OTP - matches /send-reset-otp endpoint
//   static async sendResetOTP(email: string): Promise<ApiResponse<any>> {
//     const formData = new URLSearchParams();
//     formData.append('email', email);
//     return apiRequest<any>('/send-reset-otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: formData
//     });
//   }

//   // Reset password with OTP - matches /reset-password endpoint
//   static async resetPassword(email: string, otp: string, newPassword: string): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/reset-password', {
//       method: 'POST',
//       body: JSON.stringify({
//         email,
//         otp,
//         newPassword
//       })
//     });
//   }

//   // Send verification OTP - matches /send-otp endpoint
//   static async sendVerifyOTP(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/send-otp', {
//       method: 'POST'
//     });
//   }

//   // Verify OTP - matches /verify-otp endpoint
//   static async verifyOTP(otp: string): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/verify-otp', {
//       method: 'POST',
//       body: JSON.stringify({ otp })
//     });
//   }

//   // Check if user is authenticated - matches /is-authenticated endpoint
//   static async checkAuthentication(): Promise<ApiResponse<any>> {
//     return apiRequest<any>('/is-authenticated');
//   }

//   // Logout user - matches /logout endpoint
//   static async logout(): Promise<ApiResponse<any>> {
//     const response = await apiRequest<any>('/logout', {
//       method: 'POST'
//     });
//     // Clear local storage on successful logout
//     if (response.success) {
//       localStorage.removeItem('adminToken');
//       localStorage.removeItem('userToken');
//       localStorage.removeItem('userRole');
//       localStorage.removeItem('userEmail');
//     }
//     return response;
//   }

//   // Store authentication data
//   static storeAuthData(token: string, user: any): void {
//     if (user.role === 'ADMIN') {
//       localStorage.setItem('adminToken', token);
//       localStorage.setItem('userRole', 'admin');
//     } else {
//       localStorage.setItem('userToken', token);
//       localStorage.setItem('userRole', user.role.toLowerCase());
//     }
//     localStorage.setItem('userEmail', user.email);
//     localStorage.setItem('userName', user.name);
//     localStorage.setItem('userId', user.id);
//   }

//   // Check if user is admin
//   static isAdmin(): boolean {
//     return localStorage.getItem('userRole') === 'admin';
//   }

//   // Check if user is agent
//   static isAgent(): boolean {
//     return localStorage.getItem('userRole') === 'agent';
//   }

//   // Get current user role
//   static getCurrentRole(): string | null {
//     return localStorage.getItem('userRole');
//   }

//   // Get current user info
//   static getCurrentUser(): { id: string; name: string; email: string; role: string } | null {
//     const id = localStorage.getItem('userId');
//     const name = localStorage.getItem('userName');
//     const email = localStorage.getItem('userEmail');
//     const role = localStorage.getItem('userRole');
//     if (id && name && email && role) {
//       return { id, name, email, role };
//     }
//     return null;
//   }

//   // Clear all auth data
//   static clearAuthData(): void {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('userEmail');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('userId');
//   }
// }

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api/v1.0';
// console.log("API Base URL:", API_BASE_URL);

// export interface Property {
//   id: string;
//   title: string;
//   city: string;
//   state: string;
//   price: number;
//   type: string;
//   status: string;
// }

// export interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   error?: string;
//   status?: number;
// }

// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   email: string;
//   name: string;
//   role: 'ADMIN' | 'AGENT' | 'USER';
// }

// // API response handler
// const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
//   const contentType = response.headers.get('content-type');
//   let data: any;
//   try {
//     data = contentType?.includes('application/json')
//       ? await response.json()
//       : await response.text();
//     console.log("Response data parsed:", data);
//   } catch (error) {
//     console.error("Failed to parse API response:", error);
//     return { success: false, error: 'Failed to parse response', status: response.status };
//   }
//   if (!response.ok) {
//     console.error("API call failed:", data);
//     return {
//       success: false,
//       error: data.message || data.error || response.statusText,
//       message: data.message,
//       status: response.status,
//       data,
//     };
//   }
//   console.log("API call successful");
//   return { success: true, data, message: data.message, status: response.status };
// };

// // Generic API request
// export const apiRequest = async <T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> => {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`;
//     const headers: HeadersInit = {
//       'Content-Type': 'application/json',
//       ...(options.headers || {}),
//     };
//     console.log("Making API request:", url, "Options:", { ...options, headers });
//     const response = await fetch(url, {
//       ...options,
//       headers,
//       credentials: 'include', // 👈 Important: send & receive cookies
//     });
//     if (response.status === 401) {
//       console.warn("Unauthorized, redirecting to login...");
//       window.location.href = '/admin/login';
//       return { success: false, error: 'Unauthorized', status: 401 };
//     }
//     return await handleApiResponse<T>(response);
//   } catch (error) {
//     console.error('API Request Error:', error);
//     return { success: false, error: error instanceof Error ? error.message : 'Network error occurred' };
//   }
// };

// // Admin login
// export const adminLogin = async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
//   console.log("Attempting admin login with credentials:", credentials);
//   const result = await apiRequest<LoginResponse>('/login', {
//     method: 'POST',
//     body: JSON.stringify(credentials),
//     credentials: 'include', // receive cookie
//   });
//   console.log("Admin login response:", result);
//   return result;
// };

// // Health check
// export const checkApiHealth = async (): Promise<boolean> => {
//   console.log("Checking API health...");
//   try {
//     const response = await fetch(`${API_BASE_URL}/health`, { credentials: 'include' });
//     if (!response.ok) {
//       console.warn("Health check failed:", response.status);
//       return false;
//     }
//     const data = await response.json();
//     return data.status === "UP" && data.database?.status === "CONNECTED";
//   } catch (error) {
//     console.error('Health check failed:', error);
//     return false;
//   }
// };

