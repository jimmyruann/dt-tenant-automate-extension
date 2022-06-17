// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";
const isRelease = process.env.NODE_ENV == "release";

const stylesHandler = "style-loader";

const config = {
	entry: {
		popup: path.join(__dirname, "src/popup-ui/index.tsx"),
		foreground: path.join(__dirname, "src/foreground-ui/index.tsx"),
		background: path.join(__dirname, "src/background.ts"),
		inject: path.join(__dirname, "src/inject.ts"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "./public"),
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@src": path.resolve(__dirname, "src/"),
		},
	},
};

module.exports = () => {
	if (isRelease) {
		config.mode = "production";
		config.output = {
			path: path.resolve(__dirname, "dt-automate-ext-release"),
		}

		return config
	}
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
		config.devtool = "inline-source-map"
	}
	return config;
};
