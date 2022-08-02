    let foodStock = parseInt(prompt("What is our HotDog stock?"));
    let humanLimit = 10;
    let userAns = '';
    let i = 0;
    

    do{
        userAns = prompt("Keep eating? Y/N").toUpperCase();

        if( i >= humanLimit) {
            alert("You have reached the limit!! For your well-being we can't give you more food!");
            userAns = 'N';    
        }
        else {
            
            alert("You only ate " + (i+1) + " Hotdogs.");
            userAns = prompt("Still hungry? Y/N").toUpperCase();
            
        }

        i++
    }
    while( i < foodStock && userAns == "Y") 

    if(i >= foodStock) {
            alert("No more food in stock!");
            userAns = 'N';
    }
    

