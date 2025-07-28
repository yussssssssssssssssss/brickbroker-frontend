// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { AdminService } from '../../services/adminService';
// import { BarChart3, Users, Home, TrendingUp, DollarSign, Eye } from 'lucide-react';

// const StatCard = ({ icon: Icon, title, value, color }: any) => (
//   <div className="flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow transition">
//     <div className={`p-3 rounded-full text-white ${color}`}>
//       <Icon size={20} />
//     </div>
//     <div className="ml-4">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-lg font-semibold text-gray-800">{value}</p>
//     </div>
//   </div>
// );

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       const response = await AdminService.getMetricsCounts();
//       if (response.success && response.data) {
//         setMetrics(response.data);
//         setError(null);
//       } else {
//         setError(response.error || 'Failed to load metrics');
//       }
//       setIsLoading(false);
//     };

//     fetchMetrics();
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

//         {isLoading ? (
//           <p>Loading metrics...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <StatCard icon={Home} title="Total Properties" value={metrics?.totalProperties} color="bg-blue-500" />
//             <StatCard icon={Users} title="Total Agents" value={metrics?.totalAgents} color="bg-green-500" />
//             <StatCard icon={Users} title="Total Users" value={metrics?.totalUsers} color="bg-teal-500" />
//             <StatCard icon={BarChart3} title="Pending Agents" value={metrics?.pendingAgents} color="bg-yellow-500" />
//             <StatCard icon={TrendingUp} title="Published Properties" value={metrics?.publishedProperties} color="bg-indigo-500" />
//             <StatCard icon={TrendingUp} title="Sold Properties" value={metrics?.soldProperties} color="bg-purple-500" />
//             <StatCard icon={DollarSign} title="Monthly Revenue" value={`₹ ${metrics?.monthlyRevenue?.toLocaleString()}`} color="bg-rose-500" />
//             <StatCard icon={Eye} title="Website Visitors" value={metrics?.websiteVisitors} color="bg-gray-600" />
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { AdminService } from '../../services/adminService';
// import { BarChart3, Users, Home, TrendingUp, DollarSign, Eye } from 'lucide-react';

// const StatCard = ({ icon: Icon, title, value, color }: any) => (
//   <div className="flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow transition">
//     <div className={`p-3 rounded-full text-white ${color}`}>
//       <Icon size={20} />
//     </div>
//     <div className="ml-4">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-lg font-semibold text-gray-800">{value}</p>
//     </div>
//   </div>
// );

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);

//   // Log when component mounts
//   useEffect(() => {
//     console.log("📊 AdminDashboard mounted");
//     console.log("LocalStorage adminToken:", localStorage.getItem('adminToken'));
//   }, []);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       console.log("➡️ Fetching admin metrics...");
//       const response = await AdminService.getMetricsCounts();
//       console.log("📥 Metrics API response:", response);

//       if (response.success && response.data) {
//         setMetrics(response.data);
//         setError(null);
//         console.log("✅ Metrics set successfully:", response.data);
//       } else {
//         setError(response.error || 'Failed to load metrics');
//         console.error("❌ Failed to fetch metrics:", response.error);
//       }
//       setIsLoading(false);
//     };

//     fetchMetrics();
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

//         {isLoading ? (
//           <p>Loading metrics...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <StatCard icon={Home} title="Total Properties" value={metrics?.totalProperties} color="bg-blue-500" />
//             <StatCard icon={Users} title="Total Agents" value={metrics?.totalAgents} color="bg-green-500" />
//             <StatCard icon={Users} title="Total Users" value={metrics?.totalUsers} color="bg-teal-500" />
//             <StatCard icon={BarChart3} title="Pending Agents" value={metrics?.pendingAgents} color="bg-yellow-500" />
//             <StatCard icon={TrendingUp} title="Published Properties" value={metrics?.publishedProperties} color="bg-indigo-500" />
//             <StatCard icon={TrendingUp} title="Sold Properties" value={metrics?.soldProperties} color="bg-purple-500" />
//             <StatCard icon={DollarSign} title="Monthly Revenue" value={`₹ ${metrics?.monthlyRevenue?.toLocaleString()}`} color="bg-rose-500" />
//             <StatCard icon={Eye} title="Website Visitors" value={metrics?.websiteVisitors} color="bg-gray-600" />
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { AdminService } from '../../services/adminService';
// import {
//   BarChart3, Users, Home, TrendingUp, DollarSign, Eye,
//   FileText, CheckCircle, XCircle, Plus, Search, Filter
// } from 'lucide-react';
// import { Property } from '../../services/api';
// import { formatDate } from '../../utils/dateUtils';
// import Pagination from '../../components/common/Pagination';

// interface StatCardProps {
//   icon: React.ComponentType<{ size?: number }>;
//   title: string;
//   value: string | number;
//   color: string;
//   onClick?: () => void;
// }

// const StatCard = ({ icon: Icon, title, value, color, onClick }: StatCardProps) => (
//   <div
//     className={`flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow transition cursor-pointer ${onClick ? 'hover:bg-gray-50' : ''}`}
//     onClick={onClick}
//   >
//     <div className={`p-3 rounded-full text-white ${color}`}>
//       <Icon size={20} />
//     </div>
//     <div className="ml-4">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-lg font-semibold text-gray-800">{value}</p>
//     </div>
//   </div>
// );

// const PropertyStatusBadge = ({ status }: { status: string }) => {
//   const statusMap: Record<string, { color: string; icon: React.ReactNode }> = {
//     published: { color: 'bg-green-100 text-green-800', icon: <CheckCircle size={14} className="mr-1" /> },
//     pending: { color: 'bg-yellow-100 text-yellow-800', icon: <FileText size={14} className="mr-1" /> },
//     sold: { color: 'bg-purple-100 text-purple-800', icon: <DollarSign size={14} className="mr-1" /> },
//     rejected: { color: 'bg-red-100 text-red-800', icon: <XCircle size={14} className="mr-1" /> },
//   };

