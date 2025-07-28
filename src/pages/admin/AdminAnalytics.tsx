// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { PropertyService } from '../../services/propertyService';
// import { useApi, useApiHealth } from '../../hooks/useApi';
// import { 
//   BarChart3, 
//   Users, 
//   Home, 
//   TrendingUp, 
//   DollarSign, 
//   Eye,
//   Calendar,
//   MapPin,
//   Phone,
//   Mail,
//   Star,
//   Shield,
//   Activity,
//   Award,
//   Clock,
//   Filter,
//   Search,
//   ChevronDown,
//   ArrowUpRight,
//   ArrowDownRight,
//   UserCheck,
//   FileText,
//   Target,
//   Wifi,
//   WifiOff,
//   RefreshCw
// } from 'lucide-react';

// const AdminAnalytics = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [sortBy, setSortBy] = useState('date');
//   const [error, setError] = useState<string | null>(null);

//   // Check API connectivity
//   const { isOnline, checking } = useApiHealth();

//   // Fallback data for when API is not available
//   const fallbackMetrics = {
//     totalProperties: 1234,
//     totalAgents: 89,
//     totalUsers: 2500,
//     pendingAgents: 12,
//     publishedProperties: 1100,
//     soldProperties: 567,
//     monthlyRevenue: 4520000,
//     websiteVisitors: 12500
//   };

//   const fallbackProperties = [
//     {
//       id: '1',
//       title: 'Luxury Apartment in DLF Phase 1',
//       city: 'Gurgaon',
//       state: 'Haryana',
//       price: 12000000,
//       status: 'PUBLISHED' as const,
//       createdAt: '2024-01-15',
//       agent: { id: '1', name: 'Suraj Adhwariya', email: 'suraj@brickbroker.in', phone: '+91 95992 71680' },
//       images: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300']
//     },
//     {
//       id: '2',
//       title: 'Modern Villa with Garden',
//       city: 'Gurgaon',
//       state: 'Haryana',
//       price: 21000000,
//       status: 'PENDING' as const,
//       createdAt: '2024-01-20',
//       agent: { id: '2', name: 'Priya Sharma', email: 'priya@brickbroker.in', phone: '+91 98765 43210' },
//       images: ['https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300']
//     }
//   ];
//   // API hooks for fetching data
//   const {
//     data: metricsData,
//     loading: metricsLoading,
//     error: metricsError,
//     refetch: refetchMetrics
//   } = useApi(() => AdminService.getMetricsCounts(), [], fallbackMetrics);

//   const {
//     data: propertiesData,
//     loading: propertiesLoading,
//     error: propertiesError,
//     refetch: refetchProperties
//   } = useApi(() => PropertyService.getAllProperties(), [], fallbackProperties);

//   const {
//     data: topAgentsData,
//     loading: topAgentsLoading,
//     error: topAgentsError
//   } = useApi(() => AdminService.getTopAgents());

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     const role = localStorage.getItem('userRole');
//     if (!token || role !== 'admin') {
//       navigate('/admin/login');
//       return;
//     }
    
//     // Set loading to false when all API calls are complete
//     if (!metricsLoading && !propertiesLoading && !topAgentsLoading) {
//       setIsLoading(false);
//     }
//   }, [navigate]);

//   // Update loading state when API calls complete
//   useEffect(() => {
//     if (!metricsLoading && !propertiesLoading && !topAgentsLoading) {
//       setIsLoading(false);
//     }
//   }, [metricsLoading, propertiesLoading, topAgentsLoading]);

//   // Handle any API errors
//   useEffect(() => {
//     if (metricsError || propertiesError || topAgentsError) {
//       setError(metricsError || propertiesError || topAgentsError || 'An error occurred');
//     }
//   }, [metricsError, propertiesError, topAgentsError]);

