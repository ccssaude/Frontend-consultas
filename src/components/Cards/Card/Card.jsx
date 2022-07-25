import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle,realDate, cardSubtitle }) => (
  <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
      <b>{cardTitle}</b>
      </Typography>
      <Typography color="textSecondary">
      <b>Data Disponivel: {realDate}</b>
      </Typography>
      <Typography variant="body2" component="p">
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;
