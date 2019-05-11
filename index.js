import React from "react";
import {
	View,
	Text
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

if (!firebase.apps.length) {
  firebase.initializeApp(
		auth.firebase
  );
}

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipe: []
		};
	}

	componentDidMount() {
    const
			root = firebase.database().ref(),
      ref = root.child("recipe");

    ref.on("value", snap => {
      this.setState({
        recipe: snap.val()
      });
    });
	}

  render() {
    return (
			<View
				style={style.cont}
			>
				{
					this.state.recipe.map((recipe, k) => {
						return (
							<Text
								key={k}
							>{recipe.title}</Text>
						);
					})
				}
      </View>
    );
  }
}
