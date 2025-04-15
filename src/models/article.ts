export interface Article {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    storage: string;
    color: string;
    imageUrl: string;
}

export interface NewArticle {
    name: string;
    brand: string;
    description: string;
    price: number;
    storage: string;
    color: string;
    imageUrl: string;
}

export interface UpdateArticle {
    name?: string;
    brand?: string;
    description?: string;
    price?: number;
    storage?: string;
    color?: string;
    imageUrl?: string;
}