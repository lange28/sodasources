/**
 * Created by lange_000 on 01.11.2015.
 */

function VendingMachine(){
    this.SODAPRICE=30;
    this.CurentBalance=0;
    this.Money = {
        HALF_DOLLAR : {value : 0.50, count : 2},
        QUARTER : {value : 0.25, count : 2},
        NICKEL : {value : 0.05, count : 2},
        PENNY : {value : 0.01, count : 2}
    }
}
function Customer(){
    this.cash=0;
    this.sodaBotles=0;
    this.Money = {
        HALF_DOLLAR : {value : 0.50, count : 4},
        QUARTER : {value : 0.25, count : 4},
        NICKEL : {value : 0.05, count : 10},
        PENNY : {value : 0.01, count : 30}
    }
}

function TodoCtrl($scope){
    $scope.click= function(){

        var Sveta = new Customer();

        var Pepsico = new VendingMachine();

        /*for (key in Sveta.Money)
        {
            //alert("Вот таких монеток: "+Sveta.Money[key].value+" аж штук- "+ Sveta.Money[key].count);
            alert("Рыба moneys like that- "+Sveta.Money[key].value+" Sveta have got - "+ Sveta.Money[key].count);
        }

        for (key in Pepsico.Money)
        {
            //alert("Вот таких монеток: "+Sveta.Money[key].value+" аж штук- "+ Sveta.Money[key].count);
            alert("moneys like that- "+Pepsico.Money[key].value+" Pepsico have got -"+ Pepsico.Money[key].count);
        }*/

        var Sum=17;
        for (key in Pepsico.Money){
            if (Sum==0){break;}
            while(Pepsico.Money[key].count != 0) {
                if (Math.floor(Sum / Pepsico.Money[key].value)) {
                    Sveta.Money[key].count += 1;
                    Sveta.Money[key].count -= 1;
                    Sum -= Pepsico.Money[key].value;
                }
                else{break;}
            }
        }

        var a = 5/2;
        alert(Math.floor(a));
    }
}