//   // Transform API data to match existing UI structure
//   const topMetrics = metricsData ? [
//     {
//       title: 'Total Properties Listed',
//       value: metricsData.totalProperties?.toLocaleString() || '0',
//       change: '+12%',
//       changeType: 'positive',
//       icon: Home,
//       color: 'from-blue-500 to-blue-600',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-600',
//       description: 'Active listings on platform'
//     },
//     {
//       title: 'Properties Sold',
//       value: metricsData.soldProperties?.toLocaleString() || '0',
//       change: '+8%',
//       changeType: 'positive',
//       icon: DollarSign,
//       color: 'from-green-500 to-green-600',
//       bgColor: 'bg-green-50',
//       textColor: 'text-green-600',
//       description: 'Successfully closed deals'
//     },
//     {
//       title: 'Properties Pending',
//       value: metricsData.pendingAgents?.toLocaleString() || '0',
//       change: '-3%',
//       changeType: 'negative',
//       icon: Clock,
//       color: 'from-yellow-500 to-yellow-600',
//       bgColor: 'bg-yellow-50',
//       textColor: 'text-yellow-600',
//       description: 'Awaiting approval'
//     },
//     {
//       title: 'Website Visitors',
//       value: metricsData.websiteVisitors ? `${(metricsData.websiteVisitors / 1000).toFixed(1)}K` : '0',
//       change: '+18%',
//       changeType: 'positive',
//       icon: Eye,
//       color: 'from-purple-500 to-purple-600',
//       bgColor: 'bg-purple-50',
//       textColor: 'text-purple-600',
//       description: 'Monthly unique visitors'
//     },
//     {
//       title: 'Active Agents',
//       value: metricsData.totalAgents?.toLocaleString() || '0',
//       change: '+5%',
//       changeType: 'positive',
//       icon: Users,
//       color: 'from-[#BC8664] to-[#A0734F]',
//       bgColor: 'bg-orange-50',
//       textColor: 'text-[#BC8664]',
//       description: 'Verified agent partners'
//     },
//     {
//       title: 'Property Requests',
//       value: '234', // This might need a separate API endpoint
//       change: '+15%',
//       changeType: 'positive',
//       icon: FileText,
//       color: 'from-teal-500 to-teal-600',
//       bgColor: 'bg-teal-50',
//       textColor: 'text-teal-600',
//       description: 'Buyer inquiries this month'
//     }
//   ] : [];

//   // Transform properties data for the table
//   const propertyData = propertiesData ? propertiesData.slice(0, 6).map(property => ({
//     id: property.id,
//     title: property.title,
//     location: `${property.city}, ${property.state}`,
//     price: property.price >= 10000000 
//       ? `₹${(property.price / 10000000).toFixed(1)} Cr`
//       : `₹${(property.price / 100000).toFixed(0)} Lac`,
//     status: property.status === 'PUBLISHED' ? 'Sold' : property.status === 'PENDING' ? 'Pending' : 'Not Sold',
//     buyerRequests: Math.floor(Math.random() * 20) + 1, // This would come from API
//     agentName: property.agent?.name || 'Unassigned',
//     listingDate: property.createdAt,
//     image: property.images?.[0] || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300'
//   })) : [
//     // Fallback data structure for when API is not available
//     {
//       id: 1,
//       title: 'Luxury Apartment in DLF Phase 1',
//       location: 'DLF Phase 1, Gurgaon',
//       price: '₹1.2 Cr',
//       status: 'Sold',
//       buyerRequests: 12,
//       agentName: 'Suraj Adhwariya',
//       listingDate: '2024-01-15',
//       image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       id: 2,
//       title: 'Modern Villa with Garden',
//       location: 'Golf Course Road, Gurgaon',
//       price: '₹2.1 Cr',
//       status: 'Not Sold',
//       buyerRequests: 8,
//       agentName: 'Priya Sharma',
//       listingDate: '2024-01-20',
//       image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       id: 3,
//       title: 'Contemporary Studio',
//       location: 'Sohna Road, Gurgaon',
//       price: '₹85 Lac',
//       status: 'Pending',
//       buyerRequests: 5,
//       agentName: 'Rahul Gupta',
//       listingDate: '2024-01-25',
//       image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       id: 4,
//       title: 'Premium Penthouse',
//       location: 'MG Road, Gurgaon',
//       price: '₹3.5 Cr',
//       status: 'Sold',
//       buyerRequests: 18,
//       agentName: 'Anjali Verma',
//       listingDate: '2024-01-10',
//       image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       id: 5,
//       title: 'Elegant Townhouse',
//       location: 'Dwarka Expressway, Gurgaon',
//       price: '₹1.6 Cr',
//       status: 'Not Sold',
//       buyerRequests: 6,
//       agentName: 'Vikash Kumar',
//       listingDate: '2024-01-28',
//       image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=300'
//     },
//     {
//       id: 6,
//       title: 'Spacious Family Home',
//       location: 'Sector 57, Gurgaon',
//       price: '₹1.8 Cr',
//       status: 'Not Sold',
//       buyerRequests: 9,
//       agentName: 'Neha Singh',
//       listingDate: '2024-01-22',
//       image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300'
//     }
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Sold':
//         return 'bg-green-100 text-green-700 border-green-200';
//       case 'Not Sold':
//         return 'bg-blue-100 text-blue-700 border-blue-200';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//     }
//   };

