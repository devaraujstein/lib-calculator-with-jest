import find from 'lodash/find';
import remove from 'lodash/remove';
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
      return previousValue + (currentValue.product.price * currentValue.quantity);
    }, 0);
  }

}