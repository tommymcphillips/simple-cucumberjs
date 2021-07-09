import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class additionSteps {
    private number1: number = 0;
    private number2: number = 0;
    private result: number= 0;

           //first number is 99999999 and second number is 20
    @given('first number is {int} and second number is {int}')
    public firstNumberIsAndSecondNumberIs(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
    }

    @when('user executes sum function')
    public userExecutesSumFunction() {
        this.result = Number(this.number1) + Number(this.number2);
    }

    @then('the sum is {int}')
    public theSumIs(expectedResult: number) {
        assert.equal(this.result, expectedResult);
    }

    @given('user wants to sum the following numbers:')
    public userWantsToSumTheFollowingNumbers(numbersDatatable: any) {
        const numbersDataTableArray = numbersDatatable.rawTable
        this.number1 = numbersDataTableArray[0];
        this.number2 = numbersDataTableArray[1];
    }

    @given('first number is {int} and the {int}')
    public firstNumberIs(number1: number, number2: number) {
        this.number1 = number1
        this.number2 = number2
    }


}

