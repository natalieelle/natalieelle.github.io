// Import Component
import Component from './Component.js';
import React from 'react';
// Article is a child object of Component
class Article extends React.Component {

  constructor (props) {
    super(props);
    // Send what it gets to its parent object

  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      Here is an Affirmation for the day:
    ` 
    );
    
  }

}

export default Article;
