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
          "notifyOnFail": false,
          "slackWebhook": "https://hooks.slack.com/services/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",
          "branchesConfig": [
            {
              "pattern": "main",
              "notifyOnSuccess": true,
              "notifyOnFail": true
            }
          ]
        }
      ],
    ],
  };