//   const filteredProperties = propertyData.filter(property => {
//     if (filterStatus === 'all') return true;
//     return property.status.toLowerCase().replace(' ', '') === filterStatus;
//   });

//   const sortedProperties = [...filteredProperties].sort((a, b) => {
//     switch (sortBy) {
//       case 'date':
//         return new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime();
//       case 'price':
//         const priceA = parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Cr', '0000000').replace('Lac', '00000'));
//         const priceB = parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Cr', '0000000').replace('Lac', '00000'));
//         return priceB - priceA;
//       case 'requests':
//         return b.buyerRequests - a.buyerRequests;
//       default:
//         return 0;
//     }
//   });

//   // Refresh all data
//   const handleRefresh = async () => {
//     setIsLoading(true);
//     setError(null);
//     await Promise.all([
//       refetchMetrics(),
//       refetchProperties()
//     ]);
//   };

//   if (isLoading) {
//     return (
//       <AdminLayout>
//         <div className="flex items-center justify-center h-32 sm:h-64">
//           <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#BC8664]"></div>
//         </div>
//       </AdminLayout>
//     );
//   }

//   // Error state
//   if (error && !metricsData && !propertiesData) {
//     return (
//       <AdminLayout>
//         <div className="flex flex-col items-center justify-center h-64 text-center">
//           <p className="text-red-600 mb-4">Error loading dashboard data: {error}</p>
//           <button onClick={handleRefresh} className="bg-[#BC8664] hover:bg-[#A0734F] text-white px-6 py-3 rounded-lg font-medium transition-colors">
//             Retry
//           </button>
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <div className="space-y-6 sm:space-y-8">
//         {/* Header */}
//         <div className="flex flex-col gap-4 relative">
//           <div>
//             <div className="flex items-center gap-3 mb-2">
//               <div className="p-2 bg-gradient-to-r from-[#BC8664] to-[#A0734F] rounded-xl shadow-lg">
//                 <BarChart3 size={24} className="text-white" />
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#484848] to-[#BC8664] bg-clip-text text-transparent">
//                 Analytics Dashboard
//               </h1>
//             </div>
//             <p className="text-[#7A7A7A] mt-1 sm:mt-2 text-sm sm:text-base">Comprehensive overview of your real estate business performance</p>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* API Status Indicator */}
//             <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
//               isOnline 
//                 ? 'bg-green-50 text-green-700 border border-green-200' 
//                 : 'bg-red-50 text-red-700 border border-red-200'
//             }`}>
//               {checking ? (
//                 <RefreshCw size={14} className="animate-spin" />
//               ) : isOnline ? (
//                 <Wifi size={14} />
//               ) : (
//                 <WifiOff size={14} />
//               )}
//               <span>{checking ? 'Checking...' : isOnline ? 'API Connected' : 'Using Demo Data'}</span>
//             </div>
            
//             <button 
//               onClick={handleRefresh}
//               className="bg-white/80 hover:bg-white border border-gray-200 hover:border-[#BC8664] text-[#BC8664] px-4 py-2 rounded-lg font-medium transition-all text-sm flex items-center gap-2 disabled:opacity-50"
//               disabled={metricsLoading || propertiesLoading}
//             >
//               <RefreshCw size={14} className={metricsLoading || propertiesLoading ? 'animate-spin' : ''} />
//               Refresh Data
//             </button>
//           <div className="flex items-center gap-2 text-xs sm:text-sm text-[#7A7A7A] bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-[#BC8664]/20 shadow-lg self-start">
//             <Calendar size={14} className="sm:w-4 sm:h-4" />
//             <span className="whitespace-nowrap">{new Date().toLocaleDateString('en-US', { 
//               weekday: 'long', 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}</span>
//           </div>
//           </div>
//         </div>

