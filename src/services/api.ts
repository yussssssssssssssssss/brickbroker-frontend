// Base API configuration and utilities
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api/v1.0';

// export interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   error?: string;
// }

// // Updated interfaces to match backend API structure
// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     role: 'ADMIN' | 'AGENT' | 'USER';
//   };
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   role: 'ADMIN' | 'AGENT' | 'USER';
//   profilePicture?: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface RegisterUserRequest {
//   name: string;
//   email: string;
//   password: string;
//   phone: string;
// }

// export interface RegisterAgentRequest {
//   name: string;
//   email: string;
//   password: string;
//   phone: string;
//   experience?: string;
//   specialization?: string;
//   previousCompany?: string;
//   bio?: string;
// }

// export interface Property {
//   id: string;
//   title: string;
//   description: string;
//   city: string;
//   state: string;
//   address: string;
//   pincode: string;
//   type: 'APARTMENT' | 'VILLA' | 'STUDIO' | 'PENTHOUSE' | 'TOWNHOUSE' | 'COMMERCIAL';
//   listingType: 'Residential' | 'Commercial';
//   status: 'PUBLISHED' | 'PENDING' | 'DRAFT' | 'SOLD';
//   price: number;
//   bedrooms: number;
//   bathrooms: number;
//   floors: number;
//   yearBuilt: number;
//   area: number;
//   areaUnit: 'sqft' | 'sqm';
//   featured: boolean;
//   images?: string[];
//   agent?: {
//     id: string;
//     name: string;
//     email: string;
//     phone: string;
//   };
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Agent {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   experience?: string;
//   specialization?: string;
//   rating?: number;
//   location?: string;
//   previousCompany?: string;
//   salesRecord?: string;
//   bio?: string;
//   status: 'PENDING' | 'APPROVED' | 'REJECTED';
//   documents?: string[];
//   profilePicture?: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface AdminMetrics {
//   totalProperties: number;
//   totalAgents: number;
//   totalUsers: number;
//   pendingAgents: number;
//   publishedProperties: number;
//   soldProperties: number;
//   monthlyRevenue: number;
//   websiteVisitors: number;
// }

// export interface PropertyByMonth {
//   month: string;
//   count: number;
// }

// export interface PropertyByCity {
//   city: string;
//   count: number;
// }

// export interface PropertyByType {
//   type: string;
//   count: number;
// }

// export interface TopAgent {
//   id: string;
//   name: string;
//   email: string;
//   propertiesSold: number;
//   totalRevenue: number;
//   rating: number;
// }

// // Error response interface
// export interface ApiError {
//   message: string;
//   status: number;
//   timestamp: string;
// }

// // Utility function to get auth headers
// export const getAuthHeaders = (): HeadersInit => {
//   const token = localStorage.getItem('adminToken') || localStorage.getItem('userToken');
//   return {
//     'Content-Type': 'application/json',
//     ...(token && { 'Authorization': `Bearer ${token}` })
//   };
// };

// // Utility function to get auth headers for FormData
// export const getAuthHeadersForFormData = (): HeadersInit => {
//   const token = localStorage.getItem('adminToken') || localStorage.getItem('userToken');
//   return {
//     ...(token && { 'Authorization': `Bearer ${token}` })
//   };
// };

// // Utility function to handle API responses
// export const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
//   try {
//     // Check if response has content
//     const contentType = response.headers.get('content-type');
//     let data;
    
//     if (contentType && contentType.includes('application/json')) {
//       data = await response.json();
//     } else {
//       data = await response.text();
//     }
    
//     if (!response.ok) {
//       return {
//         success: false,
//         error: (typeof data === 'object' ? data.message || data.error : data) || `HTTP ${response.status}: ${response.statusText}`,
//         data: data
//       };
//     }
    
//     return {
//       success: true,
//       data: typeof data === 'object' ? data : { message: data },
//       message: typeof data === 'object' ? data.message : undefined
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error: 'Failed to parse response',
//       data: undefined
//     };
//   }
// };

// // Generic API request function
// export const apiRequest = async <T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> => {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`;
    
//     // Determine headers based on body type
//     let headers = options.headers || {};
//     if (!(options.body instanceof FormData)) {
//       headers = {
//         ...getAuthHeaders(),
//         ...headers
//       };
//     } else {
//       headers = {
//         ...getAuthHeadersForFormData(),
//         ...headers
//       };
//     }
    
//     const response = await fetch(url, {
//       ...options,
//       headers
//     });
    
//     return handleApiResponse<T>(response);
//   } catch (error) {
//     console.error('API Request Error:', error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : 'Network error occurred'
//     };
//   }
// };

// // Utility function to check if API is available
// export const checkApiHealth = async (): Promise<boolean> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/health`);
//     return response.ok;
//   } catch {
//     return false;
//   }
// };

// Base API configuration and utilities
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api/v1.0';


// export interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   error?: string;
//   status?: number;
// }

// // Auth interfaces
// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     role: 'ADMIN' | 'AGENT' | 'USER';
//   };
// }

// // Error response interface
// export interface ApiError {
//   message: string;
//   status: number;
//   timestamp: string;
//   path?: string;
// }

// // Utility function to get auth headers
// const getAuthHeaders = (): HeadersInit => {
//   const token = localStorage.getItem('adminToken') || localStorage.getItem('userToken');
//   return {
//     'Content-Type': 'application/json',
//     ...(token && { Authorization: `Bearer ${token}` }),
//   };
// };

// // Utility function to handle API responses
// const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
//   const contentType = response.headers.get('content-type');
//   let data: any;

//   try {
//     data = contentType?.includes('application/json') 
//       ? await response.json() 
//       : await response.text();
//   } catch (error) {
//     return {
//       success: false,
//       error: 'Failed to parse response',
//       status: response.status,
//     };
//   }

//   if (!response.ok) {
//     return {
//       success: false,
//       error: data.message || data.error || response.statusText,
//       message: data.message,
//       status: response.status,
//       data: data,
//     };
//   }

//   return {
//     success: true,
//     data: data,
//     message: data.message,
//     status: response.status,
//   };
// };

// // Generic API request function
// // export const apiRequest = async <T>(
// //   endpoint: string,
// //   options: RequestInit = {}
// // ): Promise<ApiResponse<T>> => {
// //   try {
// //     const url = `${API_BASE_URL}${endpoint}`;
// //     const headers = {
// //       ...getAuthHeaders(),
// //       ...(options.headers || {}),
// //     };

// //     const response = await fetch(url, {
// //       ...options,
// //       headers,
// //     });

// //     return await handleApiResponse<T>(response);
// //   } catch (error) {
// //     console.error('API Request Error:', error);
// //     return {
// //       success: false,
// //       error: error instanceof Error ? error.message : 'Network error occurred',
// //     };
// //   }
// // };

// // // Auth-specific API functions
// // export const adminLogin = async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
// //   return apiRequest<LoginResponse>('/login', {
// //     method: 'POST',
// //     body: JSON.stringify(credentials),
// //   });
// // };

// // // Utility function to check if API is available
// // export const checkApiHealth = async (): Promise<boolean> => {
// //   try {
// //     const response = await fetch(`${API_BASE_URL}/health`);
// //     if (!response.ok) return false;
    
// //     const data = await response.json();
// //     return data.status === "UP" && data.database?.status === "CONNECTED";
// //   } catch (error) {
// //     console.error('Health check failed:', error);
// //     return false;
// //   }
// // };

// export const apiRequest = async <T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> => {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`;
//     const headers = {
//       ...getAuthHeaders(),
//       ...(options.headers || {}),
//     };

//     const response = await fetch(url, {
//       ...options,
//       headers,
//     });

//     // Handle unauthorized or expired token
//     if (response.status === 401) {
//       localStorage.removeItem('adminToken');
//       window.location.href = '/admin/login'; // force redirect
//       return {
//         success: false,
//         error: 'Unauthorized: Token expired or invalid',
//         status: 401,
//       };
//     }

//     return await handleApiResponse<T>(response);
//   } catch (error) {
//     console.error('API Request Error:', error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : 'Network error occurred',
//     };
//   }
// };


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api/v1.0';
// console.log("API Base URL:", API_BASE_URL);

// // Generic API response interface
// export interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   error?: string;
//   status?: number;
// }

// // Auth interfaces
// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     role: 'ADMIN' | 'AGENT' | 'USER';
//   };
// }

// // Error response interface
// export interface ApiError {
//   message: string;
//   status: number;
//   timestamp: string;
//   path?: string;
// }

// // Utility function to get auth headers
// const getAuthHeaders = (): HeadersInit => {
//   const token = localStorage.getItem('adminToken') || localStorage.getItem('userToken');
//   console.log("Auth token being sent in headers:", token ? "Found" : "Not Found");
//   return {
//     'Content-Type': 'application/json',
//     ...(token && { Authorization: `Bearer ${token}` }),
//   };
// };

// // Utility function to handle API responses
// const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
//   const contentType = response.headers.get('content-type');
//   let data: any;
//   console.log("Handling API response, status:", response.status);

//   try {
//     data = contentType?.includes('application/json')
//       ? await response.json()
//       : await response.text();
//     console.log("Response data parsed:", data);
//   } catch (error) {
//     console.error("Failed to parse API response:", error);
//     return {
//       success: false,
//       error: 'Failed to parse response',
//       status: response.status,
//     };
//   }

//   if (!response.ok) {
//     console.error("API call failed:", data);
//     return {
//       success: false,
//       error: data.message || data.error || response.statusText,
//       message: data.message,
//       status: response.status,
//       data: data,
//     };
//   }

//   console.log("API call successful");
//   return {
//     success: true,
//     data: data,
//     message: data.message,
//     status: response.status,
//   };
// };

// // Generic API request function with token handling
// export const apiRequest = async <T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> => {
//   try {
//     const url = `${API_BASE_URL}${endpoint}`;
//     const headers = {
//       ...getAuthHeaders(),
//       ...(options.headers || {}),
//     };

//     console.log("Making API request:", url, "Options:", options);

//     const response = await fetch(url, {
//       ...options,
//       headers,
//     });

//     // Handle unauthorized or expired token
//     if (response.status === 401) {
//       console.warn("Token expired or unauthorized, clearing token and redirecting");
//       localStorage.removeItem('adminToken');
//       window.location.href = '/admin/login'; // force redirect
//       return {
//         success: false,
//         error: 'Unauthorized: Token expired or invalid',
//         status: 401,
//       };
//     }

//     return await handleApiResponse<T>(response);
//   } catch (error) {
//     console.error('API Request Error:', error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : 'Network error occurred',
//     };
//   }
// };

// // Auth-specific API functions
// export const adminLogin = async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
//   console.log("Attempting admin login with credentials:", credentials);
//   const result = await apiRequest<LoginResponse>('/login', {
//     method: 'POST',
//     body: JSON.stringify(credentials),
//   });
//   console.log("Admin login response:", result);
//   return result;
// };

// // Utility function to check if API is available
// export const checkApiHealth = async (): Promise<boolean> => {
//   console.log("Checking API health...");
//   try {
//     const response = await fetch(`${API_BASE_URL}/health`);
//     if (!response.ok) {
//       console.warn("Health check failed with status:", response.status);
//       return false;
//     }

//     const data = await response.json();
//     console.log("Health check data:", data);
//     return data.status === "UP" && data.database?.status === "CONNECTED";
//   } catch (error) {
//     console.error('Health check failed:', error);
//     return false;
//   }
// };



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088/api/v1.0';
console.log("API Base URL:", API_BASE_URL);

// src/services/api.ts

export interface Agent {
  userId: string;
  name: string;
  email: string;
  phone?: string;
  isAccountVerified?: boolean;
  agentStatus?: 'APPROVED' | 'PENDING' | 'REJECTED' | string;
  ratings?: number;
  totalProperties?: number;
  [key: string]: any;
}

// src/services/api.ts or adminService.ts

export interface AdminMetrics {
  property_count: number;
  agent_count: number;
  featured_property_count: number;
  pending_agent_count: number;

  // Include any other fields your backend returns and you use
  // E.g.:
  approved_agent_count?: number;
  approved_property_count?: number;
  unverified_user_count?: number;
  user_count?: number;
  // Catch-all for backend expansion:
  [key: string]: any;
}


export interface PropertyByMonth {
  month: string;
  count: number;
}
export interface PropertyByCity {
  city: string;
  count: number;
}
export interface PropertyByType {
  type: string;
  count: number;
}

export interface TopAgent {
  id: string | number;
  name: string;
  email: string;
  totalProperties: number;
  ratings: number;
}


// src/services/api.ts or types.ts

export interface Property {
  id: number;
  title: string;
  description: string;
  city: string;
  state: string;
  address: string;
  area: number;
  areaUnit: string;
  bathrooms: number;
  bedrooms: number;
  floors: number;
  location: string;
  owner?: { name: string; id: string };
  nearbyPlaces?: string;
  price: number;
  status: string;
  type: string;
  listingType: string;
  intent: string;
  pincode: string;
  imageUrls?: string[];
  imagePublicIds?: string[];
  featured?: boolean;
  yearBuilt?: number;
  videoUrl?: string | null;
  virtualTourUrl?: string | null;
  // ...and anything else your backend sends!
}




export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  status?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}


