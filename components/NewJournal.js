
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image
} from 'react-native';

export default class NewJournal extends Component {

    render() {
        return (<Image
            source={{
                isStatic: true,
                uri: this.props.imageSrc
            }}
            style={styles.image}
        />);
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'center'
    }
});