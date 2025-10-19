
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MarketOverview } from '@/components/markets/MarketOverview';
import { useMarketIndices, mockIndices } from '@/utils/stocksApi';

const Markets = () => {
  const indices = useMarketIndices(mockIndices);
  const regionLabels: Record<string, string> = {
    'United States': 'США',
    'United Kingdom': 'Великобритания',
    'Germany': 'Германия',
    'Japan': 'Япония'
  };

  return (
    <PageLayout title="Обзор рынков">
      <div className="grid grid-cols-1 gap-6">
        <MarketOverview indices={indices} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {indices.map((index) => (
            <div key={index.symbol} className="bg-card rounded-lg p-6 shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{index.name}</h3>
                  <p className="text-muted-foreground text-sm">{regionLabels[index.region] ?? index.region}</p>
                </div>
                <div className={`text-lg font-bold ${index.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                </div>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold">{index.value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className={`ml-2 ${index.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {index.change >= 0 ? '+' : ''}{index.change.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Обновлено: {new Date(index.lastUpdated).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Markets;
