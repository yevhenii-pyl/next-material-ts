
import { useState } from 'react';
import Link from 'next/link';
import {makeStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    testingContainer: {
        color: theme.palette.secondary.light,
        fontWeight: "bold",
        fontFamily: "Arial"
    }
}))

export default function Index(){
    const [counter, setCounter] = useState(0);
    const classes = useStyles();

    return(
        <>
            <h1> Hello, this is Index Page. Check the imported component below: </h1>
            <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant="h1" color="primary">Index page</Typography>
            </Grid>
            <Grid item>
                <Link href="/posts">
                    <Button className={classes.testingContainer}>Go to posts</Button>
                </Link>
            </Grid>
            <Grid item>
                <Button variant="outlined" onClick={() => setCounter(counter + 1)}>{counter}</Button>
            </Grid>
        </Grid>
        </>
    )
}