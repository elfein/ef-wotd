# WOTD Code Challenge

### Contents

1. Link to Deployed Site
2. Planning & Process
3. Technologies Used
4. Resources
5. Development Considerations

## 1. Link to Deployed App

## [Deployed App on Heroku](https://ef-wotd.herokuapp.com/)

## 2. Planning & Process

- I spent some amount of time before writing actual code finding a suitable source of random vocabulary words. 

- Next, I planned how my API's database would function. I decided to use MongoDB, storing "word"s as documents with a "name", "definition", and a "dateId" field between 1 and 365.

- I made a very simple wireframe sketch, consisting of the following: 

![wireframe](https://66.media.tumblr.com/9c5e7a0f35d63372801ad2faa6385be2/tumblr_pktatvOt4K1uj0ljmo1_1280.png)

- My next step was creating a [simple Trello board](https://trello.com/b/IDWPjoLW/ef-wotd-board) to make sure I would meet all requirements. The user stories in this board reflected my general plan of constructing my MERN stack application, with an API storing and serving up a set of 365 words.

## 3. Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- React.js
- Semantic UI React
- Axios

## 4. Resources

- I used the this [Random Lists](https://www.randomlists.com/random-vocabulary-words) website to generate my list of 365 vocabulary words.
- [This dicussion](https://www.reddit.com/r/reactjs/comments/8fu5td/how_to_get_a_component_to_rerender_when_the_url/) helped me resolve an issue with rerendering my component when moving between previous and next vocabulary words.

## 5. Development Considerations

### Setbacks

- I ran into an issue with my "next" and "previous" links, where the component did not rerender or update state because the URL was still an exact match based on my React Router setup. I was able to resolve this using the componentDidUpdate method, but wonder if a more robust or streamlined option were available.

- Due to the 2 hour time constraint, I was hesitant to build out certain functionality to handle edge cases or provide a more interesting user experience. For example, I would have liked to create more handling for leap years needing 366 words.

- I would still like to learn more about optimizing performance for different aspects of my project, since this could affect future possibilities for expanding functionality. 

### Successes

- This was my 2nd time using Sematic UI React for my front-end styling needs, and it once again proved to be an efficient path to creating a clean, pleasing layout.

- To seed my database, I used a method to loop through my array of items and save them as documents. I was happy with achieving a relatively straightforward way of doing this, since up to this point I had only called the "save" method on individual variables at once.

### Moving Forward

- If I were to continue this project, I would like to build out the functionality, as mentioned before. This could include providing more information with each word, such as displaying the associated date. I could also see adding a user model that could store favorite words, given enough time.

- I would have liked to clean up and update the database given more time; I could add part of speech information to each word, or found more complete, well-worded definitions.