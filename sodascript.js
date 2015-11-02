/**
 * Created by lange_000 on 01.11.2015.
 */
//(function(){
function VendingMachine(){
    this.SODAPRICE=30;
    this.curentBalance = 0;
    this.bank=function(){
        var sum=0;
        for (key in this.Money)
        {
            sum +=this.Money[key].count * this.Money[key].value;
        }
        return sum;
    }
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
    $scope.returnClick= function(){

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

        var Sum=pepsiMachine.curentBalance.toFixed(2);
        for (key in pepsiMachine.Money){
            if (Sum==0){break;}
            while(pepsiMachine.Money[key].count != 0) {
                if (Math.floor(Sum / pepsiMachine.Money[key].value)) {
                    customer.Money[key].count += 1;
                    customer.Money[key].count -= 1;
                    Sum -= pepsiMachine.Money[key].value;
                }
                else{break;}
            }
        }

       // update();
    };

    $scope.coinHClick = function(){
        if (customer.Money.HALF_DOLLAR.count > 0) {
            pepsiMachine.Money.HALF_DOLLAR.count += 1;
            customer.Money.HALF_DOLLAR.count -= 1;
            pepsiMachine.curentBalance += pepsiMachine.Money.HALF_DOLLAR.value;
        }
        update();
    };

    $scope.coinQClick = function(){
        if (customer.Money.QUARTER.count > 0) {
            pepsiMachine.Money.QUARTER.count += 1;
            customer.Money.QUARTER.count -= 1;
            pepsiMachine.curentBalance += pepsiMachine.Money.QUARTER.value;
        }
        update();
    };
    $scope.coinNClick = function(){
        if (customer.Money.NICKEL.count > 0) {
            pepsiMachine.Money.NICKEL.count += 1;
            customer.Money.NICKEL.count -= 1;
            pepsiMachine.curentBalance += pepsiMachine.Money.NICKEL.value;
        }
        update();
    };
    $scope.coinPClick = function(){
        if (customer.Money.PENNY.count > 0) {
            pepsiMachine.Money.PENNY.count += 1;
            customer.Money.PENNY.count -= 1;
            pepsiMachine.curentBalance += pepsiMachine.Money.PENNY.value;
        }
        update();
    };
    $scope.buyClick = function(){
        if (pepsiMachine.curentBalance >= 0.3) {
            pepsiMachine.curentBalance -= 0.3;
            customer.sodaBotles += 1;
            update();
        }
    }
    function update() {
        $scope.vendorBalance = pepsiMachine.curentBalance.toFixed(2)+"$";
        $scope.custHalf = customer.Money.HALF_DOLLAR.count;
        $scope.custQuar = customer.Money.QUARTER.count;
        $scope.custNick = customer.Money.NICKEL.count;
        $scope.custPen = customer.Money.PENNY.count;

    }
    var customer = new Customer();
    var pepsiMachine = new VendingMachine();

}


//}());