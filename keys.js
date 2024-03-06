module.exports = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT || 3307, // Cambiar al puerto por defecto de MySQL
        database: process.env.DB_NAME || 'Ae'
    }
}
