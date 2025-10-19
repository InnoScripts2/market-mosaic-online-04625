
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { useMarketIndices, mockIndices } from '@/utils/stocksApi';
import { Globe } from 'lucide-react';

const Global = () => {
  const indices = useMarketIndices(mockIndices);

  const regions = [
    {
      name: 'Северная Америка',
      markets: [
        { key: 'United States', label: 'США' },
        { key: 'Canada', label: 'Канада' }
      ]
    },
    {
      name: 'Европа',
      markets: [
        { key: 'United Kingdom', label: 'Великобритания' },
        { key: 'Germany', label: 'Германия' },
        { key: 'France', label: 'Франция' },
        { key: 'Switzerland', label: 'Швейцария' }
      ]
    },
    {
      name: 'Азиатско-Тихоокеанский регион',
      markets: [
        { key: 'Japan', label: 'Япония' },
        { key: 'China', label: 'Китай' },
        { key: 'Hong Kong', label: 'Гонконг' },
        { key: 'Australia', label: 'Австралия' }
      ]
    },
  ];

  return (
    <PageLayout title="Глобальные рынки">
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card rounded-lg p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Обзор мировых рынков</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {regions.map((region) => (
              <div key={region.name} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{region.name}</h3>
                <ul className="space-y-2">
                  {region.markets.map((market) => {
                    const index = indices.find(i => i.region === market.key);
                    return (
                      <li key={market.key} className="flex justify-between items-center">
                        <span>{market.label}</span>
                        {index ? (
                          <span className={index.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}>
                            {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                          </span>
                        ) : (
                          <span className="text-gray-400">Нет данных</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Экономический календарь</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Время</th>
                  <th className="text-left py-2 px-4">Регион</th>
                  <th className="text-left py-2 px-4">Событие</th>
                  <th className="text-left py-2 px-4">Влияние</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">08:30</td>
                  <td className="py-2 px-4">США</td>
                  <td className="py-2 px-4">Отчёт по занятости вне сельского хозяйства</td>
                  <td className="py-2 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Высокое</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">10:00</td>
                  <td className="py-2 px-4">Еврозона</td>
                  <td className="py-2 px-4">Решение ЕЦБ по ставке</td>
                  <td className="py-2 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Высокое</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">14:00</td>
                  <td className="py-2 px-4">Великобритания</td>
                  <td className="py-2 px-4">ВВП (квартал к кварталу)</td>
                  <td className="py-2 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Среднее</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Global;
