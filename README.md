# Libraries

    {
      "name": "todo-api",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "node server/server.js",
        "test": "export NODE_ENV=test || SET \"NODE_ENV=test\" && mocha server/**/*test.js",
        "test-watch": "nodemon --exec 'npm test'"
      },
      "engines": {
        "node": "v9.5.0"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.18.3",
        "crypto-js": "^3.1.9-1",
        "express": "^4.16.3",
        "jsonwebtoken": "^8.3.0",
        "lodash": "^4.17.10",
        "mongodb": "^3.1.1",
        "mongoose": "^5.2.7",
        "validator": "^10.6.0"
      },
      "devDependencies": {
        "expect": "^1.20.2",
        "mocha": "^3.5.3",
        "nodemon": "^1.18.3",
        "supertest": "^3.1.0"
      }
    }
