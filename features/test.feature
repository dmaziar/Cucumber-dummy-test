Feature: test feature
  Scenario Outline: find nordea
    Given google is opened
    When search for nordea
    Then nordea is on the first place

Examples:
| test |
| 1 |
#| 2 |