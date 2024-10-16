import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "yt_permissions",
    synchronize: false,
    logging: true,
    extra: {
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    },
    entities: [
        // Suas entidades aqui
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
});