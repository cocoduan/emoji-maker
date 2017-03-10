import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Animation from 'lottie-react-native';

import AutoExpandingTextInput from './AutoExpandingInputText';

export default class NewJournal extends Component {

    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <Image
                source={require('../images/bg1.jpg')}
                style={styles.container}>

                <View>
                    <Animation
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 150,
                            height: 150
                        }}
                        source={require('../images/camera.json')}
                        loop={true}
                    />
                </View>

                <Image
                    source={{
                        isStatic: true,
                        uri: this.props.imageSrc
                    }}
                    style={styles.image}
                />
                <View style={{height: 10}}/>

                <AutoExpandingTextInput text="">
                </AutoExpandingTextInput>

            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    image: {
        width: '100%',
        height: 300
    }
});