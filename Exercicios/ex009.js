for(let num =2; num <= 50; num++){
    let primo = true;
    for(let i = 3; i <= Math.sqrt; i++){
        if(num % i === 0){
            primo = false;
            break;
        }
    }
    if(primo){
        console.log(`${num} é primo`);
    }
}