import app from './src/app.js';
import { config } from './src/config/config.js';
import dataBaseConnection from './src/config/db.js';

const StartServer = async() => {
   await dataBaseConnection()
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

}
);
}
StartServer();