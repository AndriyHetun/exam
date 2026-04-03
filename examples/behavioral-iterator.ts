import { Item, ItemCollection } from '../src/behavioral/Iterator/index';

const collection = new ItemCollection();
collection.addItem(new Item('Apple'));
collection.addItem(new Item('Banana'));
collection.addItem(new Item('Cherry'));

const iterator = collection.createIterator();

console.log('Iterator output:');

while (iterator.hasNext()) {
  const item = iterator.next();
  if (item) console.log('-', item.name);
}
