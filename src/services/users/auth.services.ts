import api from "@/configs/api/client";
import { API_PATHS } from "@/constants/api-paths";
import { useMutation } from "@tanstack/react-query";
import { ReactQueryCallbacks } from "@/types/base.api";
import {
  ILoginResponse,
  IRegisterResponse,
  IRegisterConfirmationResponse,
  IResetPasswordResponse,
  IResetPasswordConfirmationResponse,
  IRefreshTokenResponse,
  IChangePasswordResponse,
  ILoginParams,
  IRegisterParams,
  IRegisterConfirmationParams,
  IResetPasswordParams,
  IResetPasswordConfirmationParams,
  IChangePasswordParams,
  ITokenVerifyParams,
  ITokenVerifyResponse,
} from "@/models/users/auth.model";

// ========================================
// Query Keys
// ========================================

const AUTH_QUERY_KEYS = {
  ROOT: "users-auth",
  LOGIN: ["users-auth", "login"],
  REGISTER: ["users-auth", "register"],
  REGISTER_CONFIRMATION: ["users-auth", "register-confirmation"],
  RESET_PASSWORD: ["users-auth", "reset-password"],
  RESET_PASSWORD_CONFIRMATION: ["users-auth", "reset-password-confirmation"],
  LOGOUT: ["users-auth", "logout"],
  REFRESH: ["users-auth", "refresh"],
  CHANGE_PASSWORD: ["users-auth", "change-password"],
  VERIFY_TOKEN: ["users-auth", "verify-token"],
} as const;

// ========================================
// Query Functions
// ========================================

const queryFns = {
  login: async (data: ILoginParams): Promise<ILoginResponse> => {
    return await api.post<ILoginResponse>(API_PATHS.USERS.AUTH.LOGIN, data);
  },

  register: async (data: IRegisterParams): Promise<IRegisterResponse> => {
    const { confirm_password, ...apiData } = data;
    return await api.post<IRegisterResponse>(
      API_PATHS.USERS.AUTH.SIGNUP,
      apiData
    );
  },

  registerConfirmation: async (
    data: IRegisterConfirmationParams
  ): Promise<IRegisterConfirmationResponse> => {
    return await api.put<IRegisterConfirmationResponse>(
      API_PATHS.USERS.AUTH.REGISTER_CONFIRMATION,
      data
    );
  },

  resetPassword: async (
    data: IResetPasswordParams
  ): Promise<IResetPasswordResponse> => {
    return await api.post<IResetPasswordResponse>(
      API_PATHS.USERS.AUTH.RESET_PASSWORD,
      data
    );
  },

  resetPasswordConfirmation: async (
    data: IResetPasswordConfirmationParams
  ): Promise<IResetPasswordConfirmationResponse> => {
    const { confirm_new_password, ...apiData } = data;
    return await api.put<IResetPasswordConfirmationResponse>(
      API_PATHS.USERS.AUTH.RESET_PASSWORD_CONFIRMATION,
      apiData
    );
  },

  logout: async (): Promise<void> => {
    return await api.post<void>(API_PATHS.USERS.AUTH.LOGOUT);
  },

  refreshToken: async (data: {
    refresh: string;
  }): Promise<IRefreshTokenResponse> => {
    return await api.post<IRefreshTokenResponse>(
      API_PATHS.USERS.AUTH.REFRESH_TOKEN,
      data
    );
  },

  changePassword: async (
    data: IChangePasswordParams
  ): Promise<IChangePasswordResponse> => {
    const { confirm_new_password, ...apiData } = data;
    return await api.post<IChangePasswordResponse>(
      API_PATHS.USERS.AUTH.CHANGE_PASSWORD,
      apiData
    );
  },

  verifyToken: async (
    data: ITokenVerifyParams
  ): Promise<ITokenVerifyResponse> => {
    return await api.post<ITokenVerifyResponse>(
      API_PATHS.USERS.AUTH.VERIFY_TOKEN,
      data
    );
  },
};

// ========================================
// Hooks
// ========================================

function useLogin(callbacks?: ReactQueryCallbacks<ILoginResponse>) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.LOGIN,
    mutationFn: queryFns.login,
    ...callbacks,
  });
}

function useRegister(callbacks?: ReactQueryCallbacks<IRegisterResponse>) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.REGISTER,
    mutationFn: queryFns.register,
    ...callbacks,
  });
}

function useRegisterConfirmation(
  callbacks?: ReactQueryCallbacks<IRegisterConfirmationResponse>
) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.REGISTER_CONFIRMATION,
    mutationFn: queryFns.registerConfirmation,
    ...callbacks,
  });
}

function useResetPassword(
  callbacks?: ReactQueryCallbacks<IResetPasswordResponse>
) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.RESET_PASSWORD,
    mutationFn: queryFns.resetPassword,
    ...callbacks,
  });
}

function useResetPasswordConfirmation(
  callbacks?: ReactQueryCallbacks<IResetPasswordConfirmationResponse>
) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.RESET_PASSWORD_CONFIRMATION,
    mutationFn: queryFns.resetPasswordConfirmation,
    ...callbacks,
  });
}

function useLogout(callbacks?: ReactQueryCallbacks<void>) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.LOGOUT,
    mutationFn: queryFns.logout,
    ...callbacks,
  });
}

function useRefreshToken(
  callbacks?: ReactQueryCallbacks<IRefreshTokenResponse>
) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.REFRESH,
    mutationFn: queryFns.refreshToken,
    ...callbacks,
  });
}

function useChangePassword(
  callbacks?: ReactQueryCallbacks<IChangePasswordResponse>
) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.CHANGE_PASSWORD,
    mutationFn: queryFns.changePassword,
    ...callbacks,
  });
}

function useVerifyToken(callbacks?: ReactQueryCallbacks<ITokenVerifyResponse>) {
  return useMutation({
    mutationKey: AUTH_QUERY_KEYS.VERIFY_TOKEN,
    mutationFn: queryFns.verifyToken,
    ...callbacks,
  });
}

// ========================================
// API Export
// ========================================

export const UserAuthAPI = {
  keys: AUTH_QUERY_KEYS,
  login: useLogin,
  register: useRegister,
  registerConfirmation: useRegisterConfirmation,
  resetPassword: useResetPassword,
  resetPasswordConfirmation: useResetPasswordConfirmation,
  logout: useLogout,
  refreshToken: useRefreshToken,
  changePassword: useChangePassword,
  verifyToken: useVerifyToken,
};
