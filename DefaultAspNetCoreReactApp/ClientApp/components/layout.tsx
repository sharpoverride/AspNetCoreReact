import * as React from 'react';
import { NavMenu } from './nav-menu';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export interface LayoutProps {
    children?: React.ReactNode;
    classes?: any;
}

const styles = (theme: any) => ({
    root: {
        flexGrow: 1
    }
});



class LayoutComponent extends React.Component<LayoutProps, {}> {
    public render() {
        const { classes } = this.props;
        return <Typography>
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    <div className='col-sm-3'>
                        <NavMenu />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    {this.props.children}
                </Grid>
            </Grid>

        </Typography>;
    }
}

export const Layout = withStyles(styles)(LayoutComponent as any);