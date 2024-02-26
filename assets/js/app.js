document.addEventListener("DOMContentLoaded", () => {
    const introLoan = document.querySelector("#intro-loan");
    const introLoanValue = document.querySelector("#intro-loan-out");

    const introDays = document.querySelector("#intro-days");
    const introDaysValue = document.querySelector("#intro-days-out");

    const rubMask = val => {
        return val
            .toString()
            .split('')
            .map((num, i, arr) => {
                return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
                    ? num + ' '
                    : num
            })
            .join('')
    }

    const setMoneyValue = (value, range) => {
        value.textContent = rubMask(range.value) + "р";
    }
    const setDaysValue = (value, range) => {
        switch (range.value % 10) {
            case 2:
            case 4:
                value.textContent = range.value + " дня";
                break;
            case 1:
                value.textContent = range.value + " день";
                break;

            default:
                value.textContent = range.value + " дней";
                break;
        }
    }

    setMoneyValue(introLoanValue, introLoan);
    setDaysValue(introDaysValue, introDays)

    introLoan.addEventListener("input", () => {
        setMoneyValue(introLoanValue, introLoan);
    })

    introDays.addEventListener("input", () => {
        setDaysValue(introDaysValue, introDays)
    })

    const acc_items = document.querySelectorAll(".accordion-item");

    for (const item of acc_items) {
        item.addEventListener("click", () => {
            item.classList.toggle("acc-slideOut");
        })
    }


})