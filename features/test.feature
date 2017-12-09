@featureTag
Feature: test feature

  @testTag @testTag2
  Scenario Outline: find nordea
    Given google is opened
    When search for nordea
    Then nordea is on the first place

Examples:
| test |
| 1 |
#| 2 |