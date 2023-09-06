const fs = require("fs");
const path = require("path");
const express = require("express");
function addReactProject(app, projectName) {
  const projectPath = path.join(__dirname, "../projects", "projectName");
  const isViteApp = fs.existsSync(path.join(projectPath, "dist"));

  app.use(
    `/${projectName}`,
    express.static(path.join(__dirname, `../projects/${projectName}`)),
    (_, res) => {
      res.sendFile(
        path.join(__dirname, `../projects/${projectName}/index.html`)
      );
    }
  );
}

module.exports = addReactProject;