//         {/* Top Metrics Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {topMetrics.map((metric, index) => {
//             const Icon = metric.icon;
//             return (
//               <div key={index} className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 ${metric.bgColor}/20 relative overflow-hidden`}>
//                 {/* Background Pattern */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-current/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                
//                 <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
//                   <div className={`p-2 sm:p-3 bg-gradient-to-r ${metric.color} rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                     <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
//                   </div>
//                   <div className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
//                     metric.changeType === 'positive' 
//                       ? 'text-green-700 bg-gradient-to-r from-green-100 to-green-50 border border-green-200' 
//                       : 'text-red-700 bg-gradient-to-r from-red-100 to-red-50 border border-red-200'
//                   }`}>
//                     {metric.changeType === 'positive' ? (
//                       <ArrowUpRight size={12} />
//                     ) : (
//                       <ArrowDownRight size={12} />
//                     )}
//                     {metric.change}
//                   </div>
//                 </div>
//                 <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${metric.textColor} relative z-10`}>{metric.value}</h3>
//                 <p className="text-[#7A7A7A] text-xs sm:text-sm font-medium relative z-10">{metric.title}</p>
//                 <p className="text-[#7A7A7A] text-xs mt-1 relative z-10">{metric.description}</p>
//                 {metricsLoading && (
//                   <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#BC8664]"></div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Property Status Table */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
//           <div className="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-[#BC8664]/5 to-[#A0734F]/5">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-gradient-to-r from-[#BC8664] to-[#A0734F] rounded-lg shadow-lg">
//                   <Home size={18} className="text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-[#484848]">Property Status Overview</h2>
//                   <p className="text-sm text-[#7A7A7A]">Track all property listings and their performance</p>
//                 </div>
//               </div>
              
//               {/* Filters */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <div className="relative">
//                   <select
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                     className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all appearance-none bg-white text-sm min-w-[140px]"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="sold">Sold</option>
//                     <option value="notsold">Not Sold</option>
//                     <option value="pending">Pending</option>
//                   </select>
//                   <Filter size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A7A7A]" />
//                   <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7A7A7A]" />
//                 </div>
                
//                 <div className="relative">
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664]/20 focus:border-[#BC8664] transition-all appearance-none bg-white text-sm min-w-[140px]"
//                   >
//                     <option value="date">Sort by Date</option>
//                     <option value="price">Sort by Price</option>
//                     <option value="requests">Sort by Requests</option>
//                   </select>
//                   <BarChart3 size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A7A7A]" />
//                   <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7A7A7A]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Table Content */}
//           <div className="overflow-x-auto">
//             <div className="min-w-full">
//               {/* Table Header */}
//               <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-4 sm:px-6 py-3">
//                 <div className="grid grid-cols-12 gap-4 text-xs sm:text-sm font-semibold text-[#484848]">
//                   <div className="col-span-4 sm:col-span-3">Property</div>
//                   <div className="col-span-2 sm:col-span-2">Price</div>
//                   <div className="col-span-2 sm:col-span-2">Status</div>
//                   <div className="col-span-2 sm:col-span-2">Requests</div>
//                   <div className="col-span-2 sm:col-span-2">Agent</div>
//                   <div className="hidden sm:block sm:col-span-1">Date</div>
//                 </div>
//               </div>

//               {/* Table Rows */}
//               <div className="divide-y divide-gray-200">
//                 {sortedProperties.map((property) => (
//                   <div key={property.id} className="px-4 sm:px-6 py-4 hover:bg-gradient-to-r hover:from-[#BC8664]/5 hover:to-[#A0734F]/5 transition-all duration-300">
//                     <div className="grid grid-cols-12 gap-4 items-center">
//                       {/* Property Info */}
//                       <div className="col-span-4 sm:col-span-3">
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={property.image}
//                             alt={property.title}
//                             className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border-2 border-gray-200 shadow-sm"
//                           />
//                           <div className="min-w-0">
//                             <h3 className="font-semibold text-[#484848] truncate text-sm">{property.title}</h3>
//                             <div className="flex items-center gap-1 text-xs text-[#7A7A7A] mt-1">
//                               <MapPin size={10} />
//                               <span className="truncate">{property.location}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Price */}
//                       <div className="col-span-2 sm:col-span-2">
//                         <span className="font-bold text-[#BC8664] text-sm sm:text-base">{property.price}</span>
//                       </div>

//                       {/* Status */}
//                       <div className="col-span-2 sm:col-span-2">
//                         <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(property.status)}`}>
//                           {property.status}
//                         </span>
//                       </div>

//                       {/* Requests */}
//                       <div className="col-span-2 sm:col-span-2">
//                         <div className="flex items-center gap-1">
//                           <div className="p-1 bg-[#BC8664]/10 rounded border border-[#BC8664]/20">
//                             <Users size={10} className="text-[#BC8664]" />
//                           </div>
//                           <span className="font-medium text-[#484848] text-sm">{property.buyerRequests}</span>
//                         </div>
//                       </div>

//                       {/* Agent */}
//                       <div className="col-span-2 sm:col-span-2">
//                         <span className="text-sm text-[#7A7A7A] truncate block">{property.agentName}</span>
//                       </div>

//                       {/* Date */}
//                       <div className="hidden sm:block sm:col-span-1">
//                         <span className="text-xs text-[#7A7A7A]">
//                           {new Date(property.listingDate).toLocaleDateString('en-US', { 
//                             month: 'short', 
//                             day: 'numeric' 
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Table Footer */}
//           <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
//             <div className="flex items-center justify-between text-xs sm:text-sm text-[#7A7A7A]">
//               <span>Showing {sortedProperties.length} of {propertiesData?.length || propertyData.length} properties</span>
//               <button 
//                 onClick={() => navigate('/admin/properties')}
//                 className="text-[#BC8664] hover:text-[#A0734F] font-medium transition-colors"
//               >
//                 View All Properties →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-gradient-to-r from-[#BC8664] to-[#A0734F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
//             <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
//           </div>
          
