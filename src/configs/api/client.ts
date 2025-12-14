import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { handleFetchError } from "./error";
import { API_ADDRESS } from "../app";
import { ClientAuthUtils } from "@/utils/auth-client";

// API Configuration
const API_BASE_URL = API_ADDRESS;

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Get token from cookies using ClientAuthUtils
    const token = ClientAuthUtils.getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const problem = handleFetchError(error);
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors (only for authentication)
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/users/refresh-token/")
    ) {
      originalRequest._retry = true;

      try {
        // Refresh token logic using cookies
        const refreshToken = ClientAuthUtils.getRefreshToken();

        if (refreshToken) {
          const response = await apiClient.post("/users/refresh-token/", {
            refresh: refreshToken,
          });

          if (response.data.access) {
            // Update access token in cookies
            const currentTokens = ClientAuthUtils.getTokens();
            if (currentTokens) {
              ClientAuthUtils.setTokens({
                access: response.data.access,
                refresh: currentTokens.refresh,
              });
            }

            originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
            return apiClient(originalRequest);
          }
        }
      } catch (refreshError) {
        // Handle refresh token failure (e.g., logout user)
        ClientAuthUtils.logout();
        return Promise.reject(problem);
      }
    }

    // For all other errors (including 400), reject with the problem
    return Promise.reject(problem);
  }
);

// Generic CRUD operations
export const api = {
  // GET request
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.get(url, config);
    return response.data;
  },

  // POST request
  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, data, config);
    return response.data;
  },

  // PUT request
  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, data, config);
    return response.data;
  },

  // PATCH request
  patch: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.patch(url, data, config);
    return response.data;
  },

  // OPTIONS request
  options: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.options(url, {
      ...config,
      data,
    });
    return response.data;
  },

  // POST FormData request
  postFormData: async <T>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // PUT FormData request
  putFormData: async <T>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // PATCH FormData request
  patchFormData: async <T>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.patch(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // DELETE request
  delete: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.delete(url, {
      ...config,
      data,
    });
    return response.data;
  },
};

export default api;
