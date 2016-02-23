
# Application Architecture and build setup

## environment
- docker (vagrant, OSX) (https://www.docker.com/)

    > Docker containers wrap up a piece of software in a complete filesystem that contains everything it needs to run: code, runtime, system tools, system libraries – anything you can install on a server. This guarantees that it will always run the same, regardless of the environment it is running in.

- CI

    > Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

    - Jenkins (https://jenkins-ci.org/)

        > Jenkins is the leading open source automation server. Built with Java, it provides hundreds of plugins to support building, testing, deploying and automation for virtually any project.


- Gulp - Streaming build system
- Babel ES6
- browserSync
- browserify

- can be deployed to EC2 or Heroku (or most anywhere else! - if you buy the Koolaid)

## Architecture
- Babel ES6 (ES2015)/JSX

- React.js (https://facebook.github.io/react/)

    > React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.

- Flux (https://facebook.github.io/flux/docs/overview.html)

    > Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

- Fluxible (http://fluxible.io/)

    >  A Pluggable Container for Isomorphic Flux Applications

- Database Postgresql using ORM Sequelize (http://docs.sequelizejs.com/en/latest/)
- S3/Cloudfront
