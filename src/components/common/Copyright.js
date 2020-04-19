import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {props.name}{props.surname}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
