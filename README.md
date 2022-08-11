# Argent Bank

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of contents

-   [Description](#description)
    -   [Scenario](#scenario)
-   [Installation](#installation)
    -   [1 Install the backend](#1-install-the-backend)
    -   [2 Install the frontend](#2-install-the-frontend)
    -   [Troubleshooting](#troubleshooting)
-   [How to use](#how-to-use)
    -   [Visualize and edit the project](#visualize-and-edit-the-project)
        -   [Launch the project](#launch-the-project)
        -   [Populated Database Data](#populated-database-data)
    -   [Use the tests](#use-the-tests)

## Description

### Scenario

Coming soon.

## Installation

### 1 Install the backend

1. Get the backend's repo content by [direct download](https://github.com/leoncik/LeonardWojcik_13_20072022_API/archive/refs/heads/master.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/LeonardWojcik_13_20072022_API.git
```

For more information about the backend, please visit the repo's page here : https://github.com/leoncik/LeonardWojcik_13_20072022_API

2. Make sure that [MongoDB Community Server](https://www.mongodb.com/try/download/community) is installed on your machine.

3. Make sure that [Node.js](https://nodejs.org/en/) (preferably Node.js version 16.0.0 or lower) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).

Then install the dependencies :

```sh
npm install
```

4. You are ready to do !

### 2 Install the frontend

1. Get this repository's content by [direct download](https://github.com/leoncik/LeonardWojcik_13_20072022/archive/refs/heads/main.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/LeonardWojcik_13_20072022.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).

Then install the dependencies :

```sh
yarn install
```

3. You are ready to do !

### Troubleshooting

Q : MongoDB does not seem to work on my computer.  
A : One possible reason is that your processor is not supported by the most recent version of MongoDB. Installing an earlier version may fix the problem. For this projet, I had to use the package [mongodb36-bin](https://aur.archlinux.org/packages/mongodb36-bin).

Q : Populating the database does not work.  
A : Before populating the database or running the dev server, first make sure that MongoDB is running. The procedure may vary depending of your operating system. For Archlinux, you will need to run : `systemctl start mongodb`

Q : The dev server is crashing.  
A : Maybe your version of Node.js is not compatible with this project. Please try to downgrade to v12.0.0 or v16.0.0. To do so, I recommend using [Fast Node Manager](https://github.com/Schniz/fnm).

## How to use

### Visualize and edit the project

#### Launch the project

1. Run the backend :

    - Make sure that you are in the backend's root directory.
    - If this is the first time you are using the backend, you will need tot populate the database. To do so, run `npm run populate-db`.
    - Run the local dev server with : `npm run dev:server`.
    - Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

For more information about this API, check the README in the API's repo : https://github.com/leoncik/LeonardWojcik_13_20072022_API

2. Run the frontend :

    - Make sure that you are in the root directory of the project.
    - Run `yarn dev`.

3. You should be able to view the website on : http://127.0.0.1:5173/

#### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

##### Tony Stark

-   First Name: `Tony`
-   Last Name: `Stark`
-   Email: `tony@stark.com`
-   Password: `password123`

##### Steve Rogers

-   First Name: `Steve`,
-   Last Name: `Rogers`,
-   Email: `steve@rogers.com`,
-   Password: `password456`

### Use the tests

To run and watch the tests in the console, run : `yarn test`.

To get a coverage report while running the tests, run : `yarn coverage`. If you want to visualize the coverage report, you can run a live server (if you are using VSCode, I recommend using [this extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) and use this url : http://127.0.0.1:5500/coverage/index.html
