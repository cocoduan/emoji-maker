/**
 * Emoji Maker App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';
import Capture from './components/Capture';
import NewJournal from './components/NewJournal';

export default class emojiMaker extends Component {

    state = {
        imageSrc: null
    };

    render() {
        return (
            <View style={styles.container}>
                {!this.state.imageSrc && (<Capture
                    setImageSrc={(src) => this.setImageSrc(src)}>
                </Capture>)}

                {this.state.imageSrc && <NewJournal imageSrc={this.state.imageSrc}></NewJournal>}
            </View>
        );
    }

    setImageSrc(src) {
        this.setState({
            imageSrc: src
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('emojiMaker', () => emojiMaker);