// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.addEventListener("click", this.expandArticle);
    this.closeButton = document.createElement("SPAN");
    this.closeButton.textContent = "Mark as Read";
    this.closeButton.classList.add("close-button");
    this.domElement.appendChild(this.closeButton);
    this.closeButton.addEventListener("click", this.closeArticle);
  };

  expandArticle = (e) => {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    if (this.domElement.classList.contains("article-open")) {
      this.expandButton.textContent = "Click to Close";
    } else {
      this.expandButton.textContent = "Click to expand";
    }
  };

  closeArticle = (e) => {
    this.domElement.style.display = "none";
    e.stopPropagation();
  }


};

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll(".article");

const articleClassify = function(content) {
  new Article(content);
}
articles.forEach(articleClassify);

// STRETCH LET'S DO DIS

let articleBuilder = function(data){
  const articlesDiv = document.querySelector(".articles")

  // Create Article div
  let newArticle = document.createElement("div");
  newArticle.classList.add("article", "inProgress");
  articlesDiv.appendChild(newArticle);
  let newArticleDOM = document.querySelector(".inProgress")

  // Add title
  let newArticleTitle = document.createElement("h2");
  newArticleTitle.textContent = data.title;
  newArticleDOM.appendChild(newArticleTitle);

  // Add date
  let newArticleDate = document.createElement("p");
  newArticleDate.classList.add("date");
  newArticleDate.textContent = data.date;
  newArticleDOM.appendChild(newArticleDate);

  // Add content
  data.content.forEach (function(para) {
    if (!para == "") {
      newArticleDOM.appendChild(document.createElement("p")).textContent = para;
    }
  })

  
  newArticleDOM.classList.remove("inProgress")

  // Add expand button
  let newArticleExpandButton = document.createElement("span");
  newArticleExpandButton.classList.add("expandButton");
  newArticleDOM.appendChild(newArticleExpandButton);

  articleClassify(newArticleDOM);
  
}

document.querySelector(".submit-button").addEventListener("click", articleSubmit)

let submission = {};

function articleSubmit(event) {
  event.preventDefault();
  submission = {};
  const arr = document.querySelectorAll(".input-data");
  submission["title"] = arr[0].value;
  submission["date"] = arr[1].value;
  submission["content"] = arr[2].value.split('\n');
  articleBuilder(submission);
  submission = {};
};

// END OF STRETCH GOAL YEAHHHHHH