//           <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
//             <div>
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="p-2 bg-white/20 rounded-xl border border-white/30 shadow-lg">
//                   <Target size={20} className="text-white" />
//                 </div>
//                 <h2 className="text-xl sm:text-2xl font-bold">Quick Actions</h2>
//               </div>
//               <p className="text-white/90 text-sm sm:text-base">Manage your real estate business efficiently</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//               <button 
//                 onClick={() => navigate('/admin/properties')}
//                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[44px] text-sm sm:text-base flex items-center justify-center gap-2"
//               >
//                 <Home size={18} />
//                 Manage Properties
//               </button>
//               <button 
//                 onClick={() => navigate('/admin/requests')}
//                 className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[44px] text-sm sm:text-base flex items-center justify-center gap-2"
//               >
//                 <FileText size={18} />
//                 Review Requests
//               </button>
//               <button 
//                 onClick={() => navigate('/admin/pending-agents')}
//                 className="bg-white text-[#BC8664] hover:bg-gray-100 hover:shadow-xl px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 min-h-[44px] text-sm sm:text-base flex items-center justify-center gap-2"
//               >
//                 <UserCheck size={18} />
//                 Agent Approvals
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminAnalytics;



// import React, { useEffect, useState } from "react";
// import { AdminService } from "../../services/adminService";
// import { AdminMetrics, PropertyByMonth, PropertyByCity, PropertyByType, TopAgent } from "../../services/api";
// import AdminLayout from "../../components/admin/AdminLayout";

// const AdminAnalytics: React.FC = () => {
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [topAgents, setTopAgents] = useState<TopAgent[]>([]);
//   const [propertiesByMonth, setPropertiesByMonth] = useState<PropertyByMonth[]>([]);
//   const [propertiesByCity, setPropertiesByCity] = useState<PropertyByCity[]>([]);
//   const [propertiesByType, setPropertiesByType] = useState<PropertyByType[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     Promise.all([
//       AdminService.getMetricsCounts(),
//       AdminService.getTopAgents(),
//       AdminService.getPropertiesByMonth(),
//       AdminService.getPropertiesByCity(),
//       AdminService.getPropertiesByType()
//     ]).then(([metricsRes, topAgentsRes, byMonthRes, byCityRes, byTypeRes]) => {
//       if (metricsRes.success) setMetrics(metricsRes.data || null);
//       if (topAgentsRes.success) setTopAgents(topAgentsRes.data || []);
//       if (byMonthRes.success) setPropertiesByMonth(byMonthRes.data || []);
//       if (byCityRes.success) setPropertiesByCity(byCityRes.data || []);
//       if (byTypeRes.success) setPropertiesByType(byTypeRes.data || []);
//       setError(metricsRes.error || topAgentsRes.error || byMonthRes.error || byCityRes.error || byTypeRes.error || null);
//     }).finally(() => setLoading(false));
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="p-6 max-w-screen-xl mx-auto">
//         <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
//         {loading && <div>Loading analytics...</div>}
//         {error && <div className="text-red-600">Error: {error}</div>}

//         {metrics && (
//           <>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
//               <MetricCard label="Total Properties" value={metrics.property_count ?? 0} />
//               <MetricCard label="Total Agents" value={metrics.agent_count ?? 0} />
//               <MetricCard label="Featured Properties" value={metrics.featured_property_count ?? 0} />
//               <MetricCard label="Pending Agents" value={metrics.pending_agent_count ?? 0} />
//             </div>

