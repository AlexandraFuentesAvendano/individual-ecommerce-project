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

// Definición del tipo NewArticle que representa un nuevo artículo sin el campo 'id'.
export type NewArticle = Omit<Article, 'id'>;

// Definición del tipo UpdateArticle que permite actualizar cualquier campo de un artículo existente, excepto el campo 'id'.
export type UpdateArticle = Partial<Omit<Article, 'id'>>;