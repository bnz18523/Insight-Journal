

const ExpenseForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title:enterTitle,
        amount: enteredAmount,
        data: new Date(enteredDate)
    }
  };
 return (
<form onSubmit ={submitHandler}></form>
)
 }