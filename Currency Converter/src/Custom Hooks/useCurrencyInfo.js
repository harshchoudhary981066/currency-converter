import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) //fetches data as per the currency selected from the API
        .then((res) => res.json()) //Converts received response from 'String' to 'json'
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency]
    )
    console.log(data)
    return data
}

export default useCurrencyInfo