//{useId} is a React Hook for generating unique IDs that can be passed to accessibility attributes. Will be used to
//provide keys to currency values
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        //CSS written in bacticks to accomodate for the extra CSS Injected by the user
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //Have to wrap it in number
                    //because it returns string as a response and we need a number for "Amount". JavaScript by default does that.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                //Since the value of currency is going to be a string, it e.targert.value does not need to be converted to anything
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {/* */}
                        {currencyOptions.map((currency) => (
                            //while implementing loop, giving a 'key' is imporant so the the ReactDOM knows what
                            //value is it operating with in the loop and prevents rendering it if already rendered
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