import { dummyBilling } from "../data/dummyBilling"

export const getBilling = () => {
  let total = 0;
  dummyBilling.items.forEach(item => {
    item.unitTotal = item.price * item.quantity,
    total = total + item.price * item.quantity;
  })
  return {...dummyBilling, total};
}

export default getBilling