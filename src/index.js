/* @flow */

import React from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Animated
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Banner from './Banner';
import Drawer from './Drawer';
import StacksInTabs from './StacksInTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';

const ExampleRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack',
    screen: SimpleStack,
    icon: "extension"
  },
  SimpleTabs: {
    name: 'Tabs Example',
    description: 'Tabs following platform conventions',
    screen: SimpleTabs,
    icon: "explore"
  },
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
    icon: "view-column"
  },
  StacksInTabs: {
    name: 'Stacks in Tabs',
    description: 'Nested stack navigation in tabs',
    screen: StacksInTabs,
    icon: "view-agenda"
  },
};

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TouchableBounce from './TouchableBounce';

type State = {
  fadeAnim: any
}

const Item = ({ navigation, routes, routeName }) =>
  <View>
    <TouchableBounce
      style={main.square}
      onPressAnimationComplete={() => {
        const { path, params, screen } = routes[routeName];
        const { router } = screen;
        const action = path && router.getActionForPathAndParams(path, params);
        navigation.navigate(routeName, {}, action);
      }}
    >
      <MaterialIcons
        name={routes[routeName].icon}
        size={72}
        style={{ color: '#4B0082' }}
      />
    </TouchableBounce>
    <View style={{ padding: 10, alignItems: 'center' }}>
      <Text style={styles.title}>{routes[routeName].name}</Text>
      <Text style={styles.description}>{routes[routeName].description}</Text>
    </View>
  </View>;

class MainScreen extends React.Component {
  state: State;
  constructor(props) {
    super(props);
      this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
      Animated.timing(
        this.state.fadeAnim, {
          toValue: 1,
          delay: 2000
        }
      ).start();
  }
  render () {
    return (
      <ScrollView>
        <Banner />
        <View style={main.container}>
          {Object.keys(ExampleRoutes).map((routeName: string) =>
            <View key={routeName} style={main.squareContainer}>
              <Animated.View style={{opacity: this.state.fadeAnim}}>
                <Item
                  routeName={routeName}
                  routes={ExampleRoutes}
                  navigation={this.props.navigation}
                />
              </Animated.View>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const main = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  square: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  squareContainer: {
    alignItems: 'center',
    flexBasis: '50%',
    padding: 30
  }
});


const AppNavigator = StackNavigator({
  ...ExampleRoutes,
  Index: {
    screen: MainScreen,
  },
}, {
  initialRouteName: 'Index',
  headerMode: 'none',
  mode: 'modal'
});

export default AppNavigator;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    flex: 1
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
