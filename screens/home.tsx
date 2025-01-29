import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, Image, ScrollView, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Video from "react-native-video";
import Navbar from '../components/Navbar';

// @ts-ignore
import RedirectIcon from "../svg/redirect.svg"
import { red } from 'react-native-reanimated/lib/typescript/Colors';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
};

type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomePageNavigationProp;
};

const HomePage = ({ navigation }: Props) => {

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('#e3f2fd');
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
                <Navbar />
                <ScrollView style={styles.mainContainer}>
                    <View style={{ position: "absolute", marginTop: 250, marginLeft: 90, zIndex: 10, gap: 10, alignItems: "center" }}>
                        <Text style={{ color: "white" }}>A 5v5 character-based tactical shooter</Text>
                        <Image alt='img' height={40} width={200} src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=375' />
                        <Button color="#ff4655" title='PLAY FOR FREE' />
                    </View>
                    <Video
                        source={{ uri: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4" }}
                        style={{ width: "100%", height: 700 }}
                        repeat={true} // Loops the video
                        muted={true}  // Mutes the video
                        resizeMode="cover"
                        playInBackground={true} // Keeps playing in background (Android)
                        playWhenInactive={true} // Keeps playing even if app is inactive
                    />
                    <View style={{ flexDirection: 'column', padding: 15, gap: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: "bold" }}>THE LATEST</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text >GO TO NEWS PAGE</Text>
                                <RedirectIcon height={20} width={20} />
                            </View>
                        </View>
                        <Image src='https://xxboxnews.blob.core.windows.net/prod/sites/2/2024/12/VAL_XB_A27_XboxWireTejoKeyArt_3840x2160-91fcae4fd9539e78bca7.jpg' width="100%" height={300} alt='img'></Image>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Text>GAME UPDATES</Text>
                            <View style={{ borderWidth: 0.2, borderColor: "gray", }}></View>
                            <Text>1/21/2025</Text>
                        </View>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={{ fontWeight: 900, fontSize: 20 }}>VALORANT Patch Notes 10.01</Text>
                            <Text>Rank Shields have been added to Competitive Mode. Its time to start the grind.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ position: "absolute", zIndex: 1, alignItems: "center", marginTop: 150, marginLeft: 50, gap: 10 }}>
                            <Text style={{ fontSize: 60, fontWeight: 900, padding: 15, color: "white" }}>COLLISION</Text>
                            <Text style={{ color: "white", marginLeft: 20, fontWeight: 700 }}>EPISODE_09 // ACT III / YR 4</Text>
                            <Button color="black" title='PLAY NOW' />
                        </View>
                        <Image height={450} width="100%" src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fedda57d7bd05538e8e7b2903ddc1c65f1440575-3440x1020.jpg?auto=format&fit=fill&q=80&h=800'></Image>
                    </View>
                    <View style={{ gap: 10, padding: 15 }}>
                        <Text style={{ textTransform: "uppercase", fontSize: 50, fontWeight: 900 }}>we are valorant</Text>
                        <Text style={{ textTransform: "uppercase", fontWeight: 700, lineHeight: 20 }}>defy the limits</Text>
                        <Text>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</Text>
                        <Button color="#ff4655" title='LEARN THE GAME' />
                    </View>
                    <Video
                        source={{ uri: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4" }}
                        style={{ width: "100%", height: "200" }}
                        repeat={true} // Loops the video
                        muted={true}  // Mutes the video
                        resizeMode="cover"
                        playInBackground={true} // Keeps playing in background (Android)
                        playWhenInactive={true} // Keeps playing even if app is inactive
                    />
                    <View>
                        <Image src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b9f3efa9355803cc44e4c59d3f4437cab192bec3-5120x1616.png?auto=format&fit=fill&q=80&h=969' width="100%" height={780} alt='img'></Image>

                        <View style={{ position: "absolute", zIndex: 1, marginTop: 50, marginLeft: 20, gap: 10 }}>
                            <Text style={{ fontSize: 50, color: "white", fontWeight: 900 }}>YOUR AGENTS</Text>
                            <Text style={{ fontSize: 18, color: "white", fontWeight: 700 }}>CREATIVITY IS YOUR GREATEST WEAPON.</Text>
                            <Text style={{ color: "white", lineHeight: 20 }}>More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</Text>
                            <Button color="black" title='VIEW ALL AGENTS' />
                        </View>

                        <Image style={{ position: "absolute", marginTop: 300 }} width="100%" height={400} src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=849'></Image>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e3f2fd',
        justifyContent: 'space-between',
    },
    mainContainer: {
        flexDirection: 'column',
        gap: 20,
    },
});

export default HomePage;
