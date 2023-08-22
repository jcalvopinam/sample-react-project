import { dummyBilling } from "../data/dummyBilling"

export const getBilling = () => {
  const total = calculateTotal(dummyBilling.items)
  return { ...dummyBilling, total };
}

export const calculateTotal = (items) => {
  return items
  .map(item => item.price * item.quantity)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default getBilling