//             {/* Top Agents */}
//             <section className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">Top Agents</h2>
//               {topAgents.length === 0 ? <div>No data</div> : (
//                 <table className="min-w-full bg-white border">
//                   <thead>
//                     <tr>
//                       <th className="px-3 py-2">Name</th>
//                       <th className="px-3 py-2">Email</th>
//                       <th className="px-3 py-2">Properties</th>
//                       <th className="px-3 py-2">Rating</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {topAgents.map(agent => (
//                       <tr key={agent.id}>
//                         <td className="px-3 py-2">{agent.name}</td>
//                         <td className="px-3 py-2">{agent.email}</td>
//                         <td className="px-3 py-2">{agent.totalProperties}</td>
//                         <td className="px-3 py-2">{agent.ratings}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </section>

//             {/* Properties By Month */}
//             <section className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">Properties by Month</h2>
//               {propertiesByMonth.length === 0 ? <div>No data</div> : (
//                 <ul>
//                   {propertiesByMonth.map(pm => (
//                     <li key={pm.month}>
//                       {pm.month}: {pm.count}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </section>

//             {/* Properties By City */}
//             <section className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">Properties by City</h2>
//               {propertiesByCity.length === 0 ? <div>No data</div> : (
//                 <ul>
//                   {propertiesByCity.map(pc => (
//                     <li key={pc.city}>
//                       {pc.city}: {pc.count}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </section>

//             {/* Properties By Type */}
//             <section className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">Properties by Type</h2>
//               {propertiesByType.length === 0 ? <div>No data</div> : (
//                 <ul>
//                   {propertiesByType.map(pt => (
//                     <li key={pt.type}>
//                       {pt.type}: {pt.count}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </section>
//           </>
//         )}
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

// export default AdminAnalytics;



// import React, { useEffect, useState } from "react";
// import { AdminService } from "../../services/adminService";
// import { AdminMetrics, PropertyByMonth, PropertyByCity, PropertyByType, TopAgent } from "../../services/api";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

// const AdminAnalytics: React.FC = () => {
//   const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
//   const [topAgents, setTopAgents] = useState<TopAgent[]>([]);
//   const [propertiesByMonth, setPropertiesByMonth] = useState<PropertyByMonth[]>([]);
//   const [propertiesByCity, setPropertiesByCity] = useState<PropertyByCity[]>([]);
//   const [propertiesByType, setPropertiesByType] = useState<PropertyByType[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     Promise.all([
//       AdminService.getMetricsCounts(),
//       AdminService.getTopAgents(),
//       AdminService.getPropertiesByMonth(),
//       AdminService.getPropertiesByCity(),
//       AdminService.getPropertiesByType()
//     ]).then(([metricsRes, topAgentsRes, byMonthRes, byCityRes, byTypeRes]) => {
//       if (metricsRes.success) setMetrics(metricsRes.data || null);
//       if (topAgentsRes.success) setTopAgents(topAgentsRes.data || []);
//       if (byMonthRes.success) setPropertiesByMonth(byMonthRes.data || []);
//       if (byCityRes.success) setPropertiesByCity(byCityRes.data || []);
//       if (byTypeRes.success) setPropertiesByType(byTypeRes.data || []);
//       setError(metricsRes.error || topAgentsRes.error || byMonthRes.error || byCityRes.error || byTypeRes.error || null);
//     }).finally(() => setLoading(false));
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="p-6 max-w-screen-2xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
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

//         {metrics && (
//           <>
//             {/* Metrics Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <MetricCard 
//                 label="Total Properties" 
//                 value={metrics.property_count ?? 0} 
//                 trend="up" 
//                 change="5.2%"
//                 icon="🏠"
//               />
//               <MetricCard 
//                 label="Total Agents" 
//                 value={metrics.agent_count ?? 0} 
//                 trend="up" 
//                 change="3.1%"
//                 icon="👤"
//               />
//               <MetricCard 
//                 label="Featured Properties" 
//                 value={metrics.featured_property_count ?? 0} 
//                 trend="neutral"
//                 icon="⭐"
//               />
//               <MetricCard 
//                 label="Pending Agents" 
//                 value={metrics.pending_agent_count ?? 0} 
//                 trend="down" 
//                 change="2.4%"
//                 icon="⏳"
//               />
//             </div>

