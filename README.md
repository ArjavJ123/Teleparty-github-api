# Teleparty-github-api
 
Following are the steps to update the public token for calling the api- 
1. From your GitHub account, open the settings.
2. Scroll down and select developer settings in the bottom left.
3. Select the option personal access tokens, choose tokens (classic), and generate.
4. Give a name to the token and select the relevant duration and scopes. (we require the user scope, but I chose all the scopes to avoid any unexpected errors)
5. Copy the generated token and replace the token in PUBLIC_TOKEN present in env.js file.
