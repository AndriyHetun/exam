# Iterator Pattern (TypeScript)

## Опис

Реалізація поведінкового патерну `Iterator`.

Компоненти:
- `Iterator<T>` - інтерфейс ітератора
- `Aggregate<T>` - інтерфейс збірки/колекції
- `Item` - модель одного елемента
- `ItemCollection` - колекція, яка створює ітератор
- `ItemIterator` - об’єкт для послідовного обходу

## Файли

- `index.ts` - реалізація патерну
- `examples/behavioral-iterator.ts` - приклад запуску

## Як запускати

1. `npm install`
2. `npm run start:iterator`

Після запуску повинні з’явитися елементи:
- Apple
- Banana
- Cherry
