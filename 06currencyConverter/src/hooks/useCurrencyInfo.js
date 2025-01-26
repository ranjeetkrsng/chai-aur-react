import { useEffect, useState } from "react";    // Import the useEffect and useState hooks from React

// Create a custom hook named useCurrencyInfo
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});    // Create a state variable named data and a function named setData to update the state
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;    // Export the useCurrencyInfo hook