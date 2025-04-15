import { Request, Response } from 'express';
import { getAllProducts } from '../services/productService'; // Verifica que la ruta sea correcta

export const getProductsPage = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts(); // Fetch products from service
        res.render('products', { products }); // Render the products view
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};