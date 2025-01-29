import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// @ts-ignore
import MenuIcon from "../svg/menu.svg"
// @ts-ignore
import NotificationIcon from "../svg/notification.svg"
// @ts-ignore
import SearchIcon from "../svg/search.svg"

const Navbar = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
            <MenuIcon height={30} width={30} />
            <View style={styles.midHeader}>
                <Image height={30} width={30} src='https://i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg' alt='logo' />
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Valorant</Text>
            </View>
            <View style={styles.lastHeader}>
                <SearchIcon height={30} width={30} />
                <NotificationIcon height={30} width={30} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    midHeader: {
        flexDirection: 'row',
        gap: 10,
    },
    lastHeader: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default Navbar;
