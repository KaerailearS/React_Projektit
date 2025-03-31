import Header from "./components/Header.jsx";
import Question from "./components/Question.jsx";
// Importing questionData, which contains hardcoded data
import questionData from "./data/questionData.js";

// Defining the main App component
export default function App() {
  // Mapping over the questionData array to create an array of Question components
  const QuestionElements = questionData.map((question) => {
    return (
      // Returning a Question component for each question, using the question's id as the key
      <Question key={question.id} title={question.title} info={question.info} />
    );
  });

  // Rendering the App component
  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      <div className="question-container">
        <h2>Frequently Asked Questions</h2>
        {/* Rendering the array of Question components */}
        {QuestionElements}
      </div>
    </>
  );
}
