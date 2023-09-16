import { View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeHolder: 'DD-MMM-YYYY',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
