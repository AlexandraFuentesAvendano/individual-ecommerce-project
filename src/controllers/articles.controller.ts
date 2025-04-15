import { Request, Response } from 'express';
import { Article, NewArticle } from '../models/article';

let articles: Article[] = []; // Usar un almacenamiento en memoria para simplicidad

export const getAllArticles = (req: Request, res: Response) => {
    res.json(articles);
};

export const createArticle = (req: Request, res: Response) => {
    const newArticle: NewArticle = req.body;
    const article: Article = { ...newArticle, id: (articles.length + 1).toString() };
    articles.push(article);
    res.status(201).json(article);
};