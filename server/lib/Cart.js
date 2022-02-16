import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;
export default class Cart {
  
  items = [];

  add(item){

    const itemToFind = { product : item.product };
   
    if(find(this.items, itemToFind)){
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(product){
    remove(this.items, { product });
  }

  getTotal(){
    return this.items.reduce((previousValue, currentValue) => {

      const amount = Money({amount: (currentValue.product.price * currentValue.quantity)});

      let discount = calculateDiscount(currentValue, amount);
      
      return previousValue.add(amount).subtract(discount);
    }, Money({amount: 0}));
  }

  summary() {

    const total = this.getTotal().getAmount();
    const items = this.items;

    return {
      total,
      items
    }
  }

  checkout(){

    const { total, items } = this.summary();

    this.items = [];

    return {
      total,
      items
    }
  }
}

const calculateDiscount = (currentValue, amount) => {

  if(currentValue.condition?.quantity){
    return calculateQuantityDiscount(currentValue, amount);
  }

  return calculatePercentageDiscount(currentValue, amount);
}

const calculatePercentageDiscount = (currentValue, amount) => {
  
  if(currentValue.condition?.percentage && currentValue.quantity > currentValue.condition.minimum){
    return amount.percentage(currentValue.condition.percentage);
  }

  return Money({amount : 0});
}

const calculateQuantityDiscount = (currentValue, amount) => {

  if(currentValue.condition?.quantity && currentValue.quantity > currentValue.condition.quantity){
    return amount.percentage(isEven(currentValue) ? 50 : 40);
  }

  return Money({amount : 0});
}

const isEven = (currentValue) => {
  return currentValue.quantity % 2 === 0;
}