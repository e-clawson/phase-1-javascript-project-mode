# Phase 1 Project - Bulldog Dogsite!

## Project Requirements 

This project was created to fufill the requirements of Flatiron School's part-time online software engineering bootcamp phase 1 project. This project required students to build a Single Page Application (SPA) that integrates data from a public API. This SPA must also have some user interactivity including 3 event listeners. This project highlights my ability to create a frontend of a page using HTML, CSS, and Javascript and to use JSON. 

### Project Description 

To complete this project, I created Bulldog Dogsite, a single page application that lets users search, look through, and like different bulldogs. I chose to use a smaller portion of the bulldog breed and sub-breed data from the Dog CEO public api (https://dog.ceo/dog-api/). Users can enjoy three main features when using this site. Upon opening the site images of Bulldogs will be displayed, along with a bit of text, a search bar, and a "Show Me A Cat!" button. In order to see images of specific sub-breeds, (including Boston Terriers, French Bulldogs, and English Bulldogs) users can type a sub-breed into the search bar and images of only the searched breed will be displayed on the page. Users can also click a "like dog" button (displayed under each image as a button with '💖 🐕') that will count the number of likes each picture gets, and persists in counting them until the page is refreshed. Finally, if the user doesn't like dogs, they can click on a "Show Me A Cat!" button which will display an emjoi of a cat for each time it is clicked. 

#### JSON Server Installation Instructions

This project uses an db.json file with a key of 'Dogs' that is stored in a json-server. 

example: 
```
{ "Dogs":
  [
    {
      "id": 1,
      "Breed": "Boston Terrier",
      "Name": "Hank",
      "image": "https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/20200710_175933.jpg"
    },
```

To install a JSON Server, run the following command in your terminal: 
```
npm install -g json-server
```
To access this json server, run the following command in your terminal: 
```
json-server --watch db.json
```
You can use http://localhost:3000/Dogs to reach the Dogs data. 

More information can be found at: https://www.npmjs.com/package/json-server

## Support 
email emclawson1@gmail.com 

## Resources

- [Public APIs](https://github.com/public-apis/public-apis)
- [Dog CEO API](https://dog.ceo/dog-api/)
- [json-server] [http://localhost:3000/Dogs]

[json-server]: https://www.npmjs.com/package/json-server

## Acknowledgement 
Thank you to Mohammed Shaikh for teaching me and helping me with this project and to the Flatiron team for creating the parameters and framework for this project.
