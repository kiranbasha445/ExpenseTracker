import "bootstrap/dist/css/bootstrap.css";
import { FormEvent, ReactEventHandler, useRef, useState } from "react";

const File = () => {
  var description = useRef<HTMLInputElement>(null);
  var amount = useRef<HTMLInputElement>(null);
  var category = useRef<HTMLSelectElement>(null);

  const [expenses, setExpense] = useState([
    {
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    var expense = {
      description: description?.current?.value
        ? description?.current?.value
        : "",
      amount: amount?.current?.value ? parseInt(amount?.current?.value) : 0,
      category: category?.current?.value ? category?.current?.value : "",
    };
    if (expense != null && expense.amount > 0)
      setExpense([...expenses, expense]);
    console.log(expenses);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <form className="col-xs-12 col-md-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input
            ref={description}
            type="text"
            id="Description"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Amount">Amount</label>
          <input
            ref={amount}
            type="number"
            id="Amount"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-select"
            aria-label="Default select example"
            ref={category}
            required
          >
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utelities">Utelities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        {expenses.map((expense, index) => (
          <tbody>
            <tr>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
            </tr>
          </tbody>
        ))}
        <tr>
          <th scope="col">Total</th>
          <th scope="col">
            {expenses
              .map((expense) => expense.amount)
              .reduce((acc, curr) => acc + curr, 0)}
          </th>
          <th scope="col"></th>
        </tr>
      </table>
    </>
  );
};

export default File;