export interface LoginResponse {
  email: string;
  name: string;
  role: 'ADMIN' | 'AGENT' | 'USER';
}

// API response handler
const handleApiResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  const contentType = response.headers.get('content-type');
  let data: any;

  try {
    data = contentType?.includes('application/json')
      ? await response.json()
      : await response.text();
    console.log("Response data parsed:", data);
  } catch (error) {
    console.error("Failed to parse API response:", error);
    return { success: false, error: 'Failed to parse response', status: response.status };
  }

  if (!response.ok) {
    console.error("API call failed:", data);
    return {
      success: false,
      error: data.message || data.error || response.statusText,
      message: data.message,
      status: response.status,
      data,
    };
  }

  console.log("API call successful");
  return { success: true, data, message: data.message, status: response.status };
};

// Generic API request
export const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    console.log("Making API request:", url, "Options:", { ...options, headers });

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include', // 👈 Important: send & receive cookies
    });

    if (response.status === 401) {
      console.warn("Unauthorized, redirecting to login...");
      window.location.href = '/admin/login';
      return { success: false, error: 'Unauthorized', status: 401 };
    }

    return await handleApiResponse<T>(response);
  } catch (error) {
    console.error('API Request Error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Network error occurred' };
  }
};

// Admin login
export const adminLogin = async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
  console.log("Attempting admin login with credentials:", credentials);
  const result = await apiRequest<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    credentials: 'include', // receive cookie
  });
  console.log("Admin login response:", result);
  return result;
};

export const adminLogout = async (): Promise<ApiResponse<null>> => {
  console.log("Attempting admin logout...");
  const result = await apiRequest<null>('/logout', {
    method: 'POST',
    credentials: 'include', // Ensure cookie is sent
  });
  // Optionally: Redirect to login if successful, or let UI handle it
  console.log("Admin logout response:", result);
  return result;
};

// Health check
export const checkApiHealth = async (): Promise<boolean> => {
  console.log("Checking API health...");
  try {
    const response = await fetch(`${API_BASE_URL}/health`, { credentials: 'include' });
    if (!response.ok) {
      console.warn("Health check failed:", response.status);
      return false;
    }
    const data = await response.json();
    return data.status === "UP" && data.database?.status === "CONNECTED";
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
  

};
