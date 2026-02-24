# Deploy Docusaurus Site to GitHub Pages for Free

Follow these steps to host your Docusaurus project on GitHub Pages at no cost:

## 1. Prerequisites
- A GitHub account
- Your project pushed to a GitHub repository (public or private)

## 2. Install GitHub Pages Package
In your project directory, run:

```
npm install --save gh-pages
```

## 3. Update `docusaurus.config.js`
Set the following fields:
- `url`: Your GitHub Pages URL (e.g., `https://<USERNAME>.github.io`)
- `baseUrl`: Repository name with slashes (e.g., `/repo-name/`)
- `organizationName`: Your GitHub username
- `projectName`: Your repository name

Example:
```js
url: 'https://<USERNAME>.github.io',
baseUrl: '/<REPO-NAME>/',
organizationName: '<USERNAME>',
projectName: '<REPO-NAME>',
```

## 4. Add Deployment Scripts to `package.json`
Add these scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## 5. Build and Deploy
Run:
```
npm run deploy
```

## 6. Configure GitHub Pages
- Go to your repository on GitHub
- Settings > Pages
- Set source to `gh-pages` branch and `/ (root)`

## 7. Access Your Site
Visit: `https://<USERNAME>.github.io/<REPO-NAME>/`

---

**Tip:** For more details, see the [Docusaurus deployment docs](https://docusaurus.io/docs/deployment).