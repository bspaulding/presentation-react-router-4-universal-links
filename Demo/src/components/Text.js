import React from 'react';
import { Text as RNText } from 'react-native';

const Text = (props) => <RNText {...props} style={[{ color: 'white' }, props.style]}/>

export default Text;
