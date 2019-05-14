import React from "react";
import {
	StyleSheet
} from "react-native";

import Head from "./head";

export default StyleSheet.create({
	cover: {
		flex: 1,
		padding: 26,
		backgroundColor: "#303030"
	},
	page: {
		flex: 1,
		margin: 26,
		backgroundColor: "#fff"
	},

	body: {
		height: 0
	},

	cont: {
		padding: 8
	},

	emblem: {
		fontFamily: "Times New Roman",
		fontSize: 80,
		textAlign: "center",
		margin: 8
	},

	head: {
		fontSize: 42,
		textTransform: "uppercase"
	},

	btn: {
		fontSize: 26
	},

	field: {
		margin: 8,
		padding: 8,
		color: "grey",
		borderColor: "grey",
		borderWidth: 1
	},

	err: {
		color: "red"
	}
});
