import React, {Component} from 'react';

import {
    StyleSheet,
    Text
} from 'react-native';
import Camera from 'react-native-camera';

export default class Capture extends Component {

    render() {
        return (<Camera
            ref={(cam) => {
                this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}>
            <Text style={styles.capture} onPress={() => this.takePicture()}>[CAPTURE]</Text>
        </Camera>);
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                // this.setState({
                //     imageSrc: data.path
                // });
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