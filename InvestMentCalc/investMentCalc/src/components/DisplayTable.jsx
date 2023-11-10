function getTableRow(year, InvestedCapital, TotalInterest, Interest, InvestValue) {

    return (
        <tr>
            <td>{year}</td>
            <td>$
                {InvestValue.toFixed(2)}
            </td>
            <td>
                ${Interest.toFixed(2)}
            </td>
            <td>
                ${TotalInterest.toFixed(2)}
            </td>
            <td>
                ${InvestedCapital.toFixed(2)}
            </td>
        </tr>
    )
}

function calculateReturnsTable(InitialInv, AnnualInv, ExpectedReturn, Duration) {

    const ans = [];

    if (Duration < 1) {
        return [];
    }
    let InvestedCapital = InitialInv;
    let TotalInterest = 0;
    let Interest = 0;
    let InvestValue = InitialInv;

    for (let year = 1; year <= Duration; year++) {
        Interest = InvestValue * (ExpectedReturn / 100);
        TotalInterest += Interest;
        InvestedCapital += AnnualInv;
        InvestValue += Interest + AnnualInv;
        ans.push([year, InvestedCapital, TotalInterest, Interest, InvestValue])
    }
    return ans;

}


export default function DisplayTable({UserInput}) {


    const values = calculateReturnsTable(UserInput.initialInv, UserInput.annualInv, UserInput.expReturn, UserInput.duration);


    return (

        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Invest Value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {values.length > 0 && values.map((val) => {
                return getTableRow(val[0], val[1], val[2], val[3], val[4]);
            })}
            {values.length === 0 && <p className="center">Duration is 0 years !!</p>}
            </tbody>
        </table>

    )

}