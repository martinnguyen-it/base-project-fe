export type TUserInfo = {
    email: string;
    status: string;
    role: string;
    is_admin: string;
    first_name: string;
    last_name: string;
    avatar: string;
    id: string;
};
export interface IAuthState {
    accessToken: string | null;
    userInfo: TUserInfo | null;
}

export interface ISignUpPayload {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
