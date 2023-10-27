import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import './styles.css';

export const QuestionCard = ({ questions, currentQuestionIndex, handleSubmit }) => {
  const [value, setValue] = React.useState(undefined);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");


  // const handleRadioChange = (event) => {
  //   setValue(event.target.value);
  //   setHelperText(" ");
  //   setError(false);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (value === "") {
  //     setHelperText("You cannot skip the question...");
  //     setError(true);
  //   } else {
  //     if (currentQuestionIndex < questions.length - 1) {
  //       setCurrentQuestionIndex(currentQuestionIndex + 1);
  //       setValue("");
  //       setHelperText("Choose wisely");
  //       setError(false);
  //     }
  //   }
  // };

  const currentQuestion = questions[currentQuestionIndex];
  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(value);
  }

  return (
    <form onSubmit={onSubmit} className="question-card">
      <FormControl sx={{ m: 3 }} error={error} variant="standard" >
        <FormLabel id="demo-error-radios">{currentQuestion.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          required
          // onChange={handleRadioChange}
        >
          {currentQuestion.options.map((option) => (
            <FormControlLabel
              key={option.trim().toLowerCase()}
              value={option}
              control={<Radio />}
              label={option}
              onChange={(event => setValue(event.target.value))}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Submit
        </Button>
      </FormControl>
    </form>
  );
}
