export interface User{
    _id: string;
    username: string;
    email: string;
    password: string;
    roles: Array<String>;
    accessToken: string
};