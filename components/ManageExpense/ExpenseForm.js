import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const inputChangedHandler = (inputIdentifier, enteredText) => {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: enteredText,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'DD-MMM-YYYY',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
