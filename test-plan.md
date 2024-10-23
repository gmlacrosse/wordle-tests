**Test Plan: WORDLE-CLONE**

**Test Objective:**
To ensure WORDLE-CLONE meets the requirements and provides a functional and user-friendly experience for the user.

**Test Scope:**

* The web app's main functionality, including:
	+ Guessing the WORDLE in six tries
	+ Submitting guesses using the keyboard
	+ Displaying the color of the tiles after each guess
* The web app's user interface, including:
	+ The 5-letter grid input field
	+ The submit button
	+ The tile color display

**Test Deliverables:**

* Test report
* Test plan
* Test schedule
* Test results

**Test Environment:**

* The web app will be tested on a desktop computer with a modern web browser (Google Chrome, Mozilla Firefox, Safari)
* The web app will be tested on a mobile device (smartphone or tablet) with a modern web browser (Google Chrome, Mozilla Firefox, Safari)

**Test Cases:**

* **Test Case 1: Valid Guess**
	+ Preconditions: The user has entered a 5-letter word
	+ Steps:
		1. The user types a 5-letter word into the grid input field
		2. The user presses the enter key
		3. The web app displays the color of the tiles
		4. The user verifies that the tiles are colored correctly
	+ Expected Result: The tiles are colored correctly (green for correct spot, blue for correct but wrong spot, grey for incorrect)
* **Test Case 2: Invalid Guess**
	+ Preconditions: The user has entered a non-5-letter word
	+ Steps:
		1. The user types a non-5-letter word into the grid input field
		2. The user presses the enter key
		3. The web app displays an error message
		4. The user verifies that the error message is displayed correctly
	+ Expected Result: An error message is displayed indicating that the guess is invalid
* **Test Case 3: Guess with No Letters**
	+ Preconditions: The user has entered no letters into the grid input field
	+ Steps:
		1. The user presses the enter key
		2. The web app displays the color of the tiles
		3. The user verifies that the tiles are colored correctly
	+ Expected Result: The tiles are colored correctly (green for all letters)
* **Test Case 4: Guess with All Correct Letters but in Wrong Spot**
	+ Preconditions: The user has entered a 5-letter word with all correct letters but in the wrong spot
	+ Steps:
		1. The user types a 5-letter word into the grid input field
		2. The user presses the enter key
		3. The web app displays the color of the tiles
		4. The user verifies that the tiles are colored correctly
	+ Expected Result: The tiles are colored correctly (blue for all letters)
* **Test Case 5: Guess with No Correct Letters**
	+ Preconditions: The user has entered a 5-letter word with no correct letters
	+ Steps:
		1. The user types a 5-letter word into the grid input field
		2. The user presses the enter key
		3. The web app displays the color of the tiles
		4. The user verifies that the tiles are colored correctly
	+ Expected Result: The tiles are colored correctly (grey for all letters)
* **Test Case 6: Six Attempts**
	+ Preconditions: The user has entered a 5-letter word and has made five attempts
	+ Steps:
		1. The user types a 5-letter word into the grid input field
		2. The user presses the enter key
		3. The web app displays the color of the tiles
		4. The user verifies that the tiles are colored correctly
	+ Expected Result: The user has won the game

**Test Schedule:**

* Test planning: 1 day
* Test execution: 3 days
* Test reporting: 1 day

**Test Resources:**

* Test environment: desktop computer with a modern web browser and mobile device with a modern web browser
* Test tools: web browser, keyboard, mouse
* Test personnel: 2 testers

**Test Metrics:**

* Test coverage: 100%
* Test pass rate: 100%
* Test failure rate: 0%
* Test report: comprehensive report of test results and findings

