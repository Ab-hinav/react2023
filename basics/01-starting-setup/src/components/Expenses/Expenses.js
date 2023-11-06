import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';

export function Expenses(props) {

    return (
        <Card className="expenses">
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />

        </Card>
    )


}
