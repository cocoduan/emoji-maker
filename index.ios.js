/**
 * Emoji Maker App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import Camera from 'react-native-camera';

export default class emojiMaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: ""
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.imageSrc && (<Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.disk}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>)}

                {this.state.imageSrc!== "" && (<Image
                    source={{
                        isStatic: true,
                        uri: this.state.imageSrc
                    }}
                    style={styles.image}
                />)}
            </View>
        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                this.setState({
                    imageSrc: data.path
                });
                console.log(data);
            })
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'center'
    }
});

AppRegistry.registerComponent('emojiMaker', () => emojiMaker);