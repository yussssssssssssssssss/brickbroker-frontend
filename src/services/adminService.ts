import { apiRequest, ApiResponse, Agent, AdminMetrics, PropertyByMonth, PropertyByCity, PropertyByType, TopAgent } from './api';
import { PropertyService } from './propertyService';

export class AdminService {
  // Get pending agents for approval - matches /admin/pending-agents endpoint
  static async getPendingAgents(): Promise<ApiResponse<Agent[]>> {
    return apiRequest<Agent[]>('/admin/pending-agents');
  }
  



static async approveAgent(userId: string): Promise<ApiResponse<any>> {
  if (!userId || typeof userId !== 'string' || userId === 'undefined' || userId === 'null') {
    throw new Error(`Invalid agentId: ${userId}`);
  }
  return apiRequest<any>(`/admin/approve-agent/${userId}`, { method: 'PUT' });
}

static async rejectAgent(userId: string): Promise<ApiResponse<any>> {
  if (!userId || typeof userId !== 'string' || userId === 'undefined' || userId === 'null') {
    throw new Error(`Invalid agentId: ${userId}`);
  }
  return apiRequest<any>(`/admin/reject-agent/${userId}`, { method: 'PUT' });
}





  static async getRecentProperties(): Promise<ApiResponse<any[]>> {
  return apiRequest<any[]>('/admin/metrics/recent-properties', {
    method: 'GET',
  });
}


  // Get admin dashboard metrics/counts - matches /admin/metrics/counts endpoint
  static async getMetricsCounts(): Promise<ApiResponse<AdminMetrics>> {
    return apiRequest<AdminMetrics>('/admin/metrics/counts');
  }

  // Get properties by month data - matches /admin/metrics/properties-by-month endpoint
  static async getPropertiesByMonth(): Promise<ApiResponse<PropertyByMonth[]>> {
    return apiRequest<PropertyByMonth[]>('/admin/metrics/properties-by-month');
  }

  static async getAllProperties(): Promise<ApiResponse<any[]>> {
  console.log("🔥 Calling GET /admin/properties");
  return apiRequest<any[]>('/admin/properties', { method: 'GET' });
}


  // Get properties by city data - matches /admin/metrics/properties-by-city endpoint
  static async getPropertiesByCity(): Promise<ApiResponse<PropertyByCity[]>> {
    return apiRequest<PropertyByCity[]>('/admin/metrics/properties-by-city');
  }

  // Get properties by type data - matches /admin/metrics/properties-by-type endpoint
  static async getPropertiesByType(): Promise<ApiResponse<PropertyByType[]>> {
    return apiRequest<PropertyByType[]>('/admin/metrics/properties-by-type');
  }

  // Get top performing agents - matches /admin/metrics/top-agents endpoint
  static async getTopAgents(): Promise<ApiResponse<TopAgent[]>> {
    return apiRequest<TopAgent[]>('/admin/metrics/top-agents');
  }

  // Get all agents (for management)
  static async getAllAgents(): Promise<ApiResponse<Agent[]>> {
    return apiRequest<Agent[]>('/admin/pending-agents'); // Using existing endpoint for now
  }

  // Update agent status
static async updateAgentStatus(
  userId: string,
  status: 'APPROVED' | 'REJECTED' | 'PENDING'
): Promise<ApiResponse<any>> {
  console.log('[updateAgentStatus] called with:', { userId, status, typeOfUserId: typeof userId });

  if (!userId || typeof userId !== 'string') {
    console.error('[updateAgentStatus] Invalid or missing agent ID:', userId);
    return { success: false, error: 'Invalid or missing agent ID' };
  }

  switch (status) {
    case 'APPROVED':
      console.log('[updateAgentStatus] Approving agent:', userId);
      return this.approveAgent(userId);
    case 'REJECTED':
      console.log('[updateAgentStatus] Rejecting agent:', userId);
      return this.rejectAgent(userId);
    case 'PENDING':
      console.warn('[updateAgentStatus] Status set to PENDING is not allowed.');
      return { success: false, error: 'Cannot set status to PENDING from dashboard.' };
    default:
      console.error('[updateAgentStatus] Invalid status value:', status);
      return { success: false, error: `Invalid status: ${status}` };
  }
}



  // Delete agent (if needed in future)
  static async deleteAgent(agentId: string): Promise<ApiResponse<any>> {
    return apiRequest<any>(`/admin/delete-agent/${agentId}`, {
      method: 'DELETE'
    });
  }

  static async approveProperty(propertyId: string | number): Promise<ApiResponse<any>> {
  return apiRequest<any>(`/approve/${propertyId}`, { method: 'PUT' });
}
static async rejectProperty(propertyId: string | number, reason: string): Promise<ApiResponse<any>> {
  return apiRequest<any>(`/reject/${propertyId}?reason=${encodeURIComponent(reason)}`, { method: 'PUT' });
}


  // Get admin dashboard summary
  static async getDashboardSummary(): Promise<ApiResponse<{
  metrics: AdminMetrics;
  recentProperties: any[];
  pendingAgents: Agent[];
  recentActivity: any[];
}>> {
  try {
    const [metricsResponse, agentsResponse, propertiesResponse] = await Promise.all([
      this.getMetricsCounts(),
      this.getPendingAgents(),
      PropertyService.getRecentProperties()  // 👈 Fetch recent properties
    ]);

    if (metricsResponse.success && agentsResponse.success && propertiesResponse.success) {
      return {
        success: true,
        data: {
          metrics: metricsResponse.data!,
          pendingAgents: agentsResponse.data!,
          recentProperties: propertiesResponse.data!, // 👈 Set recent properties
          recentActivity: [] // Optionally fetch this later
        }
      };
    } else {
      return {
        success: false,
        error: metricsResponse.error || agentsResponse.error || propertiesResponse.error || 'Failed to fetch dashboard data'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch dashboard data'
    };
  }
}


}