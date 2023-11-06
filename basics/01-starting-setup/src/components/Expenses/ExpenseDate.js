import "./ExpenseDate.css";

export function ExpenseDate(props) {
  const currMonth = props.date.toLocaleString("en-US", {
    month: "long",
  });
  const currDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const currYear = props.date.getFullYear();

  return <div className="expense-date">
        <div className="expense-date__month">{currMonth}</div>
        <div className="expense-date__year">{currYear}</div>
        <div className="expense-date__day">{currDay}</div>
      </div>
}
