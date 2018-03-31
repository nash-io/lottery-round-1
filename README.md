<p align="center">
  <img
    src="http://neonexchange.org/img/NEX-logo.svg"
    width="125px;">

</p>
<h3 align="center">NEX ICO Lottery Round 1</h3>
<hr/>


This is a repository that contains the data submitted to our lottery system, our methodology for determining the winners of the lottery, and the results of the lottery.  

All results are verifiable by anyone who wishes to follow the steps below. These results are final

## Setup


1. Make sure you have a recent version of `node` and `yarn` installed.

2. Install some modules

```
$ npm install
or
$ yarn install
```


## Run the lottery sort

1. You can run the lottery sort on the `entrant_document_hashes.json` file, which is a json object with a list of document hashes.  This will save a list of winning document hashes to `winners.json`

```
$ node sortEntrants.js
or
$ yarn sort
```



### What is the hash of my document?


1. Run the `hashGenerator.js` script, passing it the id you sent to the lottery registration process.

```
$ node hashGenerator.js "ABC-my-document-id-123"
or
$ yarn hash "ABC-my-document-id-123"
$ [Output] ABC-my-document-id-123 -> 5790769a8b21d63a3f0bec96d4268e02eadf7d8a4eb2c4b7c156b502162fd9ea
```

2. In this instance, `5790769a8b21d63a3f0bec96d4268e02eadf7d8a4eb2c4b7c156b502162fd9ea` is the hash for your document that was used in the lottery.

3.  Now you can check the `winning_hashes.json` to see if your document hash is in the output.

4. If you cant find your document hash in the `entrant_document_hashes.json`, it is possible you mistyped your document ID. 

We have also removed submissions from the US, as they are not eligible for the lottery, and a few submissions have been removed due to fraudulent behaviour being detected.


### What does the lottery sort do?

When the documents were accepted in the lottery process, they were hashed using the `sha256 hmac` algorithm with a salt of `DssZksS81f`.  This process takes the result of that hash and then uses the last 32 characters of the document hash.

These last 32 characters are then sorted alphabetically, and the first 25,000 document hashes are selected as winners.



