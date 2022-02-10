import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text,Spinner } from '@ui-kitten/components';

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small'  status='success'/>
    </View>
);
const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Maldives</Text>
        <Text category='s1'>By Wikipedia</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
        <Button
            style={styles.footerControl}
            size='small'
            status='basic'>
            CANCEL
        </Button>
        <Button
            style={styles.footerControl}
            size='small'>
            ACCEPT
        </Button>
    </View>
);

 const Test = () => (
    <React.Fragment>
        <Layout style={styles.topContainer} level='1'>

            <Card style={styles.card} header={Header}  status='primary'>
                <Text>With Header</Text>
            </Card>

            <Card style={styles.card} footer={Footer}  status='warning'>
                <Text>With Footer</Text>
            </Card>

        </Layout>

        <Card style={styles.card} header={Header} footer={Footer}>
            <Text>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                continent
            </Text>
        </Card>

    </React.Fragment>
);

export default Test;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});