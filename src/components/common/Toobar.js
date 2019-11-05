import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Styles from './styles';

const Toolbar = props => {
  const {title, actions, navigate} = props;

  function displayAtions() {}

  let backStyle = navigate? {display: 'flex', marginRight: 5} : {display: 'none', marginRight: 5}

  return (
    <View style={Styles.toolbarContainer}>
      <TouchableOpacity style={backStyle}>
        <Image source={require('../../assets/icons/back.png')} />
      </TouchableOpacity>

      <Text style={Styles.toolbarTitle}>{title}</Text>

      <View style={Styles.toolbarActionContainer}>
        <TouchableOpacity style={{marginRight: 10}}>
          <Image source={require('../../assets/icons/share.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/icons/menu.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export {Toolbar};
