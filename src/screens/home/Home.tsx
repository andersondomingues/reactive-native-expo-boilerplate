import CustomButton from '../../components/customButton/CustomButton';
import { Button, View } from 'react-native';

const HomeScreen = ({navigation} : any) => {

  const customButtonPress = () => {
    navigation.navigate('Profile', {name: 'Jane'})
  }

  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
      <CustomButton title="test" onPress={customButtonPress} />
    </View>
  );
};

export default HomeScreen