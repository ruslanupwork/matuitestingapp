import React from 'react';
import Paper from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SecondPageBlocks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="row" justify="space-around" alignItems="stretch">
          <Grid item xs={12} md={6} lg={3}>
            <div>
  						<Typography variant="h6">
  							Wow, four columns.
  						</Typography>

  						<p>
  							This can literally go as far as you want up to 12 columns in one page (if we need more than 12 columns then we've got to say 'hi' to nested grids which is not necessary for the testing task).
  						</p>

  						<p>
  							I don't know if that thing here can be considered a 'css' but it sure did a bit of styling.
  						</p>
  					</div>
          </Grid>

  				<Grid item xs={12} md={6} lg={3}>
            <div>
  						<Typography variant="h6">
  							A Whole Lot of Text
  						</Typography>

  						<p>
  							Say hi to classic Lorem Ipsum.
  						</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo viverra augue, nec feugiat metus tincidunt sed. Proin in felis libero. Quisque ornare posuere finibus. Proin commodo at ex ut porta. Pellentesque nec erat purus. Morbi placerat purus placerat rhoncus posuere. Morbi at tempor diam, finibus volutpat erat. Ut elementum felis et ante laoreet consectetur.
              </p>
  					</div>
          </Grid>

  				<Grid item xs={12} md={6} lg={3}>
            <div>
  						<Typography variant="h6">
  							I'd just sit back and...
  						</Typography>

  						<p>
  							Doing some messy text right here with very random phrasing and literally no signs of grammar apart from the right words I choose this is clearly done on purpose to make ridiculously long sentence that will at least display you what can I do with blocks of text if they will be filled for something like search bar or for example tags or for example some very long sentence with no signs of commas or something like that this thing usually displays how responsive that is to text and by the way try resizing the app to see that it is optimized for small medium large extra large and extra small surfaces and resolutions i hope that is enjoyful!
  						</p>
  					</div>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <div>
  						<Typography variant="h6">
  							What To Expect Again?
  						</Typography>

  						<p>
  							U p d a t e s. More. And this page has different formatting due to Paper wrapping.
  						</p>
  					</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
