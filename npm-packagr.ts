import { readFileSync as read, writeFileSync as write } from "fs";
import { insert } from "markdown-toc";
import { npmPackagr } from "npm-packagr";
import {
    assets,
    badge,
    BadgeType,
    git,
    packageJSON,
    Pipe,
    publish,
    test,
    version,
} from "npm-packagr/pipes";

const message = require("./package.json").name;

npmPackagr({
    pipeline: [
        packageJSON(packageJson => {
            delete packageJson.devDependencies;
            delete packageJson.scripts;
        }),

        git("commit", message),

        ({ exec, packageDirectory }) => {
            exec(`tsc --outDir ${packageDirectory}`);
        },

        ({ exec, rm, test }) => {
            if (test("-d", "test")) rm("-rf", "test");

            exec(`npx tsc -p test-src/tsconfig.test.json`);
        },

        test(),

        badge(BadgeType.Test),
        badge(BadgeType.License),

        version("patch", {
            commitHooks: false,
            gitTagVersion: false,
        }),

        updateReadmeTOC,

        assets("LICENSE", "README.md"),

        git("commit", message),
        git("push"),

        publish({
            login: { account: "paveldymkov", email: "dymkov86@gmail.com " },
        }),
    ],
});

function updateReadmeTOC(): Pipe {
    return () => {
        const readme = read("README.md", { encoding: "utf-8" });

        write("README.md", insert(readme, {}));
    };
}
