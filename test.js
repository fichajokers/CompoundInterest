/**
 * @author Matías Villar
 * @description Node program to calculate Compound Interest
 */
const prompt = require('prompt');

let p = 0   //principal, initial capital.
let r = 0   //Anual interest rate in percentage.
let n = 0   //number of times that interest is compounded per unit t
let t = 0   //the time the money is invested or borrowed for in years

prompt.start();

//get the initials params
prompt.get([
    'Capital inicial', 
    '% de interes anual', 
    'Número de veces que se realiza el interés compuesto anual', 
    'Años que se  invierte el dinero'
    ],function (err, result) {
        p = result['Capital inicial']
        r = result['% de interes anual']
        n = result['Número de veces que se realiza el interés compuesto anual']
        t = result['Años que se  invierte el dinero']

        main(p,r,n,t)
    }
);


/**
 * @author Matías Villar 
 * @date 08-10-2021
 * @description Principal method, call CompoundInterest fx.
 * @param {Number} p 
 * @param {Number} r 
 * @param {Number} n 
 * @param {Number} t 
 */
function main(p,r,n,t){
    console.log( CompoundInterest( Number(p),Number(r)/100,Number(n),Number(t) ) )
}

/**
 * @author Matías Villar
 * @date 08-10-2021
 * @description Calculate Compound interest.
 * @param {*} p 
 * @param {*} r 
 * @param {*} n 
 * @param {*} t 
 * @returns 
 */
function CompoundInterest( p,r,n,t ){
    let result = p * ( Math.pow( [1 + (r/n) ],n*t ) )
    return round(result,2)
}

/**
 * @author Matías Villar
 * @date 08-10-2021
 * @description Round number.
 * @param {Number} number 
 * @param {number} places 
 * @returns 
 */
function round(number,places) {
    return +(Math.round(number + "e+" + places)  + "e-" + places);
}