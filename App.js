import React from "react";
import {
	SafeAreaView,
	ScrollView
} from "react-native";

import Head from "./head";
import Index from "./index";

import auth from "./auth";

import style from "./style";

export default class App extends React.Component {
  render() {
    return (
			<SafeAreaView
				style={style.page}
			>
				<Head />

				<ScrollView>
					<Index />
				</ScrollView>
      </SafeAreaView>
    );
  }
}
