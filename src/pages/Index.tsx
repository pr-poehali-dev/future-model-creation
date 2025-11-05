import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const predictionData = [
    { month: 'Янв', value: 65, forecast: 72 },
    { month: 'Фев', value: 72, forecast: 78 },
    { month: 'Мар', value: 78, forecast: 85 },
    { month: 'Апр', value: 85, forecast: 90 },
    { month: 'Май', value: 90, forecast: 95 },
    { month: 'Июн', value: 0, forecast: 98 },
  ];

  const maxValue = Math.max(...predictionData.map(d => Math.max(d.value, d.forecast)));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" className="text-primary" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FutureCast AI
            </h1>
          </div>
          <nav className="flex gap-1">
            <Button 
              variant={activeTab === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('home')}
              className="gap-2"
            >
              <Icon name="Home" size={18} />
              Главная
            </Button>
            <Button 
              variant={activeTab === 'forecasts' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('forecasts')}
              className="gap-2"
            >
              <Icon name="LineChart" size={18} />
              Прогнозы
            </Button>
            <Button 
              variant={activeTab === 'api' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('api')}
              className="gap-2"
            >
              <Icon name="Code2" size={18} />
              API
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Искусственный интеллект нового поколения
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создайте модель будущего<br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  с помощью ИИ
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Анализируйте данные, прогнозируйте тренды и принимайте оптимальные решения на основе передовых алгоритмов машинного обучения
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Play" size={20} />
                  Начать работу
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Документация
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Brain',
                  title: 'Нейросетевой анализ',
                  desc: 'Глубокое обучение для точных предсказаний'
                },
                {
                  icon: 'Zap',
                  title: 'Реал-тайм обработка',
                  desc: 'Мгновенные расчеты и визуализация данных'
                },
                {
                  icon: 'Shield',
                  title: 'Надежность',
                  desc: 'Проверенные алгоритмы с точностью 95%+'
                }
              ].map((feature, i) => (
                <Card 
                  key={i} 
                  className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-scale-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </section>

            <section>
              <Card className="p-8 bg-card/50 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Демо: Прогноз роста</h3>
                    <p className="text-muted-foreground">Визуализация предиктивной модели</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm">Факт</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-sm">Прогноз</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 flex items-end justify-around gap-4">
                  {predictionData.map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex flex-col gap-1 h-full justify-end">
                        {item.value > 0 && (
                          <div 
                            className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500 hover:scale-105 animate-slide-up"
                            style={{ 
                              height: `${(item.value / maxValue) * 100}%`,
                              animationDelay: `${i * 100}ms`
                            }}
                          />
                        )}
                        <div 
                          className="w-full bg-gradient-to-t from-secondary to-secondary/50 rounded-t-lg border-2 border-dashed border-secondary/30 transition-all duration-500 hover:scale-105 animate-slide-up"
                          style={{ 
                            height: `${(item.forecast / maxValue) * 100}%`,
                            animationDelay: `${i * 100 + 50}ms`
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.month}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          </div>
        )}

        {activeTab === 'forecasts' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-4">Прогнозы и аналитика</h2>
              <p className="text-muted-foreground text-lg">
                Интерактивные модели для принятия стратегических решений
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'TrendingUp',
                  title: 'Финансовые прогнозы',
                  metric: '+24%',
                  desc: 'Рост прибыли на следующий квартал',
                  color: 'primary'
                },
                {
                  icon: 'Users',
                  title: 'Поведение клиентов',
                  metric: '87%',
                  desc: 'Точность предсказания оттока',
                  color: 'secondary'
                },
                {
                  icon: 'BarChart3',
                  title: 'Рыночные тренды',
                  metric: '3.2x',
                  desc: 'Опережение конкурентов',
                  color: 'primary'
                },
                {
                  icon: 'Target',
                  title: 'Оптимизация KPI',
                  metric: '95%',
                  desc: 'Достижение целевых показателей',
                  color: 'secondary'
                }
              ].map((item, i) => (
                <Card key={i} className="p-6 hover:border-primary/50 transition-all animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-${item.color}/20 rounded-lg flex items-center justify-center`}>
                      <Icon name={item.icon as any} className={`text-${item.color}`} size={24} />
                    </div>
                    <span className="text-3xl font-bold text-primary">{item.metric}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AI-рекомендации</h3>
                  <p className="text-muted-foreground">На основе анализа 10,000+ точек данных</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'Увеличить инвестиции в сегмент B на 15% для максимизации ROI',
                  'Оптимизировать цепочку поставок — экономия до 2.3M ₽ в квартал',
                  'Запустить кампанию в регионе X — прогноз конверсии 34%'
                ].map((rec, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary mt-1" size={20} />
                    <p className="flex-1">{rec}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-4">API и документация</h2>
              <p className="text-muted-foreground text-lg">
                Интегрируйте возможности FutureCast AI в ваши приложения
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Rocket" className="text-primary" size={24} />
                  Быстрый старт
                </h3>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'Получите API ключ в личном кабинете' },
                    { step: '2', text: 'Установите SDK для вашего языка' },
                    { step: '3', text: 'Отправьте первый запрос за 5 минут' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                        {item.step}
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Zap" className="text-secondary" size={24} />
                  Основные методы
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    'POST /api/v1/predict — Создать прогноз',
                    'GET /api/v1/models — Список моделей',
                    'POST /api/v1/analyze — Анализ данных',
                    'GET /api/v1/insights — AI-рекомендации'
                  ].map((method, i) => (
                    <div key={i} className="p-3 bg-muted rounded font-mono hover:bg-muted/70 transition-colors">
                      {method}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Code2" className="text-primary" size={24} />
                Пример запроса
              </h3>
              <div className="bg-background p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-primary">{`curl -X POST https://api.futurecast.ai/v1/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "trend-forecast-v2",
    "data": [65, 72, 78, 85, 90],
    "horizon": 6
  }'`}</pre>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">Полная документация</h3>
                  <p className="text-muted-foreground">Гайды, примеры кода и справочник API</p>
                </div>
                <Button className="gap-2">
                  Открыть docs
                  <Icon name="ArrowRight" size={18} />
                </Button>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 FutureCast AI. Построено на передовых технологиях машинного обучения</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
