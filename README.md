# Book Search Engine

## Description

This is an application that uses the google books repository to search for books for the user and display them in a list. The user can then add any book they like and it will be recorded and saved for them.
The user can search books without having an account, but to save books they need to create and login to their account.

## Table of Contents

- [Deployed Link](#deployed-link)
- [GitHub Link](#github-link)
- [Client and Server Structure](#client-and-server-structure)
- [Install Instructions](#install-instructions)
- [Executing Instructions](#executing-instructions)
- [Screenshot](#Screenshot)

---

## Deployed Link

This is the gitHub link <br>
[https://evening-cove-76375.herokuapp.com/](https://evening-cove-76375.herokuapp.com/)
<br>

---

## GitHub Link

This is the link to the deployed website <br>
[https://github.com/jkoufalas/Book-Search-Engine](https://github.com/jkoufalas/Book-Search-Engine)
<br>

---

## Client and Server Structure

The Application is split between 2 applications, the first is the client side application that runs the browser application and the second is the server side application that deals with all the server side logic.
This means that the application is split over two folders. In this case the client folder holds all the client side application files and the server folder holds all the server side application files.

Each folder, client and server have their own package.json file. This file holds the dependancies and scripts needed for each separate application.
<br>

---

## Install Instructions

### MongoDB

Since this application uses MongoDB there needs to be an instance for the application to connect to.
Therefore the user must install MongoDB before using this application.

The dependancies are listed within the package.json file within both the client and server folders.

Since the dependancies are listed within the package.json file, they will autmatically installed for both the server and client with the following command

```
npm run install
```

This will use the global package.json file and use the scripts in there to call the install instructions to both the client and server in series.

---

<br>

## Executing Instructions

This will use the global package.json file again and use the scripts in there to concurrently call both the client start and server start scripts. This will have both applications running for the overall application to be working.

```
npm run develop
```

<br>

---

## Screenshot

This image provides a sample of the completed website. It shows the users saved books page.

![This professional portfolio holds link to all my work that demonstrates my skills.](./assets/screenshot.png)
<br>

---
