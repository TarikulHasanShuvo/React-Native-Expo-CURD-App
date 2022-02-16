import * as React            from 'react';
import 'react-native-gesture-handler';
import * as eva              from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import store                 from './src/store/store'
import {Provider}            from 'react-redux'
import TabNavigation         from "./src/navigation/TabNavigation";


const App = () => {
    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <TabNavigation/>
            </ApplicationProvider>
        </Provider>
    );
}

export default App;