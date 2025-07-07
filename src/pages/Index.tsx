import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Психолог Александра Кристи
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  Как выжить в отношениях с
                  <span className="text-primary"> избегающим мужчиной</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Профессионально выстроенный маршрут для тех, кто оказался в
                  сценарии отношений с эмоционально недоступным партнёром
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                  Записаться на курс
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full"
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/files/f963a3ac-d8d5-4c18-996a-b5dd5fc934d4.png"
                alt="Психологическая поддержка"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-4xl text-center space-y-12">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Отношения с избегающим партнёром — это...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Zap" size={32} className="text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Эмоциональные качели
                  </h3>
                  <p className="text-muted-foreground">
                    Постоянная неопределенность и нестабильность в отношениях
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon
                      name="AlertTriangle"
                      size={32}
                      className="text-destructive"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Хроническая тревожность
                  </h3>
                  <p className="text-muted-foreground">
                    Постоянное беспокойство о будущем отношений
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Heart" size={32} className="text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">Снижение самооценки</h3>
                  <p className="text-muted-foreground">
                    Ощущение собственной ненужности и неполноценности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Что ты узнаешь на курсе
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Глубокое понимание механизмов отношений и практические инструменты
              для их преобразования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Понимание паттернов",
                description:
                  "Почему ты снова и снова попадаешь в отношения с избегающими мужчинами",
                icon: "Search",
              },
              {
                title: "Детские установки",
                description:
                  "Какие детские сценарии сформировали тягу к эмоционально холодным партнёрам",
                icon: "Users",
              },
              {
                title: "Психика избегающего",
                description:
                  "Как устроена психика избегающего и почему он так себя ведёт",
                icon: "Brain",
              },
              {
                title: "Тип привязанности",
                description:
                  "Какой у тебя тип привязанности и возможно ли его изменить",
                icon: "Link",
              },
              {
                title: "Механизмы зависимости",
                description:
                  "Почему ты не можешь его отпустить и как это преодолеть",
                icon: "Unlock",
              },
              {
                title: "Влияние на здоровье",
                description:
                  "Почему страдает твоя самооценка, психика и тело в таких отношениях",
                icon: "Shield",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              В результате курса ты
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Обретёшь внутреннее спокойствие",
                description:
                  "Перестанешь жить в тревожном ожидании и начнёшь чувствовать стабильность",
                icon: "Smile",
              },
              {
                title: "Восстановишь контакт с собой",
                description: "Вернёшь понимание своих потребностей и границ",
                icon: "Heart",
              },
              {
                title: "Поймёшь, какие отношения тебе нужны",
                description:
                  "Чётко определишь критерии здоровых отношений и научишься их создавать",
                icon: "Target",
              },
              {
                title: "Трезво оценишь партнёра",
                description:
                  "Перестанешь видеть в избегающем недостижимый идеал",
                icon: "Eye",
              },
              {
                title: "Начнёшь новую главу жизни",
                description:
                  "Получишь инструменты для создания здоровых отношений в будущем",
                icon: "Sunrise",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={item.icon as any}
                      size={28}
                      className="text-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">
              Если ты устала ждать, терпеть, оправдывать чужое бездействие и
              вечный холод
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Пора возвращать себя себе. Ты заслуживаешь отношений, в которых
              тебе спокойно, надёжно и радостно.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full"
            >
              Записаться на курс прямо сейчас
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 text-lg">
              Этот курс — не только теория. Это практический, бережный, глубоко
              терапевтический путь выхода из нездоровых отношений.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 bg-card border-t">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Курс "Как выжить в отношениях с избегающим мужчиной"
              </h3>
              <p className="text-muted-foreground">
                Верни себе любовь и спокойствие
              </p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={20} />
                Контакты
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Phone" size={20} />
                Поддержка
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-sm text-muted-foreground">
            © 2025 Курс по психологии отношений. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
