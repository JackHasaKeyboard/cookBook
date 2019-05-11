import React from "react";
import {
	SafeAreaView
} from "react-native";

import Head from "./head";
import Index from "./index";

import auth from "./auth";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
				<Head />

				<Index />
      </SafeAreaView>
    );
  }
}
