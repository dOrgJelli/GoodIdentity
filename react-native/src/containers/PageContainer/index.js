// @flow
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Route} from 'react-router-dom'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Welcome } from '../../components/Welcome'


class PageContainer extends Component {
    constructor(props) {
        super(props);
        console.log('PageContainer loaded')

        this.state = {
        };
    }
  
    componentDidMount(){

    }

    render() {
        return (
            <View>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/register" component={Welcome} />
          </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(Actions, dispatch)
    };
}

function mapStateToProps(state) {
    return {};
}


const connectedPageContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(PageContainer));
export { connectedPageContainer as PageContainer };


