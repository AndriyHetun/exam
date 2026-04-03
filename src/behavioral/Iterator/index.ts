// Iterator pattern implementation (TypeScript)

export interface Iterator<T> {
  current(): T | null;
  next(): T | null;
  hasNext(): boolean;
}

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

export class Item {
  constructor(public name: string) {}
}

export class ItemCollection implements Aggregate<Item> {
  private items: Item[] = [];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(itemName: string): boolean {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }

  createIterator(): Iterator<Item> {
    return new ItemIterator(this);
  }

  getItems(): Item[] {
    return [...this.items];
  }
}

class ItemIterator implements Iterator<Item> {
  private position = 0;

  constructor(private collection: ItemCollection) {}

  current(): Item | null {
    const items = this.collection.getItems();
    if (this.position < items.length) {
      return items[this.position];
    }
    return null;
  }

  next(): Item | null {
    const items = this.collection.getItems();
    if (this.position < items.length) {
      const item = items[this.position];
      this.position += 1;
      return item;
    }

    return null;
  }

  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }
}
