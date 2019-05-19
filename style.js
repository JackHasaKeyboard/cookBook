import React from "react";
import {
	StyleSheet
} from "react-native";

import Head from "./head";

export default StyleSheet.create({
	cover: {
		flex: 1,
		backgroundColor: "#303030"
	},
	page: {
		flex: 1,
		margin: 26,
		backgroundColor: "#fff"
	},

	head: {
		backgroundColor: "#fff"
	},
	emblem: {
		fontFamily: "Times New Roman",
		fontSize: 80,
		textAlign: "center",
		margin: 8
	},

	body: {
		height: 0
	},

	cont: {
		padding: 8
	},

	h1: {
		fontSize: 31
	},
	h2: {
		fontSize: 24
	},
	h3: {
		fontSize: 18
	},

	ctrl: {
		flexDirection: "row"
	},

	btn: {
		fontSize: 26,
		padding: 8
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
	},

	header: {
		lineHeight: 24
	},
	desc: {
		lineHeight: 18
	}
});
