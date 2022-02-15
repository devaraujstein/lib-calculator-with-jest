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

  describe('getTotal()', () => {

    it('shoud return 0 when get getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal().getAmount()).toBe(0);
    });
  
    it('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product : products[0],
        quantity: 2
      };
  
      cart.add(item);
  
      expect(cart.getTotal().getAmount()).toBe(70776);
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
  
      expect(cart.getTotal().getAmount()).toBe(35388);
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
  
      expect(cart.getTotal().getAmount()).toBe(41872);
    });

  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      
      cart.add({
        product: products[0],
        quantity: 3
      });

      cart.add({
        product: products[1],
        quantity: 3
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should return an object with the total and the list of items when summary() is called', () => {
      
      cart.add({
        product: products[0],
        quantity: 5
      });

      cart.add({
        product: products[1],
        quantity: 3
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });

    it('should reset the cart when checkout() is called', () => {
      
      cart.add({
        product: products[0],
        quantity: 3
      });

      cart.checkout();

      expect(cart.getTotal().getAmount()).toBe(0);
    });
  });

  describe('special conditions', () => {

    it('should apply percentage discount quantity above minimum is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2
      };

      cart.add({
        product: products[0],
        condition,
        quantity: 3
      });

      expect(cart.getTotal().getAmount()).toBe(74315);

    });

  });
  

});