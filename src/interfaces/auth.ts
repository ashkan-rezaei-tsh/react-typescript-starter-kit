export interface AuthState {
    loginData: string | undefined;
    isLoggedIn: boolean;
}

// --------------------------------
export interface Register {
    mobile?: string | number;
}
export interface SendOtp {
    mobile: string | number;
    otpCode: number;
}
export interface ChangePassword {
    oldPassword?: string;
    password: string;
    confirmPassword: string;
}
export interface Login {
    mobileNumber: string | number;
    password?: string;
    rememberLogin?: true;
    returnUrl?: string;
    otpCode?: number;
}
export interface VerifyTokenT {
    mobileNumber: string | number;
    twoFactorMethod: 0 | 1 | 2;
}
