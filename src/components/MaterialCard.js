import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '8px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function MaterialCard(props) {
  const classes = useStyles();
  
  const [isCompleted, setIsCompleted] = useState(false);
  const rndColor =  props.rndColor;

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: `#${rndColor}`}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Todo number {props.index}
        </Typography>
        <Typography variant="h5" component="h2" style={isCompleted ? {textDecoration: 'line-through'} : null}>
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsCompleted(!isCompleted)}>Mark as completed</Button>
      </CardActions>
    </Card>
  );
}
