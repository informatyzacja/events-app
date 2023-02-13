import { Appbar } from 'react-native-paper';

const AppbarComponent = () =>{
    return (
        <Appbar.Header>
            <Appbar.Action icon="arrow-left-thick" onPress={() => {}} />
            <Appbar.Content title="Wydarzenia"/>
        </Appbar.Header>
    );

};
export default AppbarComponent;
