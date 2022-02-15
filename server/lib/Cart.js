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
      const amount = Money({amount: (currentValue.product.price * currentValue.quantity)})
      let discount = Money({amount : 0});

      if(currentValue.condition && currentValue.condition.percentage && currentValue.quantity > currentValue.condition.minimum){
        discount = amount.percentage(currentValue.condition.percentage);
      }

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