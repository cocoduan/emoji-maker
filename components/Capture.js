import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Camera from 'react-native-camera';
import Animation from 'lottie-react-native';

export default class Capture extends Component {

    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (<Camera
            ref={(cam) => {
                this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}>
            <View>
                <Animation
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={require('../images/emoji_wink.json')}
                    loop={true}
                />
            </View>
            <Text style={styles.capture} onPress={() => this.takePicture()}>[CAPTURE]</Text>
        </Camera>);
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                this.props.setImageSrc(data.path);
                console.log(data);
            })
            .catch(err => console.error(err));
    }

}

const styles = StyleSheet.create({
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
    }
});