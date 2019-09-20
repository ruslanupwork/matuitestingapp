import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MainPageBlocks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row" justify="space-around" alignItems="stretch">
        <Grid item xs={12} md={6} lg={4}>
          <div>
						<Typography variant="h6">
							Things To Know
						</Typography>

						<p>
							This app is supposed to test you on some generic subject. This test can't be taken seriously as it is done only for testing purposes in order to display my ability to create web applications on Material UI and React.
						</p>

						<p>
							You may have as much fun as you want with this product but remember to throw me your opinion on it if you like or dislike it in order for me to be able to further improve it for your needs.
						</p>
					</div>
        </Grid>

				<Grid item xs={12} md={6} lg={4}>
          <div>
						<Typography variant="h6">
							Why Three Blocks?
						</Typography>

						<p>
							When I was creating this application, a client asked me to see this feature. Simple as that. Also, the shortness of this text allows to see that this grid is fully responsive to different text amounts.
						</p>
					</div>
        </Grid>

				<Grid item xs={12} md={12} lg={4}>
          <div>
						<Typography variant="h6">
							What To Expect?
						</Typography>

						<p>
							U p d a t e s.
						</p>
					</div>
        </Grid>
      </Grid>
    </div>
  );
}