//   return (
//     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusMap[status]?.color || 'bg-gray-100 text-gray-800'}`}>
//       {statusMap[status]?.icon}
//       {status.charAt(0).toUpperCase() + status.slice(1)}
//     </span>
//   );
// };

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [metricsError, setMetricsError] = useState<string | null>(null);
//   const [propertiesError, setPropertiesError] = useState<string | null>(null);
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState<string>('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [propertiesPerPage] = useState(5);
//   const [activeTab, setActiveTab] = useState<'overview' | 'properties'>('overview');

//   useEffect(() => {
//     console.log("📊 AdminDashboard mounted");
//     fetchMetrics();
//     fetchProperties();
//   }, []);

//   const fetchMetrics = async () => {
//     console.log("➡️ Fetching admin metrics...");
//     try {
//       const response = await AdminService.getMetricsCounts();
//       console.log("📥 Metrics API response:", response);

//       if (response.success && response.data) {
//         setMetrics(response.data);
//         setMetricsError(null);
//       } else {
//         setMetricsError(response.error || 'Failed to load metrics');
//       }
//     } catch (error) {
//       setMetricsError('An error occurred while fetching metrics');
//       console.error("❌ Error fetching metrics:", error);
//     }
//   };

//   const fetchProperties = async () => {
//     console.log("➡️ Fetching properties...");
//     try {
//       const response = await AdminService.getAllProperties();
//       console.log("📥 Properties API response:", response);

//       if (response.success && response.data) {
//         setProperties(response.data);
//         setFilteredProperties(response.data);
//         setPropertiesError(null);
//       } else {
//         setPropertiesError(response.error || 'Failed to load properties');
//       }
//     } catch (error) {
//       setPropertiesError('An error occurred while fetching properties');
//       console.error("❌ Error fetching properties:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     filterProperties(term, statusFilter);
//   };

//   const handleStatusFilter = (status: string) => {
//     setStatusFilter(status);
//     filterProperties(searchTerm, status);
//     setCurrentPage(1);
//   };

//   const filterProperties = (term: string, status: string) => {
//     let filtered = properties;

//     if (term) {
//       filtered = filtered.filter(property =>
//         property.title.toLowerCase().includes(term) ||
//         property.location.toLowerCase().includes(term) ||
//         property.agent?.name.toLowerCase().includes(term)
//     );}

//     if (status !== 'all') {
//       filtered = filtered.filter(property => property.status === status);
//     }

//     setFilteredProperties(filtered);
//   };

//   const handlePropertyClick = (id: string) => {
//     navigate(`/admin/properties/${id}`);
//   };

//   const handleAddProperty = () => {
//     navigate('/admin/properties/new');
//   };

//   const handleStatusChange = async (id: string, newStatus: string) => {
//     try {
//       const response = await AdminService.updatePropertyStatus(id, newStatus);
//       if (response.success) {
//         fetchProperties();
//         fetchMetrics();
//       }
//     } catch (error) {
//       console.error("Error updating property status:", error);
//     }
//   };

//   // Pagination logic
//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
//   const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

//   return (
//     <AdminLayout>
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setActiveTab('overview')}
//               className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               Overview
//             </button>
//             <button
//               onClick={() => setActiveTab('properties')}
//               className={`px-4 py-2 rounded-md ${activeTab === 'properties' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               Property Management
//             </button>
//           </div>
//         </div>

//         {activeTab === 'overview' ? (
//           <>
//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//               </div>
//             ) : metricsError ? (
//               <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <XCircle className="h-5 w-5 text-red-500" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-700">{metricsError}</p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                 <StatCard
//                   icon={Home}
//                   title="Total Properties"
//                   value={metrics?.totalProperties || 0}
//                   color="bg-blue-500"
//                   onClick={() => setActiveTab('properties')}
//                 />
//                 <StatCard
//                   icon={Users}
//                   title="Total Agents"
//                   value={metrics?.totalAgents || 0}
//                   color="bg-green-500"
//                   onClick={() => navigate('/admin/agents')}
//                 />
//                 <StatCard
//                   icon={Users}
//                   title="Total Users"
//                   value={metrics?.totalUsers || 0}
//                   color="bg-teal-500"
//                   onClick={() => navigate('/admin/users')}
//                 />
//                 <StatCard
//                   icon={BarChart3}
//                   title="Pending Agents"
//                   value={metrics?.pendingAgents || 0}
//                   color="bg-yellow-500"
//                   onClick={() => navigate('/admin/agents?status=pending')}
//                 />
//                 <StatCard
//                   icon={TrendingUp}
//                   title="Published Properties"
//                   value={metrics?.publishedProperties || 0}
//                   color="bg-indigo-500"
//                   onClick={() => {
//                     setActiveTab('properties');
//                     setStatusFilter('published');
//                   }}
//                 />
//                 <StatCard
//                   icon={TrendingUp}
//                   title="Sold Properties"
//                   value={metrics?.soldProperties || 0}
//                   color="bg-purple-500"
//                   onClick={() => {
//                     setActiveTab('properties');
//                     setStatusFilter('sold');
//                   }}
//                 />
//                 <StatCard
//                   icon={DollarSign}
//                   title="Monthly Revenue"
//                   value={`₹ ${metrics?.monthlyRevenue?.toLocaleString() || '0'}`}
//                   color="bg-rose-500"
//                 />
//                 <StatCard
//                   icon={Eye}
//                   title="Website Visitors"
//                   value={metrics?.websiteVisitors || 0}
//                   color="bg-gray-600"
//                 />
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
//               <div className="relative w-full sm:w-64">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   placeholder="Search properties..."
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//               </div>

//               <div className="flex items-center space-x-2 w-full sm:w-auto">
//                 <div className="relative">
//                   <select
//                     className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     value={statusFilter}
//                     onChange={(e) => handleStatusFilter(e.target.value)}
//                   >
//                     <option value="all">All Statuses</option>
//                     <option value="published">Published</option>
//                     <option value="pending">Pending</option>
//                     <option value="sold">Sold</option>
//                     <option value="rejected">Rejected</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                     <Filter className="h-4 w-4 text-gray-400" />
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleAddProperty}
//                   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   <Plus className="-ml-1 mr-2 h-5 w-5" />
//                   Add Property
//                 </button>
//               </div>
//             </div>

