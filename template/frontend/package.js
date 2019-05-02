module.exports = {
	build: vars => `{
	"name": "frontend",
	"version": "0.1.0",
	"private": true,
	"dependencies": {
		"axios": "^0.18.0",
		"node-sass": "^4.12.0",
		"react": "^16.8.6",
		"react-dom": "^16.8.6",
		"react-router-dom": "^5.0.0",
		"react-scripts": "3.0.0",
		"semantic-ui-react": "^0.86.0"
	},
	"scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"eslintConfig": {
		"extends": "react-app"
	},
	"browserslist": {
		"production": [
			">0.2%",
			"not dead",
			"not op_mini all"
		],
		"development": [
			"last 1 chrome version",
			"last 1 firefox version",
			"last 1 safari version"
		]
	}
}`
}



