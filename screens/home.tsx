import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MenuIcon from "../svg/menu.png"

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
};

type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomePageNavigationProp;
};

const HomePage = ({ navigation }: Props) => {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
                <View>
                    <Image src="../svg/menu.png" height={20} width={20} alt='menu' />
                    <View>
                        <Image height={20} width={20} src='https://i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg' alt='logo' />
                        <Text>Valorant</Text>
                    </View>
                    <View>

                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e3f2fd',
    }
});

export default HomePage;
