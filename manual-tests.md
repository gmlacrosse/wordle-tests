**Manual Test: WORDLE-CLONE**

**Test Objective:**
To ensure the WORDLE-CLONE meets the requirements and provides a functional and user-friendly experience for the user.

**Test Environment:**

* The web app will be tested on a desktop computer with a modern web browser (Google Chrome, Mozilla Firefox, Safari)
* The web app will be tested on a mobile device (smartphone or tablet) with a modern web browser (Google Chrome, Mozilla Firefox, Safari)

**Test Cases:**

**Test Case 1: Valid Guess**

1. Open the web app in a desktop browser with the querystring to set the test word to 'ninja'
2. Press the keys in order ['n', 'i', 'n', j, a]
3. Press the enter key
4. Verify that the correct letters are hightlighted green
5. Verify that the You Win! messsage is displayed correctly.
6. Verify that the count of winning in one try is 1
7. Verify that the correct word is shown.

**Test Case 2: Invalid Guess**

1. Open the web app in a desktop browser with the querystring to set the test word to 'ninja'
2. Press the keys in order ['a', 'b', 'c', d, e]
3. Press the enter key
4. Verify that the letter a is light blue since it is a part of the word, the rest should be gray as incorrect
5. Verify that the letters below the grid are highlighted the correct colors

**Test Case 3: Guess with All Correct Letters but in Wrong Spot**

1. Open the web app in a desktop browser with the querystring to set the test word to 'ninja'
2. Press the keys in order ['i', 'j', 'n', n, a]
3. Press the enter key
4. Verify that the letters are highlighted correctly
5. Verify that the letters below the grid are highlighted the correct colors

**Test Case 4: Six Attempts**

1. Open the web app in a desktop browser with the querystring to set the test word to 'ninja'
2. Make too many attempts incorrectly guessing the word
3. Verify the message says, "Sorry, you lose!"

**Test Results:**

* Test Case 1: Valid Guess - Pass
* Test Case 2: Invalid Guess - Pass
* Test Case 3: Guess with All Correct Letters but in Wrong Spot - Pass
* Test Case 4: Six Attempts - FAIL - 
It says, "Sorry, you loose!" when should say "Sorry, you lose!"

**Test Report:**

This manual test was conducted to ensure that the WORDLE-CLONE meets the requirements and provides a functional and user-friendly experience for the user. The test results indicate that the app passes all but one test cases.