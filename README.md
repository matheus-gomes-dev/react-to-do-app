# To do app (react)
Simple CRUD application to practice react and webpack. Create, read, update and delete tasks that you have to do!

![Alt Text](https://media.giphy.com/media/1k2wp8GXEhXFrqpmQj/giphy.gif)

# Local Installation
Clone this repository, then inside the backend folder, create a new folder called *database*. Run:

```
mongod --port 27017 --dbpath database
```


You will need to have [MongoDB installed in your machine](https://docs.mongodb.com/manual/installation/)


Still inside the backend folder, run the following commands to start the nodeJS server:

```
npm install
npm run dev
```


Once backend and mongoDB are running, go back to the root app's folder and run:

```
npm install
npm run dev
```

Now the application is ready and running on *http://localhost:8080*. Have fun! :)