//             {/* Charts Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//               {/* Properties By Month Chart */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h2 className="text-lg font-semibold mb-4">Properties by Month</h2>
//                 {propertiesByMonth.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">No data available</div>
//                 ) : (
//                   <div className="h-80">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={propertiesByMonth}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="count" name="Properties" fill="#3B82F6" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 )}
//               </div>

//               {/* Properties By Type Chart */}
//               <div className="bg-white p-6 rounded-lg shadow-sm">
//                 <h2 className="text-lg font-semibold mb-4">Properties by Type</h2>
//                 {propertiesByType.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500">No data available</div>
//                 ) : (
//                   <div className="h-80">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={propertiesByType}
//                           cx="50%"
//                           cy="50%"
//                           labelLine={false}
//                           outerRadius={80}
//                           fill="#8884d8"
//                           dataKey="count"
//                           nameKey="type"
//                           label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                         >
//                           {propertiesByType.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                           ))}
//                         </Pie>
//                         <Tooltip />
//                         <Legend />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Top Agents Table */}
//             <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold text-gray-800">Top Performing Agents</h2>
//                 <span className="text-sm text-gray-500">
//                   {topAgents.length} agents
//                 </span>
//               </div>
//               {topAgents.length === 0 ? (
//                 <div className="text-center py-8 text-gray-500">
//                   <span className="text-2xl mb-2">👤</span>
//                   <p>No agent data available</p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {topAgents.map(agent => (
//                         <tr key={agent.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
//                                 <span className="text-blue-500">👤</span>
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{agent.name}</div>
//                                 <div className="text-sm text-gray-500">{agent.email}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">{agent.totalProperties}</div>
//                             <div className="text-xs text-gray-500">Listings</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
//                                 <div 
//                                   className="h-full bg-yellow-400" 
//                                   style={{ width: `${(agent.ratings / 5) * 100}%` }}
//                                 ></div>
//                               </div>
//                               <span className="ml-2 text-sm text-gray-700">{agent.ratings}/5</span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             <a href={`mailto:${agent.email}`} className="text-blue-600 hover:text-blue-800">
//                               Contact
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {/* Properties By City Table */}
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h2 className="text-lg font-semibold mb-4">Properties by City</h2>
//               {propertiesByCity.length === 0 ? (
//                 <div className="text-center py-8 text-gray-500">
//                   <span className="text-2xl mb-2">🏙️</span>
//                   <p>No city data available</p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {propertiesByCity.map(city => (
//                         <tr key={city.city} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">{city.city}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">{city.count}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">
//                               {((city.count / propertiesByCity.reduce((sum, item) => sum + item.count, 0)) * 100}%
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="px-2 inline-flex items-center text-xs font-semibold rounded-full bg-green-100 text-green-800">
//                               ↑ 12%
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// const MetricCard = ({ 
//   label, 
//   value, 
//   trend,
//   change,
//   icon
// }: { 
//   label: string, 
//   value: number,
//   trend?: "up" | "down" | "neutral",
//   change?: string,
//   icon?: string
// }) => (
//   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//     <div className="flex justify-between">
//       <div>
//         <p className="text-sm font-medium text-gray-500">{label}</p>
//         <p className="text-2xl font-bold mt-1">{value}</p>
//         {trend && change && (
//           <div className={`mt-2 text-sm flex items-center ${
//             trend === "up" ? "text-green-600" : 
//             trend === "down" ? "text-red-600" : "text-gray-600"
//           }`}>
//             {trend === "up" ? (
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
//               </svg>
//             ) : trend === "down" ? (
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M9 13a1 1 0 100-2H7V9h2a1 1 0 100-2H7V5a1 1 0 00-2 0v2H3a1 1 0 100 2h2v2H3a1 1 0 100 2h2v2a1 1 0 002 0v-2h2a1 1 0 100-2H9v-2z" clipRule="evenodd" />
//               </svg>
//             ) : null}
//             {change}
//           </div>
//         )}
//       </div>
//       {icon && (
//         <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">
//           {icon}
//         </div>
//       )}
//     </div>
//   </div>
// );

// export default AdminAnalytics;


