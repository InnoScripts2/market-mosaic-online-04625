
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Bell, Globe, Lock, User, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <PageLayout title="Настройки">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Настройки</h2>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <User className="mr-2 h-5 w-5" />
                Аккаунт
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Bell className="mr-2 h-5 w-5" />
                Уведомления
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Lock className="mr-2 h-5 w-5" />
                Безопасность
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Globe className="mr-2 h-5 w-5" />
                Региональные параметры
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <SettingsIcon className="mr-2 h-5 w-5" />
                Предпочтения
              </Button>
            </nav>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-6">Параметры аккаунта</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Личные данные</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Имя</label>
                    <input
                      type="text"
                      defaultValue="Иван"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Фамилия</label>
                    <input
                      type="text"
                      defaultValue="Иванов"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Электронная почта</label>
                    <input
                      type="email"
                      defaultValue="ivan.ivanov@example.com"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <input
                      type="text"
                      defaultValue="+7 (495) 123-45-67"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Настройки отображения</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Тёмная тема</p>
                      <p className="text-sm text-muted-foreground">Переключение между светлой и тёмной темой</p>
                    </div>
                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Компактный вид</p>
                      <p className="text-sm text-muted-foreground">Больше данных на экране за счёт меньших отступов</p>
                    </div>
                    <div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button>Сохранить изменения</Button>
                <Button variant="outline" className="ml-2">Отмена</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
