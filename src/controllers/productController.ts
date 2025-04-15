import { Request, Response } from 'express';
import { getAllProducts, getProductById } from '../services/productService';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.render('products', { products });
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await getProductById(id);
        if (product) {
            res.render('product', { product });
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching product');
    }
};