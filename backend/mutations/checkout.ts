/* eslint-disable */
import { KeystoneContext, SessionStore} from '@keystone-next/types';

import {CartItemCreateInput,  OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';
import { CartItem } from '../schemas/CartItem';
const graphql = String.raw;

interface Arguments {
  token: string
}
async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext,
): Promise<OrderCreateInput> {
  //make sure signed in
  const userId = context.session.itemId;
  if(!userId){
    throw new Error('Sorry! Must be signed in to create order!')
  }
const user = await context.lists.User.findOne({
  where: {id: userId},
  resolveFields: graphql`
    id
    name
    email
    cart {
      id
      quantity
      product {
        name
        price
        description
        id
        photo {
          id
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
  `
});
console.log(user, {depth:null})
  //total price
  const cartItems = user.cart.filter(cartItem => cartItem.product);
  const amount = cartItems.reduce(function(tally: number, cartItem: CartItemCreateInput){
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
  console.log(amount);
  //create charge w/stripe library
const charge = await stripeConfig.paymentIntents.create({
  amount, 
  currency: 'USD',
  confirm: true,
  payment_method: token,
}).catch(err => {
  console.log(err);
  throw new Error(err.message);
});
console.log(charge);
  //convert cartitems to orderitems
  const orderItems = cartItems.map(cartItem => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: {connect: {id: cartItem.product.photo.id}},
      
    }
    return orderItem;
  })
  //create order and return
  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: {create: orderItems},
      user: {connect: {id: userId}}
    }
  });
  //clean up any old cart items
  const cartItemIds = cartItems.map(cartItem => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemIds
  });
  return order;
}

export default checkout;