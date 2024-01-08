export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}

export interface CreateUser{
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}