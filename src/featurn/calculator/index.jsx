import React, { useState } from 'react'
import Styles from "./style.module.css"
function Calculator() {
    const [result, setResult] = useState([])
    const handleCalculations = (e) => {
        const val = e.target.innerHTML
        // console.log(SetResult([...result,val]));
        if (val === "AC") {
            setResult([]);
            return;
        }
        if (val === "DEL") {
            let a = result;
            a.splice(result.length - 1, 1)
            console.log(a);
            setResult([...a])
            return;
        }
        if (val === "=") {
            let b = result.join("");
            setResult([eval(b)])
            return;
        }
        setResult([...result, val])

    }
    return (
        <div className='container' >
            <div className={Styles.tab}>
                <div className={Styles.screen}>
                    <span className={Styles.input}>{result.length === 0 ? 0 : result}</span>
                </div>
                <div className={Styles.keyboard}>
                    <button className={`${Styles.item} ${Styles.AC}`} onClick={(e) => handleCalculations(e)}>AC</button>
                    <button className={`${Styles.item} ${Styles.DEL}`} onClick={(e) => handleCalculations(e)}>DEL</button>
                    <button className={`${Styles.item} ${Styles.item1}`} onClick={(e) => handleCalculations(e)}>+</button>
                    <button className={`${Styles.item} ${Styles.item2}`} onClick={(e) => handleCalculations(e)}>7</button>
                    <button className={`${Styles.item} ${Styles.item3}`} onClick={(e) => handleCalculations(e)}>8</button>
                    <button className={`${Styles.item} ${Styles.item4}`} onClick={(e) => handleCalculations(e)}>9</button>
                    <button className={`${Styles.item} ${Styles.item5}`} onClick={(e) => handleCalculations(e)}>-</button>
                    <button className={`${Styles.item} ${Styles.item6}`} onClick={(e) => handleCalculations(e)}>4</button>
                    <button className={`${Styles.item} ${Styles.item7}`} onClick={(e) => handleCalculations(e)}>5</button>
                    <button className={`${Styles.item} ${Styles.item8}`} onClick={(e) => handleCalculations(e)}>6</button>
                    <button className={`${Styles.item} ${Styles.item9}`} onClick={(e) => handleCalculations(e)}>*</button>
                    <button className={`${Styles.item} ${Styles.item10}`} onClick={(e) => handleCalculations(e)}>1</button>
                    <button className={`${Styles.item} ${Styles.item11}`} onClick={(e) => handleCalculations(e)}>2</button>
                    <button className={`${Styles.item} ${Styles.item12}`} onClick={(e) => handleCalculations(e)}>3</button>
                    <button className={`${Styles.item} ${Styles.item13}`} onClick={(e) => handleCalculations(e)}>/</button>
                    <button className={`${Styles.item} ${Styles.item14}`} onClick={(e) => handleCalculations(e)}>0</button>
                    <button className={`${Styles.item} ${Styles.item15}`} onClick={(e) => handleCalculations(e)}>00</button>
                    <button className={`${Styles.item} ${Styles.item16}`} onClick={(e) => handleCalculations(e)}>.</button>
                    <button className={`${Styles.item} ${Styles.item17}`} onClick={(e) => handleCalculations(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator