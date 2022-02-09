import Cart from './Cart';

describe('Cart', () => {
  
  let cart;

  beforeEach(() => {
    cart = new Cart();
  })

  it('shoud return 0 when get getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toBe(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes - men',
        price: 35388
      },
      quantity: 2
    };

    cart.add(item);

    expect(cart.getTotal()).toBe(70776);
  });

});