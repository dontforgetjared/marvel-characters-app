# Marvel Characters App

## Introduction
A fun example app using the Marvel Developer API and built with Typescript, React, Redux/RTK, Tailwind CSS, & Vite. 

## Installation

1. Clone the repository.
    ```
      git clone git@github.com:dontforgetjared/marvel-characters-app.git
    ```
2. Run `yarn` or `npm i` to install dependencies.

## Running locally

1. Run `yarn dev` or `npm run dev` to start local dev server.

2. Navigate to local dev server in your browser of choice using the URL provided in the termminal output.

## Marvel API
You will need a [Marvel Developer account](https://developer.marvel.com/account) to get an API Key. Learn more about Authentication with the Marvel API [here](https://developer.marvel.com/documentation/authorization).

## Environment Variables (required)
1. Create an .env file
2. Add the followoing 
   ```
    VITE_API_TS=1
    VITE_API_KEY=<Your-Marvel-Developer-API-Key>
    VITE_API_HASH=<Your-Generated-Hash>
   ```