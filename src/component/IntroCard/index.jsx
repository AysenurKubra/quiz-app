
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const IntroCard = () => {
  return (
    <Card sx={{ maxWidth: 1300 }}>
      <CardContent>
        <Typography sx={{ mb: 1.3 }} color="text.secondary">
        This is where you embark on a journey of self-discovery through three unique paths: Wisdom, Love, and Courage. Each path offers a distinct set of ten thought-provoking questions tailored to the essence of its name.
        </Typography>
        <Typography variant="body2">
        Choose your path wisely, as each question is a stepping stone toward a deeper understanding of yourself and the world around you. Embark on this enlightening journey and let the quest for wisdom, love, and courage be your guide.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}