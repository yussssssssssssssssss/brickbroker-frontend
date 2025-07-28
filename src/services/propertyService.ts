import { apiRequest, ApiResponse, Property } from './api';

export interface PropertySearchParams {
  city?: string;
  state?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  status?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

export interface AddPropertyRequest {
  title: string;
  description: string;
  city: string;
  state: string;
  address: string;
  pincode: string;
  type: 'APARTMENT' | 'VILLA' | 'STUDIO' | 'PENTHOUSE' | 'TOWNHOUSE' | 'COMMERCIAL';
  listingType: 'Residential' | 'Commercial';
  status: 'PUBLISHED' | 'PENDING' | 'DRAFT';
  price: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  yearBuilt: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  featured: boolean;
}

// Schedule Visit Request Interface
export interface ScheduleVisitRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  visitType: 'IN_PERSON' | 'VIRTUAL';
  propertyId: number;
}

export class PropertyService {
  // Get all properties
  static async getAllProperties(): Promise<ApiResponse<Property[]>> {
    return apiRequest<Property[]>('/admin/properties', { method: 'GET' });
  }

  // Search properties with filters
  static async searchProperties(params: PropertySearchParams): Promise<ApiResponse<Property[]>> {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value.toString());
      }
    });
    const queryString = queryParams.toString();
    const endpoint = `/admin/search${queryString ? `?${queryString}` : ''}`;
    return apiRequest<Property[]>(endpoint);
  }

  // Get property by ID
  static async getPropertyById(id: string): Promise<ApiResponse<Property>> {
    return apiRequest<Property>(`/${id}`);
  }

  static async getRecentProperties(): Promise<ApiResponse<any[]>> {
  return apiRequest<any[]>('/admin/metrics/recent-properties', {
    method: 'GET',
  });
}


  // Add new property
  static async addProperty(propertyData: AddPropertyRequest, images?: File[]): Promise<ApiResponse<Property>> {
    const formData = new FormData();
    formData.append('property', JSON.stringify(propertyData));
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append('file', image);
      });
    }
    return apiRequest<Property>('/api/properties', {
      method: 'POST',
      headers: {},
      body: formData
    });
  }

  // Update property
  static async updateProperty(id: string, propertyData: Partial<AddPropertyRequest>, images?: File[]): Promise<ApiResponse<Property>> {
    const formData = new FormData();
    formData.append('property', JSON.stringify(propertyData));
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append('file', image);
      });
    }
    return apiRequest<Property>(`/api/properties/${id}`, {
      method: 'PUT',
      headers: {},
      body: formData
    });
  }

  // Delete property
  static async deleteProperty(id: string): Promise<ApiResponse<any>> {
    return apiRequest<any>(`/api/properties/${id}`, {
      method: 'DELETE'
    });
  }

  // Schedule property visit
  static async scheduleVisit(data: ScheduleVisitRequest): Promise<ApiResponse<{ message: string }>> {
    return apiRequest<{ message: string }>('/api/visits', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}
