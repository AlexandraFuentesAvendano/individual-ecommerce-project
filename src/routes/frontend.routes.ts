import { Router } from 'express';
import * as productService from '../services/productService'; // Asegúrate de que esta ruta sea correcta

const router = Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
    res.render('index', { title: 'E-commerce Home' });
});

// Ruta para la lista de productos
router.get('/products', async (req, res) => {
    try {
        const products = await productService.getAllProducts(); // Obtiene la lista de productos
        res.render('products', { products }); // Renderiza la vista products.ejs con los productos
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/cart/add', async (req, res) => {
    const productId = req.body.productId;
    // Aquí puedes manejar la lógica para añadir el producto al carrito
    // Por ahora, redirige a la página de productos
    res.redirect('/products');
});

export default router;