import React, { useEffect, useState } from "react";
import { AdminService } from "../../services/adminService";
import {
  AdminMetrics,
  PropertyByMonth,
  PropertyByCity,
  PropertyByType,
  TopAgent
} from "../../services/api";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const MetricCard = ({
  label,
  value,
  trend,
  change,
  icon
}: {
  label: string,
  value: number,
  trend?: "up" | "down" | "neutral",
  change?: string,
  icon?: string
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {trend && change && (
          <div className={`mt-2 text-sm flex items-center ${
            trend === "up" ? "text-green-600" :
            trend === "down" ? "text-red-600" : "text-gray-600"
          }`}>
            {trend === "up" ? (
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l5-5 5 5H5z" clipRule="evenodd" />
              </svg>
            ) : trend === "down" ? (
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10l5 5 5-5H5z" clipRule="evenodd" />
              </svg>
            ) : null}
            {change}
          </div>
        )}
      </div>
      {icon && (
        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">
          {icon}
        </div>
      )}
    </div>
  </div>
);

const AdminAnalytics: React.FC = () => {
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [topAgents, setTopAgents] = useState<TopAgent[]>([]);
  const [propertiesByMonth, setPropertiesByMonth] = useState<PropertyByMonth[]>([]);
  const [propertiesByCity, setPropertiesByCity] = useState<PropertyByCity[]>([]);
  const [propertiesByType, setPropertiesByType] = useState<PropertyByType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      AdminService.getMetricsCounts(),
      AdminService.getTopAgents(),
      AdminService.getPropertiesByMonth(),
      AdminService.getPropertiesByCity(),
      AdminService.getPropertiesByType()
    ])
      .then(([metricsRes, topAgentsRes, byMonthRes, byCityRes, byTypeRes]) => {
        if (metricsRes.success) setMetrics(metricsRes.data || null);
        if (topAgentsRes.success) setTopAgents(topAgentsRes.data || []);
        if (byMonthRes.success) setPropertiesByMonth(byMonthRes.data || []);
        if (byCityRes.success) setPropertiesByCity(byCityRes.data || []);
        if (byTypeRes.success) setPropertiesByType(byTypeRes.data || []);
        setError(metricsRes.error || topAgentsRes.error || byMonthRes.error || byCityRes.error || byTypeRes.error || null);
      })
      .finally(() => setLoading(false));
  }, []);

  // For percentage in city table
  const cityTotal = propertiesByCity.reduce((sum, c) => sum + c.count, 0) || 1;

  return (
    <AdminLayout>
      <div className="p-6 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
              <p>Error: {error}</p>
          </div>
        )}

        {metrics && (
          <>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                label="Total Properties"
                value={metrics.property_count ?? 0}
                trend="up"
                change="5.2%"
                icon="🏠"
              />
              <MetricCard
                label="Total Agents"
                value={metrics.agent_count ?? 0}
                trend="up"
                change="3.1%"
                icon="👤"
              />
              <MetricCard
                label="Featured Properties"
                value={metrics.featured_property_count ?? 0}
                trend="neutral"
                icon="⭐"
              />
              <MetricCard
                label="Pending Agents"
                value={metrics.pending_agent_count ?? 0}
                trend="down"
                change="2.4%"
                icon="⏳"
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Properties By Month Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Properties by Month</h2>
                {propertiesByMonth.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No data available</div>
                ) : (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={propertiesByMonth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" name="Properties" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
              {/* Properties By Type Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Properties by Type</h2>
                {propertiesByType.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No data available</div>
                ) : (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={propertiesByType}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                          nameKey="type"
                          label={({ type, percent }) =>
                            `${type}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {propertiesByType.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            </div>

            {/* Top Agents Table */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Top Performing Agents</h2>
                <span className="text-sm text-gray-500">
                  {topAgents.length} agents
                </span>
              </div>
              {topAgents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-2xl mb-2">👤</span>
                  <p>No agent data available</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topAgents.map(agent => (
                        <tr key={agent.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-500">👤</span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                                <div className="text-sm text-gray-500">{agent.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{agent.totalProperties}</div>
                            <div className="text-xs text-gray-500">Listings</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-yellow-400"
                                  style={{ width: `${(agent.ratings / 5) * 100}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{agent.ratings}/5</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href={`mailto:${agent.email}`} className="text-blue-600 hover:text-blue-800">
                              Contact
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Properties By City Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Properties by City</h2>
              {propertiesByCity.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <span className="text-2xl mb-2">🏙️</span>
                  <p>No city data available</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Properties</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {propertiesByCity.map(city => (
                        <tr key={city.city}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{city.city}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{city.count}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {((city.count / cityTotal) * 100).toFixed(1)}%
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex items-center text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              ↑ 12%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
