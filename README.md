# Начало работы

```bash
#0. Создайте папку вашего проекта
mkdir your-project-name
#1. Зайдите в папку вашего проекта
cd your-project-name
#2. Клонируйте репозиторий стартового проекта в текущею папку
git clone git@gl.hq.bc:dcrm/crm/crm-front/frontend-app-template.git .
#3. Установите зависимости для запуска проекта
npm install
#4. Удалите папку .git и заливайте изменения в собственный репозиторий, когда он будет готов
#5. Переименуйте параметр name на имя вашего проекта в файлах package.json и package-lock.json
#6. Запуск проекта для разработки
npm run dev
#7. Сборка production версии проекта
npm run build
```

# Gitlab CI

Настройки CI происходят через файл `.gitlab-ci.yml`. Если у вас не запускается пайплайн, а при открытии файла весит
ошибки о доступах или валидности файла, тогда вам следует обратиться к DevOps-ам

Сборка происходит на 4 ветках:

- master
- develop
- test
- snap