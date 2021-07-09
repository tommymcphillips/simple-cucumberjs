Feature: Addition

  # Inputs first number and second number are in one line
  Scenario: Sum of two numbers

    Given first number is 50 and second number is 80
    When user executes sum function
    Then the sum is 130

 # Using Cucumber DataTable to get all inputs
  Scenario: Sum of two numbers

    Given user wants to sum the following numbers:
      | 20 |
      | 30 |
    When user executes sum function
    Then the sum is 50

  # Inputs are supplied as examples, there are 2 examples '10 + 20 = 30', '50 + 60 = 110'
  Scenario Outline: Sum of two numbers - version 5

    Given first number is <firstNumber> and the <secondNumber>
    When user executes sum function
    Then the sum is <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 10          | 20           | 30     |
      | 50          | 60           | 110    |



