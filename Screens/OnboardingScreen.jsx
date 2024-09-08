import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import FirstBoarding from '../Components/OnBoarding/FirstBoarding';
import SecondBoarding from '../Components/OnBoarding/SecondBoarding';
import ThirdBoarding from '../Components/OnBoarding/ThirdBoarding';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
    const scrollViewRef = useRef(null);

    const handleNext = (pageIndex) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: width * pageIndex, animated: true });
        }
    };

    return (
        <ScrollView 
            ref={scrollViewRef}
            horizontal 
            pagingEnabled 
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.slide}>
                <FirstBoarding onNext={() => handleNext(1)} />
            </View>
            <View style={styles.slide}>
                <SecondBoarding onNext={() => handleNext(2)} />
            </View>
            <View style={styles.slide}>
                <ThirdBoarding navigation={navigation} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnboardingScreen;
