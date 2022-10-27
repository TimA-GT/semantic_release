module.exports = {
    branches: ["main"],
    plugins: [
      ["@semantic-release/commit-analyzer", {
        "preset": "angular",
        "releaseRules": [
            {"type": "breaking", "release": "major"},
            {"scope": "no-release", "release": false}
        ]
      }],
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
    ],
  };
