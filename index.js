import React from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity
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
        recipe: snap.val().sort(
					(a, b) => {
						if (a.title < b.title) {
							return -1;
						}

						if (a.title > b.title) {
							return 1;
						}

						return 0;
					}
				)
      });
    });
	}

	alphabet() {
    let c = [];
    for (
			let i = "a".charCodeAt(0);
			i <= "z".charCodeAt(0);
			++i
		) {
      c.push(String.fromCharCode(i));
    }

    return c;
  }

  render() {
    return (
			<ScrollView
				style={style.cont}
			>
				{
					this.alphabet().map((c, k) => {
						return (
							<View
								style={style.cont}
							>
								<Text
									style={style.head}
								>{c}</Text> 

								<View
									key={k}
								>
									{
										this.state.recipe.map((recipe, k) => {
											if (recipe.title[0].toLowerCase() == c) {
												return (
													<TouchableOpacity
														onPress={
															() => {
																this.props.navigation.navigate(
																	"Recipe"
																)
															}
														}
													>
														<Text
															key={k}
															style={style.btn}
														>{recipe.title}</Text>
													</TouchableOpacity>
												);
											}
										})
									}
								</View>
							</View>
						);
					})
				}
      </ScrollView>
    );
  }
}
