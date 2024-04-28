let qnt = 0, n1= 100, n2= 0 
do {
    for (i= 2; i < n1 ; i++){
        if (n1 % i == 0 ){
            break
        }
    }
    if (i  == n1){
        qnt++
        console.log(n1)
    }
    n1++
}while (qnt < 50)

