import express from 'express';
import path from 'path';
import { getStockPrices } from './controllers/stockController';

const app = express();
const port = process.env.PORT || 3000;

// publicディレクトリを静的ファイルとして提供
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/stock-prices', getStockPrices);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});