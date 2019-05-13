import React from "react";
import {
	ScrollView,
	Text,
	View
} from "react-native";

import style from "./style";

import * as firebase from "firebase";

import auth from "./auth";

export default class extends React.Component {
	constructor() {
    super();

    this.state = {
      ln: [],
      recipe: []
    };
  }

	componentDidMount() {
		const
			root = firebase.database().ref(),
			ref = root.child("recipe");

		ref.on("value", snap => {
			this.setState({
				recipe: snap.val()[this.props.navigation.getParam("k")]
			});
		});
	}

  render() {
		let recipe = this.state.recipe;

    return (
			<ScrollView
				style={style.cont}
			>
				<View
					style={style.cont}
				>
					<Text>{recipe.title}</Text>
					<Text>{recipe.author}</Text>
				</View>

				<View
					style={style.cont}
				>
					<Text>Notes</Text>

					<Text>{recipe.note}</Text>
				</View>

				<View
					style={style.cont}
				>
					<Text>Ingredients</Text>

					{
						recipe.ingredient != undefined
							? recipe.ingredient.map((inst) => {
								return (
									<Text>{inst}</Text>
								);
							})
							: <Text>...</Text>
					}
				</View>

				<View
					style={style.cont}
				>
					<Text>Steps</Text>

					{
						recipe.step != undefined
							? recipe.step.map((inst) => {
								return (
									<View>
										<Text>{inst.desc}</Text>
										<Text>{inst.title}</Text>
									</View>
								);
							})
							: <Text>...</Text>
					}
				</View>
			</ScrollView>
    );
  }
}
