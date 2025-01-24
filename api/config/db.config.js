const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI) 
    .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch((error) => {
        console.error(`An error occurred trying to connect to the database ${MONGODB_URI}`, error);
        process.exit(1); // Usar 1 en lugar de 0 para indicar error
    });

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Database connection closed');
        process.exit(0); // 0 indica salida normal
    });
});
