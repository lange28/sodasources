/**
 * Created by lange_000 on 01.11.2015.
 */

//Vending machine class
function VendingMachine(){

    this.SODAPRICE=0.3; //Constant price for soda can

    this.curentBalance = 0; //Amount of money inserted buy customer

    //counting total amount of money function
    this.bank=function(){
        var sum=0;
        for (key in this.Money)
        {
            sum +=this.Money[key].count * this.Money[key].value;
        }
        return sum;
    };

    //wallet object
    this.Money = {
        HALF_DOLLAR : {value : 0.50, count : 2},
        QUARTER : {value : 0.25, count : 2},
        NICKEL : {value : 0.05, count : 2},
        PENNY : {value : 0.01, count : 2}
    }
}
//customer class
function Customer(){
    this.sodaBotles=0; //number of soda bottles owned

    //wallet object
    this.Money = {
        HALF_DOLLAR : {value : 0.50, count : 4},
        QUARTER : {value : 0.25, count : 4},
        NICKEL : {value : 0.05, count : 10},
        PENNY : {value : 0.01, count : 30}
    }
}

//Angular controller for the app
function VendCtrl($scope){

    // returning and calculating the change
    $scope.returnClick= function(){

        //Starting with the biggest value coin possible returning them to customer
        var Sum = pepsiMachine.curentBalance.toFixed(2);
        for (key in pepsiMachine.Money){
            if (Sum==0){break;}
            while(pepsiMachine.Money[key].count != 0) {
                if (Math.floor(Sum / pepsiMachine.Money[key].value)!=0) {
                    customer.Money[key].count += 1;
                    pepsiMachine.Money[key].count -= 1;
                    Sum -= pepsiMachine.Money[key].value;
                    pepsiMachine.curentBalance -= pepsiMachine.Money[key].value;
                }
                else{break;}
            }
        }


       update();
    };

    //button handlers
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
        if (pepsiMachine.curentBalance >= pepsiMachine.SODAPRICE) {
            pepsiMachine.curentBalance -= pepsiMachine.SODAPRICE;
            customer.sodaBotles += 1;
            update();
        }
    }

    // updating components
    function update() {
        $scope.vendorBalance = pepsiMachine.curentBalance.toFixed(2);
        $scope.custHalf = customer.Money.HALF_DOLLAR.count;
        $scope.custQuar = customer.Money.QUARTER.count;
        $scope.custNick = customer.Money.NICKEL.count;
        $scope.custPen = customer.Money.PENNY.count;

    }

    // Initialize objects and fill components
    var customer = new Customer();
    var pepsiMachine = new VendingMachine();


    $scope.vendorBalance = pepsiMachine.curentBalance.toFixed(2);
    $scope.custHalf = customer.Money.HALF_DOLLAR.count;
    $scope.custQuar = customer.Money.QUARTER.count;
    $scope.custNick = customer.Money.NICKEL.count;
    $scope.custPen = customer.Money.PENNY.count;


}


