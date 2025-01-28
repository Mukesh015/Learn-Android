import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kLSBFw8WukUOM8_pDL4llbuzCG5EWAe4Ig&s",
                }}
            />
            <Text style={styles.title}>Welcome to the Profile Screen</Text>
            <Text style={styles.description}>
                This screen provides detailed information about your selected item or feature.
                You can customize it further based on your needs.
            </Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
                color="#6200EE"
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3f2fd',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0d47a1',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#1565c0',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default ProfileScreen;