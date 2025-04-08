// module.exports = {
//     requireConfig: "ignored",
//     onboarding: false,
//     platform: "local",
//     platformCommit: "disabled",
//     persistRepoData: false,
//     baseBranches: ["main"],
//     addLabels: ["renovate"],
//     branchConcurrentLimit: 0,
//     prConcurrentLimit: 0,
//     prHourlyLimit: 0,
//     pruneStaleBranches: false,
//     enabledManagers: ["bazel"],
//     "bazel": {
//       fileMatch: ["(^|/)WORKSPACE$", "(^|/).*\\.bzl$"]
//     },
//     packageRules: [
//       {
//         matchManagers: ["bazel"],
//         matchUpdateTypes: ["minor", "patch"],
//         enabled: true,
//         branchPrefix: "bazel-renovate/",
//         addLabels: ["bazel-renovate"],
//         commitMessagePrefix: "Bazel Renovate: "
//       }
//     ]
//   }; 