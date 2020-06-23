import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardActions,
  CardContent,
  Typography,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { RecommendContent } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      width: '75%',
      minWidth: 300,
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      marginLeft: theme.spacing(1),
    },
    subMargin: {
      marginBottom: theme.spacing(1),
    },
    expanded: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandedOpen: {
      transform: 'rotate(180deg)',
    },
  }));

interface SpecialDepositProps {
  product: RecommendContent;
}

function SpecialDepositCard({
  product,
}: SpecialDepositProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className={classes.root}
      variant={'outlined'}
    >
      <CardActions
        className={classes.actions}
        onClick={() => (setExpanded(!expanded))}
      >
        <div className={classes.title}>
          <Typography
            variant={'subtitle2'}
            color={'textSecondary'}
            gutterBottom
          >
            {product.region}
          </Typography>
          <Typography
            variant={'h5'}
            component={'h2'}
            gutterBottom
          >
            {product.productName}
          </Typography>
        </div>
        <IconButton
          className={clsx(classes.expanded, {
            [classes.expandedOpen]: expanded,
          })}
          aria-expanded={expanded}
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout={'auto'} unmountOnExit>
        <CardContent>
          <Typography
            className={classes.subMargin}
            variant={'subtitle2'}
            color={'textSecondary'}
            gutterBottom
          >
            {product.joinWay}
          </Typography>
          {product.joinMember && (
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              color={'textSecondary'}
              gutterBottom
            >
              {product.joinMember}
            </Typography>
          )}
          {product.special && product.special
            .split('\n')
            .map((el: string) => (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
                key={el}
              >
                {el}
              </Typography>
            ))}
          {product.comment && product.comment
            .split('\n')
            .map((el: string) => (
              <Typography
                className={classes.subMargin}
                variant={'subtitle2'}
                component={'p'}
                gutterBottom
                key={el}
              >
                {el}
              </Typography>
            ))}
          {product.saveTerms && (
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              component={'p'}
              gutterBottom
            >
              {`납입 기간: ${product.saveTerms}`}
            </Typography>
          )}
          {product.monthMoney && (
            <Typography
              className={classes.subMargin}
              variant={'subtitle2'}
              component={'p'}
              gutterBottom
            >
              {`월 납입액: ${product.monthMoney}`}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SpecialDepositCard;
