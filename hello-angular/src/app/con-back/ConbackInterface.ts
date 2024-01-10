export interface Category {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    products: []
}
export interface CategoryCreate {
    name: string | null;
    description: string | null;
}
