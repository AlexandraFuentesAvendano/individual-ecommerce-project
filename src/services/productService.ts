import crypto from 'crypto';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    storage: string;
    color: string;
    imageUrl: string;
}

// Simulación de datos de productos
const products: Product[] = [
    {
        id: crypto.randomUUID(),
        name: 'Tennis Racket',
        description: 'High-quality tennis racket for professionals.',
        price: 120,
        storage: '20 units',
        color: 'Black',
        imageUrl: '/images/racket.jpg',
    },
    {
        id: crypto.randomUUID(),
        name: 'Tennis Ball Pack',
        description: 'Pack of 3 durable tennis balls.',
        price: 10,
        storage: '100 units',
        color: 'Yellow',
        imageUrl: '/images/balls.jpg',
    },
    {
        id: crypto.randomUUID(),
        name: 'Tennis Shoes',
        description: 'Comfortable shoes for the best court performance.',
        price: 75,
        storage: '50 units',
        color: 'White',
        imageUrl: '/images/shoes.jpg',
    },
];

export const getAllProducts = async (): Promise<Product[]> => {
    return products;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
    return products.find(product => product.id === id);
};