//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//               </div>
//             ) : propertiesError ? (
//               <div className="p-6 text-center text-red-500">{propertiesError}</div>
//             ) : filteredProperties.length === 0 ? (
//               <div className="p-6 text-center text-gray-500">
//                 No properties found matching your criteria
//               </div>
//             ) : (
//               <>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Property
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Location
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Agent
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Price
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Status
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Listed On
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {currentProperties.map((property) => (
//                         <tr key={property._id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10">
//                                 {property.images?.[0] ? (
//                                   <img className="h-10 w-10 rounded-md object-cover" src={property.images[0]} alt={property.title} />
//                                 ) : (
//                                   <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
//                                     <Home className="h-5 w-5 text-gray-500" />
//                                   </div>
//                                 )}
//                               </div>
//                               <div className="ml-4">
//                                 <div
//                                   className="text-sm font-medium text-gray-900 cursor-pointer hover:text-blue-600"
//                                   onClick={() => handlePropertyClick(property._id)}
//                                 >
//                                   {property.title}
//                                 </div>
//                                 <div className="text-sm text-gray-500">{property.propertyType}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {property.location}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {property.agent?.name || 'N/A'}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             ₹ {property.price?.toLocaleString()}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <PropertyStatusBadge status={property.status} />
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {formatDate(property.createdAt)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <div className="flex justify-end space-x-2">
//                               {property.status !== 'published' && (
//                                 <button
//                                   onClick={() => handleStatusChange(property._id, 'published')}
//                                   className="text-green-600 hover:text-green-900"
//                                   title="Publish"
//                                 >
//                                   <CheckCircle size={18} />
//                                 </button>
//                               )}
//                               {property.status !== 'rejected' && (
//                                 <button
//                                   onClick={() => handleStatusChange(property._id, 'rejected')}
//                                   className="text-red-600 hover:text-red-900"
//                                   title="Reject"
//                                 >
//                                   <XCircle size={18} />
//                                 </button>
//                               )}
//                               <button
//                                 onClick={() => handlePropertyClick(property._id)}
//                                 className="text-blue-600 hover:text-blue-900"
//                                 title="View Details"
//                               >
//                                 <Eye size={18} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {totalPages > 1 && (
//                   <div className="px-6 py-4 border-t flex items-center justify-between">
//                     <Pagination
//                       currentPage={currentPage}
//                       totalPages={totalPages}
//                       onPageChange={setCurrentPage}
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { AdminService } from '../../services/adminService';
// import {
//   BarChart3, Users, Home, TrendingUp, DollarSign, Eye,
//   FileText, CheckCircle, XCircle, Plus, Search, Filter
// } from 'lucide-react';
// import { Property } from '../../services/api';
// import { formatDate } from '../../utils/dateUtils';
// import Pagination from '../../components/common/Pagination';

// // Shape based on your API log, adjust to match backend
// interface AdminMetrics {
//   totalProperties?: number;
//   totalAgents?: number;
//   totalUsers?: number;
//   pendingAgents?: number;
//   publishedProperties?: number;
//   soldProperties?: number;
//   monthlyRevenue?: number;
//   websiteVisitors?: number;
// }

// interface StatCardProps {
//   icon: React.ComponentType<{ size?: number }>;
//   title: string;
//   value: string | number;
//   color: string;
//   onClick?: () => void;
// }

// const StatCard = ({ icon: Icon, title, value, color, onClick }: StatCardProps) => (
//   <div
//     className={`flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow transition cursor-pointer ${onClick ? 'hover:bg-gray-50' : ''}`}
//     onClick={onClick}
//     tabIndex={0}
//     role={onClick ? "button" : undefined}
//   >
//     <div className={`p-3 rounded-full text-white ${color}`}>
//       <Icon size={20} />
//     </div>
//     <div className="ml-4">
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-lg font-semibold text-gray-800">{value}</p>
//     </div>
//   </div>
// );

// const PropertyStatusBadge = ({ status }: { status: string }) => {
//   const statusMap: Record<string, { color: string; icon: React.ReactNode }> = {
//     published: { color: 'bg-green-100 text-green-800', icon: <CheckCircle size={14} className="mr-1" /> },
//     pending:   { color: 'bg-yellow-100 text-yellow-800', icon: <FileText size={14} className="mr-1" /> },
//     sold:      { color: 'bg-purple-100 text-purple-800', icon: <DollarSign size={14} className="mr-1" /> },
//     rejected:  { color: 'bg-red-100 text-red-800', icon: <XCircle size={14} className="mr-1" /> },
//   };

//   return (
//     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusMap[status]?.color || 'bg-gray-100 text-gray-800'}`}>
//       {statusMap[status]?.icon}
//       {status.charAt(0).toUpperCase() + status.slice(1)}
//     </span>
//   );
// };

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   // --- States
//   const [isLoading, setIsLoading] = useState(true);
//   const [metricsError, setMetricsError] = useState<string | null>(null);
//   const [propertiesError, setPropertiesError] = useState<string | null>(null);

//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState<string>('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [propertiesPerPage] = useState(5);
//   const [activeTab, setActiveTab] = useState<'overview' | 'properties'>('overview');

//   // --- Fetch data on mount
//   useEffect(() => {
//     fetchMetrics();
//     fetchProperties();
//     // eslint-disable-next-line
//   }, []);

//   // --- Filtering logic, keep as memoized value for performance/clarity
//   const filteredProperties = useMemo(() => {
//     let filtered = properties;
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       filtered = filtered.filter(property =>
//         property.title?.toLowerCase().includes(term) ||
//         property.location?.toLowerCase().includes(term) ||
//         property.agent?.name?.toLowerCase().includes(term)
//       );
//     }
//     if (statusFilter !== 'all') {
//       filtered = filtered.filter(property => property.status === statusFilter);
//     }
//     return filtered;
//   }, [searchTerm, statusFilter, properties]);

//   // --- API Fetchers
//   async function fetchMetrics() {
//     try {
//       const response = await AdminService.getMetricsCounts();
//       if (response.success && response.data) {
//         setMetrics(response.data);
//         setMetricsError(null);
//       } else {
//         setMetricsError(response.error || 'Failed to load metrics');
//       }
//     } catch (error) {
//       setMetricsError('An error occurred while fetching metrics');
//     }
//   }

//   async function fetchProperties() {
//     try {
//       const response = await AdminService.getAllProperties();
//       if (response.success && response.data) {
//         setProperties(response.data);
//         setPropertiesError(null);
//       } else {
//         setPropertiesError(response.error || 'Failed to load properties');
//       }
//     } catch (error) {
//       setPropertiesError('An error occurred while fetching properties');
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   // --- UI handlers
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleStatusFilter = (status: string) => {
//     setStatusFilter(status);
//     setCurrentPage(1);
//   };

//   const handlePropertyClick = (id: string | number) => {
//     navigate(`/admin/properties/${id}`);
//   };

//   const handleAddProperty = () => {
//     navigate('/admin/properties/new');
//   };

//   const handleStatusChange = async (id: string | number, newStatus: string) => {
//     try {
//       const response = await AdminService.updatePropertyStatus(id, newStatus);
//       if (response.success) {
//         fetchProperties();
//         fetchMetrics();
//       }
//     } catch (error) {
//       console.error("Error updating property status:", error);
//     }
//   };

//   // --- Pagination
//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
//   const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

//   // --- Render
//   return (
//     <AdminLayout>
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setActiveTab('overview')}
//               className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               Overview
//             </button>
//             <button
//               onClick={() => setActiveTab('properties')}
//               className={`px-4 py-2 rounded-md ${activeTab === 'properties' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               Property Management
//             </button>
//           </div>
//         </div>

//         {/* --- TAB: Overview --- */}
//         {activeTab === 'overview' ? (
//           <>
//             {isLoading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//               </div>
//             ) : metricsError ? (
//               <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
//                 <div className="flex">
//                   <XCircle className="h-5 w-5 text-red-500" />
//                   <div className="ml-3 text-sm text-red-700">{metricsError}</div>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                 <StatCard
//                   icon={Home}
//                   title="Total Properties"
//                   value={metrics?.totalProperties || 0}
//                   color="bg-blue-500"
//                   onClick={() => setActiveTab('properties')}
//                 />
//                 <StatCard
//                   icon={Users}
//                   title="Total Agents"
//                   value={metrics?.totalAgents || 0}
//                   color="bg-green-500"
//                   onClick={() => navigate('/admin/agents')}
//                 />
//                 <StatCard
//                   icon={Users}
//                   title="Total Users"
//                   value={metrics?.totalUsers || 0}
//                   color="bg-teal-500"
//                   onClick={() => navigate('/admin/users')}
//                 />
//                 <StatCard
//                   icon={BarChart3}
//                   title="Pending Agents"
//                   value={metrics?.pendingAgents || 0}
//                   color="bg-yellow-500"
//                   onClick={() => navigate('/admin/agents?status=pending')}
//                 />
//                 <StatCard
//                   icon={TrendingUp}
//                   title="Published Properties"
//                   value={metrics?.publishedProperties || 0}
//                   color="bg-indigo-500"
//                   onClick={() => {
//                     setActiveTab('properties');
//                     setStatusFilter('published');
//                   }}
//                 />
//                 <StatCard
//                   icon={TrendingUp}
//                   title="Sold Properties"
//                   value={metrics?.soldProperties || 0}
//                   color="bg-purple-500"
//                   onClick={() => {
//                     setActiveTab('properties');
//                     setStatusFilter('sold');
//                   }}
//                 />
//                 <StatCard
//                   icon={DollarSign}
//                   title="Monthly Revenue"
//                   value={`₹ ${metrics?.monthlyRevenue?.toLocaleString() || '0'}`}
//                   color="bg-rose-500"
//                 />
//                 <StatCard
//                   icon={Eye}
//                   title="Website Visitors"
//                   value={metrics?.websiteVisitors || 0}
//                   color="bg-gray-600"
//                 />
//               </div>
//             )}
//           </>
//         ) : (
//         // --- TAB: Properties Management ---
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="relative w-full sm:w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 placeholder="Search properties..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//             </div>
//             <div className="flex items-center space-x-2 w-full sm:w-auto">
//               <div className="relative">
//                 <select
//                   className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={statusFilter}
//                   onChange={e => handleStatusFilter(e.target.value)}
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="published">Published</option>
//                   <option value="pending">Pending</option>
//                   <option value="sold">Sold</option>
//                   <option value="rejected">Rejected</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                   <Filter className="h-4 w-4 text-gray-400" />
//                 </div>
//               </div>
//               <button
//                 onClick={handleAddProperty}
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 <Plus className="-ml-1 mr-2 h-5 w-5" />
//                 Add Property
//               </button>
//             </div>
//           </div>

//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//           ) : propertiesError ? (
//             <div className="p-6 text-center text-red-500">{propertiesError}</div>
//           ) : filteredProperties.length === 0 ? (
//             <div className="p-6 text-center text-gray-500">
//               No properties found matching your criteria
//             </div>
//           ) : (
//           <>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listed On</th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {currentProperties.map((property) => (
//                     <tr key={property._id || property.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10">
//                             {property.images?.[0] ? (
//                               <img className="h-10 w-10 rounded-md object-cover" src={property.images[0]} alt={property.title} />
//                             ) : (
//                               <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
//                                 <Home className="h-5 w-5 text-gray-500" />
//                               </div>
//                             )}
//                           </div>
//                           <div className="ml-4">
//                             <div
//                               className="text-sm font-medium text-gray-900 cursor-pointer hover:text-blue-600"
//                               onClick={() => handlePropertyClick(property._id || property.id)}
//                               tabIndex={0}
//                               role="button"
//                             >
//                               {property.title}
//                             </div>
//                             <div className="text-sm text-gray-500">{property.propertyType}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {property.location}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {property.agent?.name || 'N/A'}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         ₹ {property.price?.toLocaleString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <PropertyStatusBadge status={property.status} />
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {property.createdAt ? formatDate(property.createdAt) : '--'}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
//                           {property.status !== 'published' && (
//                             <button
//                               onClick={() => handleStatusChange(property._id || property.id, 'published')}
//                               className="text-green-600 hover:text-green-900"
//                               title="Publish"
//                             >
//                               <CheckCircle size={18} />
//                             </button>
//                           )}
//                           {property.status !== 'rejected' && (
//                             <button
//                               onClick={() => handleStatusChange(property._id || property.id, 'rejected')}
//                               className="text-red-600 hover:text-red-900"
//                               title="Reject"
//                             >
//                               <XCircle size={18} />
//                             </button>
//                           )}
//                           <button
//                             onClick={() => handlePropertyClick(property._id || property.id)}
//                             className="text-blue-600 hover:text-blue-900"
//                             title="View Details"
//                           >
//                             <Eye size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {totalPages > 1 && (
//               <div className="px-6 py-4 border-t flex items-center justify-between">
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={setCurrentPage}
//                 />
//               </div>
//             )}
//           </>
//           )}
//         </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { AdminService } from "../../services/adminService";
// import { AdminMetrics, Property, Agent } from "../../services/api";
// import AdminLayout from "../../components/admin/AdminLayout";

// const AdminDashboard: React.FC = () => {
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [pendingAgents, setPendingAgents] = useState<Agent[]>([]);
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch metrics, agents, and properties in parallel (dashboard view)
//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     Promise.all([
//       AdminService.getMetricsCounts(),
//       AdminService.getPendingAgents(),
//       AdminService.getAllProperties(),
//     ]).then(([metricsRes, agentsRes, propsRes]) => {
//       if (metricsRes.success) setMetrics(metricsRes.data || null);
//       if (agentsRes.success) setPendingAgents(agentsRes.data || []);
//       if (propsRes.success) setProperties(propsRes.data || []);
//       setError(metricsRes.error || agentsRes.error || propsRes.error || null);
//     }).finally(() => setLoading(false));
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="p-6 max-w-screen-xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//         {loading && <div>Loading...</div>}
//         {error && <div className="text-red-600">Error: {error}</div>}

//         {/* Metrics Cards */}
//         {metrics && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
//             <MetricCard label="Total Properties" value={metrics.property_count || 0} />
//             <MetricCard label="Total Agents" value={metrics.agent_count || 0} />
//             <MetricCard label="Featured Properties" value={metrics.featured_property_count || 0} />
//             <MetricCard label="Pending Agents" value={metrics.pending_agent_count || 0} />
//           </div>
//         )}

//         {/* Pending Agents Table */}
//         <section className="mb-12">
//           <h2 className="text-lg font-semibold mb-2">Pending Agents</h2>
//           {pendingAgents.length === 0 ? (
//             <div className="text-gray-500">No pending agents</div>
//           ) : (
//             <table className="min-w-full bg-white border">
//               <thead>
//                 <tr>
//                   <th className="px-3 py-2 text-left">Name</th>
//                   <th className="px-3 py-2 text-left">Email</th>
//                   <th className="px-3 py-2 text-left">Status</th>
//                   <th className="px-3 py-2 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {pendingAgents.map(agent => (
//                   <tr key={agent.id}>
//                     <td className="px-3 py-2">{agent.name}</td>
//                     <td className="px-3 py-2">{agent.email}</td>
//                     <td className="px-3 py-2">{agent.status || "PENDING"}</td>
//                     <td className="px-3 py-2">
//                       <button onClick={() => AdminService.approveAgent(agent.id)} className="px-2 py-1 mr-2 bg-green-100 text-green-700 rounded">Approve</button>
//                       <button onClick={() => AdminService.rejectAgent(agent.id)} className="px-2 py-1 bg-red-100 text-red-700 rounded">Reject</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </section>

//         {/* Properties Table */}
//         <section>
//           <h2 className="text-lg font-semibold mb-2">Properties</h2>
//           {properties.length === 0 ? (
//             <div className="text-gray-500">No properties found</div>
//           ) : (
//             <table className="min-w-full bg-white border">
//               <thead>
//                 <tr>
//                   <th className="px-3 py-2">Title</th>
//                   <th className="px-3 py-2">City</th>
//                   <th className="px-3 py-2">Type</th>
//                   <th className="px-3 py-2">Status</th>
//                   <th className="px-3 py-2">Price</th>
//                   <th className="px-3 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {properties.map(prop => (
//                   <tr key={prop.id}>
//                     <td className="px-3 py-2">{prop.title}</td>
//                     <td className="px-3 py-2">{prop.city}</td>
//                     <td className="px-3 py-2">{prop.type || "N/A"}</td>
//                     <td className="px-3 py-2">{prop.status}</td>
//                     <td className="px-3 py-2">₹{prop.price?.toLocaleString()}</td>
//                     <td className="px-3 py-2">
//                       <button onClick={() => AdminService.approveProperty?.(prop.id)} className="px-2 py-1 mr-2 bg-green-100 text-green-700 rounded">Approve</button>
//                       <button onClick={() => AdminService.rejectProperty?.(prop.id, "Not suitable")} className="px-2 py-1 bg-red-100 text-red-700 rounded">Reject</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </section>
//       </div>
//     </AdminLayout>
//   );
// };

// const MetricCard = ({ label, value }: { label: string, value: number }) => (
//   <div className="bg-blue-50 border rounded-lg p-5 shadow">
//     <div className="text-xs text-gray-500">{label}</div>
//     <div className="text-xl font-bold">{value}</div>
//   </div>
// );

// export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { AdminService } from "../../services/adminService";
// import { AdminMetrics, Property, Agent } from "../../services/api";
// import AdminLayout from "../../components/admin/AdminLayout";
// import {
//   FiHome,
//   FiUser,
//   FiStar,
//   FiClock,
//   FiCheck,
//   FiX,
//   FiDollarSign,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const AdminDashboard: React.FC = () => {
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [pendingAgents, setPendingAgents] = useState<Agent[]>([]);
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     Promise.all([
//       AdminService.getMetricsCounts(),
//       AdminService.getPendingAgents(),
//       AdminService.getAllProperties(),
//     ])
//       .then(([metricsRes, agentsRes, propsRes]) => {
//         if (metricsRes.success) setMetrics(metricsRes.data || null);
//         if (agentsRes.success) setPendingAgents(agentsRes.data || []);
//         if (propsRes.success) setProperties(propsRes.data || []);
//         setError(metricsRes.error || agentsRes.error || propsRes.error || null);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const handleApproveProperty = async (id: string) => {
//     try {
//       await AdminService.approveProperty?.(id);
//       setProperties(
//         properties.map((prop) =>
//           prop.id === id ? { ...prop, status: "APPROVED" } : prop
//         )
//       );
//     } catch (err) {
//       setError("Failed to approve property");
//     }
//   };

//   const handleRejectProperty = async (id: string) => {
//     try {
//       await AdminService.rejectProperty?.(id, "Not suitable");
//       setProperties(properties.filter((prop) => prop.id !== id));
//     } catch (err) {
//       setError("Failed to reject property");
//     }
//   };

//   const handleApproveAgent = async (id: number) => {
//     console.log("Approving agent with ID:", id); // 👈 Add this
//     try {
//       await AdminService.approveAgent(id);
//       setPendingAgents(pendingAgents.filter((agent) => agent.id !== id));
//     } catch (err) {
//       console.error(err); // 👈 Print the real error
//       setError("Failed to approve agent");
//     }
//   };

//   const handleRejectAgent = async (id: number) => {
//     try {
//       await AdminService.rejectAgent(id);
//       setPendingAgents(pendingAgents.filter((agent) => agent.id !== id));
//     } catch (err) {
//       setError("Failed to reject agent");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6 max-w-screen-2xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//           <div className="text-sm text-gray-500">
//             Last updated: {new Date().toLocaleString()}
//           </div>
//         </div>

//         {loading && (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
//             <p>Error: {error}</p>
//           </div>
//         )}

//         {/* Metrics Cards */}
//         {metrics && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <MetricCard
//               label="Total Properties"
//               value={metrics.property_count || 0}
//               icon={<FiHome className="text-blue-500" />}
//               trend="up"
//             />
//             <MetricCard
//               label="Total Agents"
//               value={metrics.agent_count || 0}
//               icon={<FiUser className="text-green-500" />}
//               trend="up"
//             />
//             <MetricCard
//               label="Featured Properties"
//               value={metrics.featured_property_count || 0}
//               icon={<FiStar className="text-yellow-500" />}
//             />
//             <MetricCard
//               label="Pending Agents"
//               value={metrics.pending_agent_count || 0}
//               icon={<FiClock className="text-orange-500" />}
//             />
//           </div>
//         )}

//         {/* Pending Agents Section */}
//         <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Pending Agent Approvals
//             </h2>
//             <span className="text-sm text-gray-500">
//               {pendingAgents.length} pending
//             </span>
//           </div>

//           {pendingAgents.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <FiCheck className="mx-auto text-2xl text-green-500 mb-2" />
//               <p>No pending agents</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {pendingAgents.map((agent) => (
//                     <tr key={agent.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
//                             <FiUser className="text-blue-500" />
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {agent.name}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {agent.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                           {agent.status || "PENDING"}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <button
//                           onClick={() => handleApproveAgent(agent.id)}
//                           className="mr-2 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => handleRejectAgent(agent.id)}
//                           className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Properties Section */}
//         <section className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Property Listings
//             </h2>
//             <span className="text-sm text-gray-500">
//               {properties.length} properties
//             </span>
//           </div>

//           {properties.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <FiHome className="mx-auto text-2xl text-blue-500 mb-2" />
//               <p>No properties found</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Title
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       City
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Type
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {properties.map((prop) => (
//                     <tr key={prop.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         {prop.title}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {prop.city}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {prop.type || "N/A"}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             prop.status === "APPROVED"
//                               ? "bg-green-100 text-green-800"
//                               : prop.status === "PENDING"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {prop.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <div className="flex items-center">
//                           <FiDollarSign className="text-gray-400 mr-1" />
//                           {prop.price?.toLocaleString()}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         {prop.status === "PENDING" && (
//                           <>
//                             <button
//                               onClick={() => handleApproveProperty(prop.id)}
//                               className="mr-2 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
//                             >
//                               Approve
//                             </button>
//                             <button
//                               onClick={() => handleRejectProperty(prop.id)}
//                               className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
//                             >
//                               Reject
//                             </button>
//                           </>
//                         )}
//                         <Link
//                           to={`/property/${prop.id}`}
//                           className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
//                         ></Link>
//                         {prop.status === "APPROVED" && (
//                           <span className="text-green-600">Approved</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>
//       </div>
//     </AdminLayout>
//   );
// };

// const MetricCard = ({
//   label,
//   value,
//   icon,
//   trend,
// }: {
//   label: string;
//   value: number;
//   icon: React.ReactNode;
//   trend?: "up" | "down" | "neutral";
// }) => (
//   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//     <div className="flex justify-between">
//       <div>
//         <p className="text-sm font-medium text-gray-500">{label}</p>
//         <p className="text-2xl font-bold mt-1">{value}</p>
//       </div>
//       <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
//         {icon}
//       </div>
//     </div>
//     {trend && (
//       <div
//         className={`mt-2 text-sm flex items-center ${
//           trend === "up" ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {trend === "up" ? (
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M9 13a1 1 0 100-2H7V9h2a1 1 0 100-2H7V5a1 1 0 00-2 0v2H3a1 1 0 100 2h2v2H3a1 1 0 100 2h2v2a1 1 0 002 0v-2h2a1 1 0 100-2H9v-2z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//         {trend === "up" ? "5.2% increase" : "2.1% decrease"}
//       </div>
//     )}
//   </div>
// );

// export default AdminDashboard;




// import React, { useEffect, useState } from "react";
// import { AdminService } from "../../services/adminService";
// import { AdminMetrics, Property, Agent } from "../../services/api";
// import AdminLayout from "../../components/admin/AdminLayout";
// import {
//   FiHome,
//   FiUser,
//   FiStar,
//   FiClock,
//   FiCheck,
//   FiX,
//   FiDollarSign,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const AdminDashboard: React.FC = () => {
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [pendingAgents, setPendingAgents] = useState<Agent[]>([]);
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     Promise.all([
//       AdminService.getMetricsCounts(),
//       AdminService.getPendingAgents(),
//       AdminService.getAllProperties(),
//     ])
//       .then(([metricsRes, agentsRes, propsRes]) => {
//         if (metricsRes.success) setMetrics(metricsRes.data || null);
//         if (agentsRes.success) setPendingAgents(agentsRes.data || []);
//         if (propsRes.success) setProperties(propsRes.data || []);
//         setError(metricsRes.error || agentsRes.error || propsRes.error || null);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // Properties might have id as string or number - ensure type is consistent
//   const handleApproveProperty = async (id: string | number) => {
//     try {
//       await AdminService.approveProperty?.(id);
//       setProperties(
//         properties.map((prop) =>
//           String(prop.id) === String(id) ? { ...prop, status: "APPROVED" } : prop
//         )
//       );
//     } catch (err) {
//       setError("Failed to approve property");
//     }
//   };

//   const handleRejectProperty = async (id: string | number) => {
//     try {
//       await AdminService.rejectProperty?.(id, "Not suitable");
//       setProperties(properties.filter((prop) => String(prop.id) !== String(id)));
//     } catch (err) {
//       setError("Failed to reject property");
//     }
//   };

//   // IMPORTANT: Your Agent's id is probably a UUID string (userId from backend)
//   const handleApproveAgent = async (id: string) => {
//     try {
//       await AdminService.approveAgent(id);
//       setPendingAgents(pendingAgents.filter((agent) => String(agent.id) !== String(id)));
//     } catch (err) {
//       setError("Failed to approve agent");
//     }
//   };

//   const handleRejectAgent = async (id: string) => {
//     try {
//       await AdminService.rejectAgent(id);
//       setPendingAgents(pendingAgents.filter((agent) => String(agent.id) !== String(id)));
//     } catch (err) {
//       setError("Failed to reject agent");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="p-6 max-w-screen-2xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//           <div className="text-sm text-gray-500">
//             Last updated: {new Date().toLocaleString()}
//           </div>
//         </div>

//         {loading && (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
//             <p>Error: {error}</p>
//           </div>
//         )}

//         {/* Metrics Cards */}
//         {metrics && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <MetricCard
//               label="Total Properties"
//               value={metrics.property_count || 0}
//               icon={<FiHome className="text-blue-500" />}
//               trend="up"
//             />
//             <MetricCard
//               label="Total Agents"
//               value={metrics.agent_count || 0}
//               icon={<FiUser className="text-green-500" />}
//               trend="up"
//             />
//             <MetricCard
//               label="Featured Properties"
//               value={metrics.featured_property_count || 0}
//               icon={<FiStar className="text-yellow-500" />}
//             />
//             <MetricCard
//               label="Pending Agents"
//               value={metrics.pending_agent_count || 0}
//               icon={<FiClock className="text-orange-500" />}
//             />
//           </div>
//         )}

//         {/* Pending Agents Section */}
//         <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Pending Agent Approvals
//             </h2>
//             <span className="text-sm text-gray-500">
//               {pendingAgents.length} pending
//             </span>
//           </div>

//           {pendingAgents.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <FiCheck className="mx-auto text-2xl text-green-500 mb-2" />
//               <p>No pending agents</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {pendingAgents.map((agent) => (
//                     <tr key={agent.id || agent.userId}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
//                             <FiUser className="text-blue-500" />
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {agent.name}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {agent.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                           {agent.status || "PENDING"}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <button
//                           onClick={() =>
//                             handleApproveAgent(
//                               (agent.id || agent.userId) as string
//                             )
//                           }
//                           className="mr-2 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() =>
//                             handleRejectAgent(
//                               (agent.id || agent.userId) as string
//                             )
//                           }
//                           className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Properties Section */}
//         <section className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Property Listings
//             </h2>
//             <span className="text-sm text-gray-500">
//               {properties.length} properties
//             </span>
//           </div>

//           {properties.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <FiHome className="mx-auto text-2xl text-blue-500 mb-2" />
//               <p>No properties found</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Title
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       City
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Type
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {properties.map((prop) => (
//                     <tr key={String(prop.id)}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         {prop.title}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {prop.city}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {prop.type || "N/A"}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             prop.status === "APPROVED"
//                               ? "bg-green-100 text-green-800"
//                               : prop.status === "PENDING"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {prop.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <div className="flex items-center">
//                           <FiDollarSign className="text-gray-400 mr-1" />
//                           {prop.price?.toLocaleString()}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         {prop.status === "PENDING" && (
//                           <>
//                             <button
//                               onClick={() =>
//                                 handleApproveProperty(prop.id)
//                               }
//                               className="mr-2 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
//                             >
//                               Approve
//                             </button>
//                             <button
//                               onClick={() =>
//                                 handleRejectProperty(prop.id)
//                               }
//                               className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
//                             >
//                               Reject
//                             </button>
//                           </>
//                         )}
//                         <Link
//                           to={`/property/${prop.id}`}
//                           className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
//                         >
//                           Details
//                         </Link>
//                         {prop.status === "APPROVED" && (
//                           <span className="ml-2 text-green-600">Approved</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>
//       </div>
//     </AdminLayout>
//   );
// };

// const MetricCard = ({
//   label,
//   value,
//   icon,
//   trend,
// }: {
//   label: string;
//   value: number;
//   icon: React.ReactNode;
//   trend?: "up" | "down" | "neutral";
// }) => (
//   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//     <div className="flex justify-between">
//       <div>
//         <p className="text-sm font-medium text-gray-500">{label}</p>
//         <p className="text-2xl font-bold mt-1">{value}</p>
//       </div>
//       <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
//         {icon}
//       </div>
//     </div>
//     {trend && (
//       <div
//         className={`mt-2 text-sm flex items-center ${
//           trend === "up" ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {trend === "up" ? (
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M9 13a1 1 0 100-2H7V9h2a1 1 0 100-2H7V5a1 1 0 00-2 0v2H3a1 1 0 100 2h2v2H3a1 1 0 100 2h2v2a1 1 0 002 0v-2h2a1 1 0 100-2H9v-2z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//         {trend === "up" ? "5.2% increase" : "2.1% decrease"}
//       </div>
//     )}
//   </div>
// );

// export default AdminDashboard;




import React, { useEffect, useState, useCallback } from "react";
import { AdminService } from "../../services/adminService";
import { AdminMetrics, Property, Agent } from "../../services/api";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FiHome,
  FiUser,
  FiStar,
  FiClock,
  FiCheck,
  FiX,
  FiDollarSign,
  FiAlertCircle,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [pendingAgents, setPendingAgents] = useState<Agent[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"properties" | "agents">("properties");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [metricsRes, agentsRes, propsRes] = await Promise.all([
        AdminService.getMetricsCounts(),
        AdminService.getPendingAgents(),
        AdminService.getAllProperties(),
      ]);

      if (!metricsRes.success || !agentsRes.success || !propsRes.success) {
        throw new Error(
          metricsRes.error || agentsRes.error || propsRes.error || "Failed to fetch data"
        );
      }

      setMetrics(metricsRes.data || null);
      setPendingAgents(agentsRes.data || []);
      setProperties(propsRes.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleApproveProperty = async (id: string | number) => {
    try {
      await AdminService.approveProperty?.(id);
      setProperties(
        properties.map((prop) =>
          String(prop.id) === String(id) ? { ...prop, status: "APPROVED" } : prop
        )
      );
    } catch (err) {
      setError("Failed to approve property");
    }
  };

  const handleRejectProperty = async (id: string | number) => {
    try {
      await AdminService.rejectProperty?.(id, "Not suitable");
      setProperties(properties.filter((prop) => String(prop.id) !== String(id)));
    } catch (err) {
      setError("Failed to reject property");
    }
  };

  const handleApproveAgent = async (id: string) => {
    try {
      await AdminService.approveAgent(id);
      setPendingAgents(pendingAgents.filter((agent) => String(agent.id) !== String(id)));
      // Update metrics if available
      if (metrics) {
        setMetrics({
          ...metrics,
          agent_count: (metrics.agent_count || 0) + 1,
          pending_agent_count: (metrics.pending_agent_count || 0) - 1,
        });
      }
    } catch (err) {
      setError("Failed to approve agent");
    }
  };

  const handleRejectAgent = async (id: string) => {
    try {
      await AdminService.rejectAgent(id);
      setPendingAgents(pendingAgents.filter((agent) => String(agent.id) !== String(id)));
      // Update metrics if available
      if (metrics) {
        setMetrics({
          ...metrics,
          pending_agent_count: (metrics.pending_agent_count || 0) - 1,
        });
      }
    } catch (err) {
      setError("Failed to reject agent");
    }
  };

  const pendingProperties = properties.filter((prop) => prop.status === "PENDING");

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>Last updated: {new Date().toLocaleString()}</span>
            <button
              onClick={fetchData}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
            >
              Refresh
            </button>
          </div>
        </div>

        {loading && <DashboardSkeleton />}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded flex items-start gap-3">
            <FiAlertCircle className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Error loading data</p>
              <p className="text-sm">{error}</p>
              <button
                onClick={fetchData}
                className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="Total Properties"
            value={metrics?.property_count || 0}
            icon={<FiHome className="text-blue-500" />}
            trend="up"
            loading={loading}
          />
          <MetricCard
            label="Total Agents"
            value={metrics?.agent_count || 0}
            icon={<FiUser className="text-green-500" />}
            trend="up"
            loading={loading}
          />
          <MetricCard
            label="Featured Properties"
            value={metrics?.featured_property_count || 0}
            icon={<FiStar className="text-yellow-500" />}
            loading={loading}
          />
          <MetricCard
            label="Pending Approvals"
            value={(metrics?.pending_agent_count || 0) + pendingProperties.length}
            icon={<FiClock className="text-orange-500" />}
            loading={loading}
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium text-sm ${activeTab === "properties" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("properties")}
          >
            Properties
            {pendingProperties.length > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                {pendingProperties.length}
              </span>
            )}
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${activeTab === "agents" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("agents")}
          >
            Agents
            {pendingAgents.length > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                {pendingAgents.length}
              </span>
            )}
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "agents" ? (
          <PendingAgentsSection
            pendingAgents={pendingAgents}
            onApprove={handleApproveAgent}
            onReject={handleRejectAgent}
            loading={loading}
          />
        ) : (
          <PropertiesSection
            properties={properties}
            pendingProperties={pendingProperties}
            onApprove={handleApproveProperty}
            onReject={handleRejectProperty}
            loading={loading}
          />
        )}
      </div>
    </AdminLayout>
  );
};

// Sub-components for better organization

const DashboardSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-sm h-32">
          <Skeleton height={24} width="60%" />
          <Skeleton height={36} width="40%" className="mt-2" />
        </div>
      ))}
    </div>
    <div className="bg-white rounded-lg shadow-sm p-6 h-64">
      <Skeleton height={28} width="30%" className="mb-4" />
      <Skeleton count={5} height={48} className="mb-2" />
    </div>
  </div>
);

const MetricCard = ({
  label,
  value,
  icon,
  trend,
  loading = false,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  loading?: boolean;
}) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{loading ? <Skeleton width={100} /> : label}</p>
        <p className="text-2xl font-bold mt-1">
          {loading ? <Skeleton width={60} /> : value.toLocaleString()}
        </p>
      </div>
      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
        {loading ? <Skeleton circle height={40} width={40} /> : icon}
      </div>
    </div>
    {trend && !loading && (
      <div
        className={`mt-2 text-sm flex items-center ${
          trend === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {trend === "up" ? (
          <FiTrendingUp className="w-4 h-4 mr-1" />
        ) : (
          <FiTrendingDown className="w-4 h-4 mr-1" />
        )}
        {trend === "up" ? "5.2% increase" : "2.1% decrease"}
      </div>
    )}
  </div>
);

const PendingAgentsSection = ({
  pendingAgents,
  onApprove,
  onReject,
  loading,
}: {
  pendingAgents: Agent[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
}) => (
  <section className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Pending Agent Approvals
      </h2>
      <span className="text-sm text-gray-500">
        {pendingAgents.length} pending
      </span>
    </div>

    {loading && pendingAgents.length === 0 ? (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-gray-100 rounded-lg p-4">
            <Skeleton height={20} width="30%" className="mb-2" />
            <Skeleton height={16} width="50%" />
            <div className="flex mt-4 gap-2">
              <Skeleton height={32} width={80} />
              <Skeleton height={32} width={80} />
            </div>
          </div>
        ))}
      </div>
    ) : pendingAgents.length === 0 ? (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        <FiCheck className="mx-auto text-2xl text-green-500 mb-2" />
        <p>No pending agent approvals</p>
        <p className="text-sm mt-1">All agents have been processed</p>
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingAgents.map((agent) => (
              <tr key={agent.id || agent.userId}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiUser className="text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {agent.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Joined: {new Date(agent.createdAt || "").toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {agent.email}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {agent.phone || "N/A"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {agent.status || "PENDING"}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => onApprove((agent.id || agent.userId) as string)}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => onReject((agent.id || agent.userId) as string)}
                    className="px-3 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors text-sm"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

const PropertiesSection = ({
  properties,
  pendingProperties,
  onApprove,
  onReject,
  loading,
}: {
  properties: Property[];
  pendingProperties: Property[];
  onApprove: (id: string | number) => void;
  onReject: (id: string | number) => void;
  loading: boolean;
}) => (
  <section className="bg-white rounded-lg shadow-sm p-4 md:p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Property Listings
      </h2>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">
          {properties.length} total
        </span>
        {pendingProperties.length > 0 && (
          <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded">
            {pendingProperties.length} pending
          </span>
        )}
      </div>
    </div>

    {loading && properties.length === 0 ? (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-gray-100 rounded-lg p-4">
            <Skeleton height={20} width="40%" className="mb-2" />
            <div className="flex gap-4">
              <Skeleton height={16} width="20%" />
              <Skeleton height={16} width="20%" />
              <Skeleton height={16} width="20%" />
            </div>
            <div className="flex mt-4 gap-2">
              <Skeleton height={32} width={80} />
              <Skeleton height={32} width={80} />
              <Skeleton height={32} width={80} />
            </div>
          </div>
        ))}
      </div>
    ) : properties.length === 0 ? (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        <FiHome className="mx-auto text-2xl text-blue-500 mb-2" />
        <p>No properties found</p>
        <p className="text-sm mt-1">Add new properties to get started</p>
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((prop) => (
              <tr key={String(prop.id)}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {prop.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {prop.agent?.name || "No agent"}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{prop.city}</div>
                  <div className="text-xs text-gray-500">{prop.address}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                  {prop.type?.toLowerCase() || "N/A"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      prop.status === "APPROVED"
                        ? "bg-green-100 text-green-800"
                        : prop.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {prop.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <FiDollarSign className="text-gray-400 mr-1 flex-shrink-0" />
                    {prop.price?.toLocaleString() || "N/A"}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {prop.status === "PENDING" && (
                    <>
                      <button
                        onClick={() => onApprove(prop.id)}
                        className="px-2 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onReject(prop.id)}
                        className="px-2 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors text-sm"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <Link
                    to={`/property/${prop.id}`}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors text-sm inline-block"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

export default AdminDashboard;