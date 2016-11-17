React Quiz

Project Description:
An app that will display questions from a JSON state objet and let you answer 1 by 1 and show the results at the end.

Lectures:
1. Section Intro
2. App Component Setup
3. QuestionList & Question Components
4. Quiz Logic


What will you Learn
1. How to work with and set states
2. How to map through state objects
3. How to use conditionals to output correct props


Steps:
1. Create a new project folder with name prj3

2. Open the command prompt.

3. npm install -g webpack (if you did not did it before)
npm install -g webpack-dev-server

4. npm init
answer all (reactquiz)
Simple Quiz

5. Open package.json and edit it as follows after licence:

  "devDependencies": {
    "babel-core": "5.8.*",
    "babel-loader": "5.3.*",
    "webpack": "1.12.*"
  },
  "dependencies": {
    "react":"^0.14.7",
    "react-dom": "^0.14.7"
  }

6. Run: npm install

7. Create following folders:
src
  components
    App.jsx
    Quiz
      QuestionList.jsx
      Question.jsx
      Scorebox.jsx
      Results.jsx
  index.js
app
  index.html
  css
    style.css
  js
webpack.config.js

8. Put following contents in webpack.config.js
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}

9. Put following contents in app/index.html
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>ReactQuiz</title>
</head>

<body>
  <div id="app"></div>
  
  <script src="js/main.js"></script>
</body>
</html>

10. Go to command line and run following command
webpack-dev-server

11. Open browser and point to http://localhost:8080/app and see the title.

12. Open src/index.js and write following starting code

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

13. Open src/components/App.jsx and write following code

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <div>
        APP
      </div>
    );
  }
}

export default App

14. Run the web page and see the result

15. Change the App.jsx to following:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './Quiz/QuestionList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Brad'
            },
            {
              id: 'c',
              text: 'Steven'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Sara'
            },
            {
              id: 'b',
              text: 'Sue'
            },
            {
              id: 'c',
              text: 'Donna'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Bobby'
            },
            {
              id: 'b',
              text: 'Harry'
            },
            {
              id: 'c',
              text: 'Wayne'
            }
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'John'
            },
            {
              id: 'b',
              text: 'Paul'
            },
            {
              id: 'c',
              text: 'Jose'
            }
          ],
          correct: 'a'
        }
      ],//end questions
      score: 0,
      current: 1
    };
  }
  
  render() {
    return(
      <div>
        <QuestionList {...this.state} />
      </div>
    );
  }
}

export default App

16. Change the QuestionList.jsx to:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx'

class QuestionList extends Component {
  
  render() {
    return(
      <div className="questions">
        {
          this.props.questions.map(question => {
            return <Question question={question} key={question.id} />
          })
        }
      </div>
    );
  }
}

export default QuestionList

17. Change the Question.jsx to:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component {
  
  onChange() {
    return;
  }
  
  render() {
    const {question} = this.props;
    return(
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {question.choices.map(choice => {
            return(
              <li className="list-group-item" key={choice.id}>
                {choice.id} <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Question

18. add bootstrap.css to css folder and add link in index.html and add some div

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/style.css">

so new index.html will changed to 
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>ReactQuiz</title>

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/style.css">

</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>React Quiz</h1>
        <p class="lead">A simple quiz application written in React.js</p>
        <hr />
        <div id="app"></div>
      </div>
    </div>
  </div>
  
  <script src="js/main.js"></script>
</body>
</html>


19. Now we need to show only the current question (not all)
so to show the current question, open QuestionList.jsx and replace return statement with if statement as:

if (question.id == this.props.current) {
  return <Question question={question} key={question.id} {...this.props} />
}

Run app and see the only one question

20. Change the onChange function in Questin.jsx
onChange(e) {
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;
    
    let selected = e.target.value; //whatever current radio box value
    
    if (selected == question.correct) {
      setScore(this.props.score + 1);
    }
    
    setCurrent(this.props.current + 1);
  }
  
21. add following function in App.jsx
setCurrent(current) {
   this.setState({current});
  }
  
  setScore(score) {
    this.setState({score}) 
  }

22. copy the code in scorebox.jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Scorebox extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
      </div>
    );
  }
}

export default Scorebox

23. import scorebox in App.jsx

import Scorebox from './Quiz/Scorebox.jsx'

24. Call scorebox in App.js

  render() {
    return(
      <div>
         <Scorebox {...this.state} />
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}  />
      </div>
    );
  }

25. Run the app

26. we need to hide the scorebox after questions are done, so add following in app.jsx before return in render
  if (this.state.current > this.state.questions.length) {
      var scorebox = '';
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }

27. Open Results.jsx and add following code
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
  
  render() {
    return(
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take Again</a>
      </div>
    )
  }
}

export default Results

28. we have to create percent and message variable, so change Results.jsx as
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
  
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'Awesome Job';
    } else if (percent < 80 && percent > 60) {
      var message = 'You Did OK!';
    } else {
      var message = 'You Did Horrible!';
    }
    return(
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take Again</a>
      </div>
    )
  }
}

export default Results

29. Import results in app.jsx
import Results from './Quiz/Results.jsx'

30. change the if statement in app.jsx
    if (this.state.current > this.state.questions.length) {
      var scorebox = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }


31. Run the app

32. Quiz

a. Which of the following is used to pass all props to a component?
{this.props.all}
{…this.props} (correct)
{This.props…}
{props}

b. When mapping data, what property should be unique?
None
Id
Key (correct)
value

c. When using ES6, event functions ALWAYS need to have “.bind(this)” attached
True (correct)
False

d. How can we grab the input value from an onChange event?

e.value
e.input.value
e.target.value (correct)
e.change.value

