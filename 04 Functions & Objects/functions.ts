function calcTax(income: number, taxYear = 2024): number{     //removing :number will remove error warning but we still have a error
  // let x = 0  // nounused locals
  if ((taxYear) < 2025)
      return income * 1.2
    return income * 1.3
//undefined
}

calcTax(10_000)