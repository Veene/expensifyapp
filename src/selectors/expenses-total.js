export default (expenses) => {
        return expenses.map(expense => expense.amount).reduce((total,next) => total + next, 0);
}