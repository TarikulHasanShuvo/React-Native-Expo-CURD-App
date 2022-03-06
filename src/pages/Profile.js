import React, {useState}      from 'react';
import {Button, Layout, Text} from "@ui-kitten/components";
import * as Facebook          from 'expo-facebook';
import {Alert, StyleSheet}    from "react-native";
import {FACEBOOK_API_APP_KEY} from "@env";

const Profile = () => {
    const [userInfo, setUserInfo] = useState({});
    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: FACEBOOK_API_APP_KEY,
            });
            const {type, token, expirationDate, permissions, declinedPermissions} =
                      await Facebook.logInWithReadPermissionsAsync({
                          permissions: ['public_profile'],
                      });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,name,email,picture`);
                setUserInfo((await response.json()));
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <Layout style={styles.container}>
            <Text>Profile</Text>
            <Button onPress={logIn}>Login With Facebook</Button>
            <Button style={{ marginTop : 30}} onPress={() => Alert.alert('User Information',JSON.stringify(userInfo))}>Show Info</Button>
        </Layout>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex          : 1,
        justifyContent: 'center',
        alignContent  : "center"
    },

});