# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by yours truly as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cynthia-lam/lotide`

**Require it:**

`const _ = require('@cynthia-lam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: returns the first item of an array
* tail: returns the last item of an array
* middle: returns the middle item of and array if its length is odd,or middle two items if length is even
* countLetters: given a string, returns an object counting how many of each letter are in the string
* countOnly: given an array of strings, allItems, and an object, itemsToCount, specifying what items to count, countOnly returns an object with key-value pairs that are the string's characters and counts of how many times the items in itemsToCount occur
* findKey: given an object and callback, returns the first key for which the callback returns a truthy value. If none, returns undefined
* findKeyByValue: takes in an object and a value, returns the first key which contains the given value. If no key, returns undefined.
* flatten: given an array containing elements including nested arrays of elements, returns a "flattened" version of the array.
* letterPositions: given a string, returns an object with key-value pairs that are the string's characters and all the indices where each character is found.
* map: performs a callback function on every element of an array
* takeUntil: given an array and a callback, returns a slice of the array stopping when the callback returns a truthy value
* without: given two arrays, source and itemsToRemove, returns a subset of source, without elements found in itemsToRemove. 
* assertArraysEqual: given two arrays, logs an appropriate message to the console based on if the arrays are equal
* assertEqual: given two values, logs an appropriate message to the console based on if the values are equal
* assertObjectsEqual: given two objects, logs an appropriate message to the console based on if the arrays are equal
* eqArrays: given two arrays, returns true or false, based on a perfect match
* eqObjects: given two objects, returns true or false, based on a perfect match
