
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CurrencyExchange } from '@/components/currencies/CurrencyExchange';
import { useCurrencyPairs, mockCurrencies } from '@/utils/stocksApi';

const Currencies = () => {
  const currencies = useCurrencyPairs(mockCurrencies);

  return (
    <PageLayout title="Курсы валют">
      <div className="grid grid-cols-1 gap-6">
        <CurrencyExchange currencies={currencies} />

        <div className="bg-card rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">Конвертер валют</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Из валюты</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="USD">USD — доллар США</option>
                  <option value="EUR">EUR — евро</option>
                  <option value="GBP">GBP — фунт стерлингов</option>
                  <option value="JPY">JPY — японская иена</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Сумма</label>
                <input
                  type="number"
                  defaultValue="1000"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">В валюту</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option value="EUR">EUR — евро</option>
                  <option value="USD">USD — доллар США</option>
                  <option value="GBP">GBP — фунт стерлингов</option>
                  <option value="JPY">JPY — японская иена</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Результат пересчёта</label>
                <div className="w-full px-3 py-2 border rounded-md bg-gray-50">
                  €1 083,40
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Currencies;
