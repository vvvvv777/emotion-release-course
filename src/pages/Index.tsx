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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="lines"
              x="0"
              y="0"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="150"
                y2="150"
                stroke="#d97706"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="0"
                y1="150"
                x2="150"
                y2="0"
                stroke="#f59e0b"
                strokeWidth="2"
                opacity="0.4"
              />
              <line
                x1="0"
                y1="75"
                x2="150"
                y2="225"
                stroke="#fbbf24"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="75"
                y1="0"
                x2="225"
                y2="150"
                stroke="#f59e0b"
                strokeWidth="1"
                opacity="0.4"
              />
              <line
                x1="-75"
                y1="0"
                x2="75"
                y2="150"
                stroke="#d97706"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="0"
                y1="-75"
                x2="150"
                y2="75"
                stroke="#fbbf24"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Card className="p-8 lg:p-12 shadow-2xl bg-card/95 backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 animate-fade-in">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm font-medium">
                      Психолог Александра Кристи
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                      Как выжить в отношениях с
                      <span className="text-primary"> избегающим мужчиной</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-extralight">
                      Профессионально выстроенный маршрут для тех, кто оказался
                      в сценарии отношений с эмоционально недоступным партнёром
                    </p>
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
            </Card>
          </div>
        </section>

        {/* Author Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8 lg:p-12 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none bg-card/95 backdrop-blur-sm">
              <div className="text-center space-y-6 relative z-10">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    Александра Кристи
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    Практикующий психолог, эксперт в теме отношений и личностных
                    трансформаций. Специализируюсь на когнитивно-поведенческом
                    подходе, помогаю понять свои глубинные установки, выйти из
                    токсичных сценариев и построить зрелые, здоровые отношения
                    прежде всего с собой.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="BookOpen" size={20} />
                    <span>Автор книги «Пакет с паникой»</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Youtube" size={20} />
                    <span>Автор YouTube-канала «АДАПТАЦИЯ»</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="MessageCircle" size={20} />
                    <span>Автор тг-канала «Адаптация Кристи»</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8 lg:p-12 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none bg-card/95 backdrop-blur-sm">
              <div className="text-center space-y-12 relative z-10">
                <div className="space-y-6 animate-slide-up">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                    Отношения с избегающим партнёром — это...
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="space-y-4">
                        <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto">
                          <Icon name="Zap" size={32} className="text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          Эмоциональные качели
                        </h3>
                        <p className="text-muted-foreground">
                          Постоянная неопределенность и нестабильность в
                          отношениях
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="space-y-4">
                        <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto">
                          <Icon
                            name="AlertTriangle"
                            size={32}
                            className="text-red-600"
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
                        <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto">
                          <Icon
                            name="Heart"
                            size={32}
                            className="text-red-600"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">
                          Снижение самооценки
                        </h3>
                        <p className="text-muted-foreground">
                          Ощущение собственной ненужности и неполноценности
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Course Program */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Card className="p-8 lg:p-12 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none bg-card/95 backdrop-blur-sm">
              <div className="text-center space-y-6 mb-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Что ты узнаешь на курсе
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Глубокое понимание механизмов отношений и практические
                  инструменты для их преобразования
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
                        <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center">
                          <Icon
                            name={item.icon as any}
                            size={24}
                            className="text-red-600"
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
            </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8 lg:p-12 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none bg-card/95 backdrop-blur-sm">
              <div className="text-center space-y-6 mb-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  В результате курса ты:
                </h2>
              </div>

              <div className="space-y-8 relative z-10">
                {[
                  {
                    title: "Обретёшь внутреннее спокойствие",
                    description:
                      "Перестанешь жить в тревожном ожидании и начнёшь чувствовать стабильность",
                    icon: "Smile",
                  },
                  {
                    title: "Восстановишь контакт с собой",
                    description:
                      "Вернёшь понимание своих потребностей и границ",
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
                  <Card
                    key={index}
                    className="p-8 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={item.icon as any}
                          size={28}
                          className="text-red-600"
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
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8 lg:p-12 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] after:pointer-events-none bg-gradient-to-r from-primary to-primary/80">
              <div className="text-center space-y-8 relative z-10">
                <div className="space-y-6 mx-0">
                  <h2 className="text-3xl sm:text-4xl font-serif text-primary-foreground font-extralight">
                    Если ты устала ждать, терпеть, оправдывать чужое бездействие
                    и вечный холод
                  </h2>
                  <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-extralight">
                    Пора возвращать себя себе. Ты заслуживаешь отношений, в
                    которых тебе спокойно, надёжно и радостно.
                  </p>
                </div>

                <div className="text-center">
                  <p className="sm:text-6xl tracking-wider font-semibold text-5xl text-red-500">
                    СТОИМОСТЬ КУРСА 5.900 РУБЛЕЙ
                  </p>
                </div>

                <div className="pt-8 border-t border-primary-foreground/20">
                  <p className="text-primary-foreground/80 text-lg">
                    Этот курс — не только теория. Это практический, бережный,
                    глубоко терапевтический путь выхода из нездоровых отношений.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
