
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useStockData, mockStocks, generatePriceHistory, formatCurrency, formatNumber } from '@/utils/stocksApi';
import { StockCard } from '@/components/stocks/StockCard';
import { StockChart } from '@/components/stocks/StockChart';

const Stocks = () => {
  const stocks = useStockData(mockStocks);
  const [selectedStock, setSelectedStock] = React.useState(stocks[0]);

  const stocksWithHistory = stocks.map(stock => {
    return {
      ...stock,
      priceHistory: generatePriceHistory(30, stock.price, 2)
    };
  });

  return (
    <PageLayout title="Акции">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-semibold">Все акции</h2>
          <div className="space-y-4">
            {stocksWithHistory.map((stock) => (
              <StockCard
                key={stock.symbol}
                stock={stock}
                priceHistory={stock.priceHistory}
                onClick={() => setSelectedStock(stock)}
                className={selectedStock.symbol === stock.symbol ? "ring-2 ring-primary" : ""}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <StockChart
            symbol={selectedStock.symbol}
            name={selectedStock.name}
            currentPrice={selectedStock.price}
            volatility={2.5}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-card rounded-lg p-4 shadow">
              <h3 className="font-medium text-sm text-muted-foreground">Рыночная капитализация</h3>
              <p className="text-xl font-semibold mt-1">
                {formatNumber(selectedStock.marketCap)}
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow">
              <h3 className="font-medium text-sm text-muted-foreground">Объём</h3>
              <p className="text-xl font-semibold mt-1">
                {formatNumber(selectedStock.volume)}
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow">
              <h3 className="font-medium text-sm text-muted-foreground">Диапазон за 52 недели</h3>
              <p className="text-xl font-semibold mt-1">
                {formatCurrency(selectedStock.price * 0.8)} - {formatCurrency(selectedStock.price * 1.2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Stocks;
