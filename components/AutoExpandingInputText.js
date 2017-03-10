import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput
} from 'react-native';

export default class AutoExpandingTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            height: 0
        };
    }
    render() {
        return (
            <TextInput
                {...this.props}
                multiline={true}
                onChangeText={(text) => {
                    this.setState({text});
                }}
                placeholder="Description..."
                placeholderTextColor="white"
                onContentSizeChange={(event) => {
                    this.setState({height: event.nativeEvent.contentSize.height});
                }}
                style={[styles.default, {height: Math.max(35, this.state.height)}]}
                value={this.state.text}
            />
        );
    }
}
const styles = StyleSheet.create({
    default: {
        height: 26,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        flex: 1,
        fontSize: 13,
        padding: 4,
    }
});