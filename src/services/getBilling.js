import { dummyBilling } from "../data/dummyBilling"

export const getBilling = () => {
  const total = dummyBilling.items
    .map(item => item.price * item.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return { ...dummyBilling, total };
}

export default getBilling