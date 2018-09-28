import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    width: 100,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    display: 'inline-block',
    marginRight: '15px',
  },
  cardContent: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  media: {
    objectFit: 'cover',
  },
}

const Items = (props) => {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="100"
          image="https://thumb.lovemondays.com.br/image/e694fb39244f48cda2baec06eb176269/logos/4aba7b/guiabolso.png"
          title="Guia Bolso"
        />
        <CardContent className={classes.cardContent}>
          <Typography component="p">
            Guiabolso - O seu guia...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Items)