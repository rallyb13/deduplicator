# deduplicator
De-duplicate a simple data set.

Function "deduplicate" takes an object that includes a "leads" array. It calls a logging function that outputs to console. (see note 1 below)

Each object in the array must contain the properties: _id, email, & entryDate. (see note 2 below) The first two are the properties that should have unique values in the deduplicated data; the entryDate is used to check for the freshest records.


## Two Ways to Run This Code

### Option 1: Add File to Repo & Use Command Line

1. Add json data in a `.js` file, using `module.exports = ` to make the data exportable as in line 1 of `data.js`.
2. Change the name of the required file in line 1 of the `deduplicate.js` file to the name of your new file. (Alternatively, you could just replace the data in `data.js` and not have to change the import statement.)
3. In the termnial, `cd deduplicator` to get into the repo.
4. From inside the repo, simply run `node deduplicate.js` and it will run the file, which already has a call to use the function with `leadsData` as an argument. You will get the running log of duplicates found and changes favored, as well as a log of what data is returned.


### Option 2: Paste into Terminal's Node Server

1. In your terminal, run `node` to start node.
2. Copy lines 3-49 from `deduplicate.js` and paste them into node. The functions are now available in node. (You may want to comment out the console log on line 46, which will now be redundant.)
3. Create a const for whatever data you want to use as an argument. (e.g.: const data = {/* your data here */ });
4. Call the function with your data passed in as an argument. You will get the running log of duplicates found and changes favored, followed by the deduplicated data object that is returned from the function.
5. Hint: use `Ctrl+C` when you are ready to exit the node server.



Note 1: A future improvement could be a logging service. The items currently being logged could also/instead be appended to a running log for later use.

Note 2: A future improvement could remove the `keysToChange` imbedded within the function and instead make that a second argument, so that you could pass in what keys you want to deduplicate by, with ["_id", "email"] set as a default value.
