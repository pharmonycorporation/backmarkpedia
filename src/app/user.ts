export interface Signup {
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    password: string
    niveauEtude?: string
}

export class User {
    is_prestataire: boolean;
    is_particulier: boolean;
    is_manager: boolean;
    userType: number;
    user: number;
    time: string;
    email: string;

    
}
export class UserModel {
    id?: any;
    success: boolean;
    access: string;
    refresh: string;
    user: User;

    constructor() {
        this.id = generateUUID();
    }
}

function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};