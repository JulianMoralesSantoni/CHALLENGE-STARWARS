<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

This application aims to manage movies and series. It is also integrated into the STAR WARS API with which it synchronizes your movies. Please read the warnings and support.

# Installation

```bash
$ npm install
```

# Create environment

## Create environment .env with next variable

These variables have the values ​​for my local environment except for the 'APISTARWARS_FILMS' variable. This last variable is mandatory to be able to synchronize.

```bash

DATABASE_USERNAME=root
DATABASE_PASSWORD=admin
DATABASE_NAME=bd_challenge
DATABASE_PORT=3306
DATABASE_HOST=localhost
HOST=8080
APISTARWARS_FILMS=https://swapi.dev/api/films

```

## Import data base

At the root of the repository there is a folder named 'bd_challenge'. This folder contains the MySQL database with the corresponding structure and data to be able to test the model. You will need to import it from MySQL Workbench or your preferred database manager.

# Running the app

## development
$ npm run start

# watch mode
$ npm run start:dev

# Swagger Documentation

When the project is running, you can view the documentation with the following link.

```bash

http://localhost:8080/api

```
# Support

The postman collection used to test the endpoints is attached to the project root. That name is 
'Challenge Conexa.postman_collection'

# WARNIG

When the last tests were carried out, last-minute failures occurred. Among them, failure in data validation (decorators) and lack of memory in the heap when some enpoints are executed.
It is recommended to test synchronization at the end.

