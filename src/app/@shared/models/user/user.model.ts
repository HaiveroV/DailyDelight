export interface User {
    uid: string;
    email: string;
    passwowrd: string;
    photoUrl?: string;
    displayName?: string;
    recipes?: Object[];
}