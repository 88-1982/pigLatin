# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Specifications

Describe: vowelCounter();

Test: "It ignores non-alphabetical characters since they can't be vowels."
Expect(vowelCounter("*&$92%")).toEqual(0);

Test: "It recognizes a single vowel."
Expect(vowelCounter("a")).toEqual(1);

Test: "It recognizes a single vowel regardless of case."
Expect(vowelCounter("A")).toEqual(1);

Test: "It recognizes multiple vowels in a single word."
Expect(vowelCounter("cater")).toEqual(2);

Test: "It recognizes a single vowel in a word with multiple characters."
Expect(vowelCounter("cat")).toEqual(1);

Test: "It recognizes vowels in a multiple-word sentence."
Expect(vowelCounter("cats catered the event")).toEqual(7);

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Expect(vowelCounter("CATS CATERED THE EVENT")).toEqual(7);

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Expect(vowelCounter("CaTS CATEReD ThE EveNT")).toEqual(7);


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_