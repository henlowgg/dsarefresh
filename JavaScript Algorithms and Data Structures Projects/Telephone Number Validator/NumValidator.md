Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.









-------


Area code: It can be just 3 digits, or enclosed in parentheses.
First separator: It can be a space, a dash, or no separator at all.
First set of 3 digits: Following the area code.
Second separator: Same as the first separator.
Last set of 4 digits: Concluding the phone number.
Country code (optional): If present, it must be 1, followed by a space or a dash.