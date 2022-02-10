import Cart from './Cart';

describe('Cart', () => {
  
  let cart;

  let products = [
    {
      title: 'Adidas running shoes - men',
      price: 35388
    },
    {
      title: 'Adidas running shoes - women',
      price: 41872
    }
  ]
 
  beforeEach(() => {
    cart = new Cart();
  })

  it('shoud return 0 when get getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product : products[0],
      quantity: 2
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(70776);
  });

  it('should ensure no more than one product exists at a time', () => {

    cart.add({
      product: products[0],
      quantity: 2
    });

    cart.add({
      product: products[0],
      quantity: 1
    });

    expect(cart.getTotal()).toBe(35388);
  });

  it('should update total when a product gets included and then removed', () => {
    
    cart.add({
      product: products[0],
      quantity: 2
    });

    cart.add({
      product: products[1],
      quantity: 1
    });

    cart.remove(products[0]);

    expect(cart.getTotal()).toBe(41872);
  });

});