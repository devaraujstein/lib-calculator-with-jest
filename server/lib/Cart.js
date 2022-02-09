export default class Cart {
  
  items = [];

  add(item){
    this.items.push(item);
  }

  getTotal(){
    return this.items.reduce((previousValue, currentValue) => {
      return previousValue + (currentValue.product.price * currentValue.quantity);
    }, 0);
  }

}