import React from "react";
import {
	SafeAreaView
} from "react-native";

import Head from "./head";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
				<Head />
      </SafeAreaView>
    );
  }
}
