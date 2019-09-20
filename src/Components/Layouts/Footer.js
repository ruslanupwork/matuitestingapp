import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function FooterSection() {
  return (
    <Paper square alignContent="flex-end">
      <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button href="/">Page One</Button>
          <Button href="/page2">Page Two</Button>
        </ButtonGroup>
    </Paper>
  );
}
