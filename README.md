<br />
<div align="center" id="top">
  <a href="https://pharmacies-mangement-system.herokuapp.com/" target="_blank">
    <img src="https://img.freepik.com/premium-vector/pharmacy-logo_18099-288.jpg?w=2000" width="200" height="150" alt="Logo" >
  </a>

  <h3 align="center">
    Pharmacies Managment System ::
  </h3>
    <a href="https://pharmacies-mangement-system.herokuapp.com/"> Live link</a>
    ..
    <a href="https://www.figma.com/file/luuxkgeFHCVIRP8xejMMZG/Pharmacy-Project?node-id=0%3A1&t=LnQy4241n2VW93u2-0">Figma</a>
</div>
<br />
<br />
<br />




<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description"> About The Project </a>
    </li>
    <li><a href="#team-members"> Team Members </a></li>
    <li><a href="#technologies">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#figma-design-link">Figma Design</a></li>
    <li><a href="#database-schema">Database Schema</a></li>
  </ol>
</details>
<br />


## Description:
The creation of a full pharmacy management system in the Gaza Strip will be a part of the digital transition with what is happening around us, as we are aware of and watch the world becoming entirely digital.

### **There will be three primary users for this system**
                                      
- The health ministry will end up serving as the system's administrator and have daily access to all pharmacies that have registered for the system, their information, the items they stock, their requests, and their sales history. 
- The second primary user is the pharmacy owner, who will have a profile that allows him to view daily sales history, his own information in addition to the products in his pharmacy, and requests from the ministry of health.
- Finally, a default user will be browsing a landing page alongside the pharmacies and products pages. This user will be able to see each pharmacy profile's information as well as each product's pop-up window, which has all the information that is necessary to know about the product.

## **Figma Design Link**
- [Figma Design](https://www.figma.com/file/luuxkgeFHCVIRP8xejMMZG/Pharmacy-Project?node-id=0%3A1&t=LnQy4241n2VW93u2-0)

## **Database Schema**
![drawSQL-export-2022-11-11_16_56](https://user-images.githubusercontent.com/62811477/201366168-5874163d-0785-4b57-9332-0872c562818b.png)


## **Getting Started**  

## :pushpin: **How to launch app locally** :- 

*  clone this repo by typing this command in your terminal:  
`git clone https://github.com/CA-G12/MoH.git`

*  Run `npm i` to install packages for the app as general.

*  Run `cd client` and `npm i` to install the packages for the client side React Js.

### Database Setup  :clipboard: 

make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names because this database is for testing.

* Run the following command in the database pgcli terminal  
`npm run buildDB` to build database with its tables 
and the command `npm run buildSeeds` to add fake Data.

### **Environment variables:**
Environment variables are one of the ways we keep our product secure. If you want to access our app locally you will need to add your own.
- create .env file at the root of your project
- add your Environment variables
```sh
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
SECRET_KEY= # Your token Secret key
```

## **Technologies**

* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Sequelize](https://sequelize.org/)
* [Material UI](https://mui.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Jest](https://jestjs.io/)
* [React Chart JS](https://react-chartjs-2.js.org/)
* [React Awesome Reveal](https://react-awesome-reveal.morello.dev/)
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
* [Sweetalert](https://sweetalert.js.org/docs/)


## **Our Amazing Leader**
[Raghad Mezied](https://github.com/Raghad-Mezied)


## **Team Members**
- [Ibtisam Hemmo](https://github.com/Ibtisam-Hemmo)
- [Ahmed Abu Sharar](https://github.com/AhmedAbuSharar)
- [Nader Shakshak](https://github.com/Nader-SH)

<p align="right"><a href="#top">back to top</a></p>

