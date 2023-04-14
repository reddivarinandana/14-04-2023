//Write a program to check whether a given number is prime or not?

        let count=0;
        let number=7;
        for(let i=2; i<number/2; i++){
            if(number%i==0){
                count++;
            }
        }
        if(count==2){
            console.log("Prime Number");
        }else{
            console.log("Not Prime Number") ;
        }
    


