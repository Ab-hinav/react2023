export default function UserInputCard({UserInput, setUserInput}) {


    function handleOnChange(event, inputIdentifier) {
        const input = parseInt(event.target.value);

        if (input < 0) {
            alert('Please Enter a Number greater than 0')
            return;
        }
        console.log(input);
        setUserInput((prevUserInput) => ({...prevUserInput, [inputIdentifier]: input})
        );
        console.log(UserInput);
    }


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment: </label>
                <input type="number" value={UserInput.initialInv}
                       onChange={(e) => handleOnChange(e, 'initialInv')}/>
            </p>
            <p>
                <label>Annual Investment: </label>
                <input type="number" value={UserInput.annualInv}
                       onChange={(e) => handleOnChange(e, 'annualInv')}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return: </label>
                <input type="number" step=".01" min={0} value={UserInput.expReturn}
                       onChange={(e) => handleOnChange(e, 'expReturn')}/>
            </p>
            <p>
                <label>Duration of Investment: </label>
                <input type="number" step={1} min={1} value={UserInput.duration}
                       onChange={(e) => handleOnChange(e, 'duration')}/>

            </p>
        </div>
    </section>
}