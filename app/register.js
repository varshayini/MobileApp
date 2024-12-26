import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../styles/globalStyles';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!email.includes('@')) errors.email = 'Invalid email format';
    if (!password) errors.password = 'Password is required';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const handleRegister = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      router.push('/');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Create Account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}