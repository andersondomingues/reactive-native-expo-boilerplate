import { Button } from 'react-native';

const HomeScreen = ({navigation} : any) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
};

export default HomeScreen