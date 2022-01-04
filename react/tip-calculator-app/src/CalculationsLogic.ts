export function CalculationsLogic(
  bill: number,
  people: number,
  tipPercentage: number
) {
  let totalTip = tipPercentage * 0.01 * bill;
  let totalBill = bill + totalTip;
  let tipPerPerson = people === 0 ? 0 : totalTip / people;
  let billPerPerson = people === 0 ? 0 : totalBill / people;
  console.log(tipPerPerson, billPerPerson);
  return {
    tipPerPerson: tipPerPerson,
    billPerPerson: billPerPerson,
  };
}
