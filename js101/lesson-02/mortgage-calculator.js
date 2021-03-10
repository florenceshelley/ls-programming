/* Based on the following:
 * Loan amount
 * Annual Percentage Rate (APR)
 * Loan duration
 *
 * Calculate:
 * Monthly interest rate
 * Loan duration in months
 */

let loanAmount, interestRate, loanDuration;
let monthlyPayment =
  loanAmount * (interestRate / (1 - Math.pow(1 + interestRate, -loanDuration)));
