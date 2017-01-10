import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

class TopBar extends React.Component {

  render() {
    return (
      <TouchableHighlight onPress={() => this.props.onPress()}>
        <View style={styles.topBar}>
          <Icon name="chevron-left" />
          <Text style={styles.topBarText}>{this.props.textValue}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  static propTypes = {
    onPress: React.PropTypes.func,
    textValue: React.PropTypes.string
  }

}

const styles = {
  topBar: {
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    height: 50,
    flexDirection: 'row',
    paddingLeft: 10
  },
  topBarText: {
    fontSize: 17,
    marginLeft: 20
  }
};

export default TopBar;