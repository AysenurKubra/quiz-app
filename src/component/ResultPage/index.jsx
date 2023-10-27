
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const ResultPage = ({ correctAnswers, totalQuestions }) => {
    const percentage = Math.round((correctAnswers / totalQuestions.length) * 100);

    let message;
  if (percentage === 100) {
    message = "Wowza! You're a quiz whiz! 🎉";
  } else if (percentage >= 80) {
    message = "You're a quiz champion! 🏆";
  } else if (percentage >= 60) {
    message = "Not bad at all! Keep it up! 👍";
  } else {
    message = "Don't worry, quizzes aren't everything! 😉";
  }

  return (
    <Card sx={{ maxWidth: 1300 }}>
      <CardContent>
        <Typography sx={{ mb: 1.3 }} color="text.secondary">
        Quiz Results
        </Typography>
        <Typography variant="body2">
        You got {correctAnswers} out of {totalQuestions.length} questions right!
          <br />
        </Typography>
        <Typography variant="body2">
        Your quiz performance: {percentage}%
          <br />
        </Typography>
        <Typography variant="body2">
        {message}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
