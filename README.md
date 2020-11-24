# PokeApp

## Description

This app was a 4 day project designed to be an technical challenge for a Junior Front-end position at Ilia Digital. It's a Pokemon TCG App that would need to fulfill the following requirements:

  - Must use React,Vue or Angular;
  - Must use the API Pokemon TCG(https://pokemontcg.io/);
  - Be responsive, mobile first;
  - Must utilize routes;
  - The card's list should be ordered by name ASC;
  - Must be able to search cards by name;
  - Location suport (although the translation unnecessary);
  - Functional build (must be able to download and run the code);
  - Unitary Tests
  - E2E Tests;
  - Must utilize SASS;
  - Must utilize React Store and State (Vuex, Redux, etc).
  
  Not all requirements were met, but the MVP is done and fully functional.
  
  For more information - https://github.com/aisdigital/FrontEndChallenge/tree/master - 

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all necessary dependencies and packages to run the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Inside the code

After running the scripts in the previous section and accessing the main -src- folder, you will encounter (no 'pun'kemon intended rsrs) a simple folder structure that reflects the React structure: Components, Pages, Context, Service, Styles and Utils. I'll briefly explain each next:

  ### Components
  
   All components are placed inside this folder. Each one has its specific subfolder, that holds both .jsx and .scss files that makes the said component. For example:
   
  > Components (folder)
    >> Header (sub-folder)
      >>> Header.jsx
      >>> header.scss

