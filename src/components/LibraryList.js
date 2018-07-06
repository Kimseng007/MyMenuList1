import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    renderItem (library){
        return <ListItem library={library}/>

    }
    render() {
        return(
            <FlatList
               data={this.props.libraries}
               renderItem={this.renderItem}
               key={library => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);