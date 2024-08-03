// @ts-check

/** @type {import("syncpack").RcFile} */
module.exports = {
  dependencyTypes: ["dev", "prod", "peer"],
  semverRange: "^",
  source: ["package.json", "apps/*/package.json", "packages/*/package.json"],
  versionGroups: [
    {
      label: 'Internal config packages should be pinned to "*" (meaning any version is acceptable)',
      packages: ["**"],
      dependencies: ["@repo/config-eslint", "@repo/config-tailwind", "@repo/confing-ts", "@repo/ui-shadcn"],
      dependencyTypes: ["dev", "prod", "peer"],
      pinVersion: "*",
    },
    {
      label: "Use next 15 rc version in apps/web and apps/docs",
      packages: ["@app/web", "@app/docs"],
      dependencies: ["react", "react-dom", "next"],
      policy: "sameRange",
    },
  ],
  semverGroups: [],
};
