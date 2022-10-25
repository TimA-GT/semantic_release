module.exports = {
    branches: ["main"],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      [
        "@semantic-release/npm",
        {
          npmPublish: false,
        },
      ],
      [
        "@semantic-release/git",
        { message: "chore(release): ${nextRelease.version}" },
      ],
      "@semantic-release/github",
      [
        "semantic-release-slack-bot",
        {
          "notifyOnSuccess": false,
          "onSuccessTemplate": {
            "text": "A new version of $package_name with version $npm_package_version has been released at $repo_url!"
          },
          "notifyOnFail": false,
          "slackWebhook": "https://hooks.slack.com/services/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",
          "branchesConfig": [
            {
              "pattern": "main",
              "notifyOnSuccess": true,
              "notifyOnFail": true,
              "onSuccessTemplate": {
                "text": "A new version of $package_name with version $npm_package_version has been released at $repo_url!"
              }
            }
          ]
        }
      ],
    ],
  };
