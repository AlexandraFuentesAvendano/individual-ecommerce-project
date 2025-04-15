import { Router } from 'express';

const router = Router();

router.get('/cart', (req, res) => {
    // Aquí iría la lógica para mostrar el carrito
    res.render('cart', { cart: [] }); // Deberías reemplazar [] con los datos reales del carrito
});

export default router;