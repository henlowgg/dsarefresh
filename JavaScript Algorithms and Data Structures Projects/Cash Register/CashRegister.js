function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;
    let totalCID = cid.reduce((sum, [unit, amount]) => sum + amount, 0);

    // Check for exact change
    if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Calculate change
    cid = cid.reverse();
    let changeArr = cid.reduce((acc, [unit, amount]) => {
        let value = 0;
        while (changeDue >= currencyUnit[unit] && amount > 0) {
            changeDue -= currencyUnit[unit];
            amount -= currencyUnit[unit];
            value += currencyUnit[unit];

            // Round to the nearest penny to avoid precision errors
            changeDue = Math.round(changeDue * 100) / 100;
        }
        if (value > 0) {
            acc.push([unit, value]);
        }
        return acc;
    }, []);

    // Check for insufficient funds
    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

// Example test
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));


/* 
Calculates the change due.
Determines if there's enough cash in the drawer or if the cash in drawer exactly matches the change due.
If the cash in drawer is sufficient, it calculates the change using the largest denominations possible.
It returns an object with the status key and the change key, where change is an array of the currency units used for the change, sorted from highest to lowest.
*/