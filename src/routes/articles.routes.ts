import { Router } from 'express';
import { createArticle, getAllArticles } from '../controllers/articles.controller';

const router = Router();

router.get('/articles', getAllArticles);
router.post('/articles', createArticle);

// Agregar más rutas según sea necesario

export default router;