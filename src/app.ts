import express from 'express';
import path from 'path';
import frontendRoutes from './routes/frontend.routes'; // Asegúrate de que esta ruta sea correcta
import productRoutes from './routes/productRoutes'; // Asegúrate de que esta ruta sea correcta

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/products', productRoutes);
app.use('/', frontendRoutes);

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'E-commerce Home' });
});

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});