
import React, {useId} from "react";

function InputBox({
    label, 
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}){
    const amountInputId = useId();

    return (
        <div className="input-box">
            <div className="amount-section">
                <label className="label-text" htmlFor={amountInputId}>{label}</label>
                <input
                    id={amountInputId}
                    className="amount-input"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // If onAmountChange exists, run it with the new number from the input
                    onChange={(e) => {
                        if(onAmountChange){
                            const value = Number(e.target.value);
                            onAmountChange(value);
                        }
                    }}
                />
            </div>

            <div className="currency-section">
                <select
                    className="currency-select"
                    value={selectCurrency}
                    onChange={(e) => {
                        if(onCurrencyChange){
                            const value = e.target.value;
                            onCurrencyChange(value);
                        }
                    }}
                    disabled={currencyDisable}
                >
                    
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;