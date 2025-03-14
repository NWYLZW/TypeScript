currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/home/src/projects/project/node_modules/@types/bar/package.json]
{
  "name": "@types/bar",
  "version": "1.0.0",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "require": "./index.d.ts"
    }
  }
}

//// [/home/src/projects/project/node_modules/@types/bar/index.d.ts]
export declare const bar: number;

//// [/home/src/projects/project/node_modules/bar/package.json]
{
  "name": "bar",
  "version": "1.0.0",
  "main": "index.js",
  "exports": {
    ".": {
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}

//// [/home/src/projects/project/node_modules/bar/index.js]
module.exports = { bar: 1 };

//// [/home/src/projects/project/node_modules/bar/index.mjs]
export const bar = 1;

//// [/home/src/projects/project/node_modules/foo/package.json]
{
  "name": "foo",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}

//// [/home/src/projects/project/node_modules/foo/index.js]
module.exports = { foo: 1 };

//// [/home/src/projects/project/node_modules/foo/index.mjs]
export const foo = 1;

//// [/home/src/projects/project/node_modules/foo/index.d.ts]
export declare const foo: number;

//// [/home/src/projects/project/node_modules/@types/bar2/package.json]
{
  "name": "@types/bar2",
  "version": "1.0.0",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "require": "./index.d.ts"
    }
  }
}

//// [/home/src/projects/project/node_modules/@types/bar2/index.d.ts]
export declare const bar2: number;

//// [/home/src/projects/project/node_modules/bar2/package.json]
{
  "name": "bar2",
  "version": "1.0.0",
  "main": "index.js",
  "exports": {
    ".": {
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}

//// [/home/src/projects/project/node_modules/bar2/index.js]
module.exports = { bar2: 1 };

//// [/home/src/projects/project/node_modules/bar2/index.mjs]
export const bar2 = 1;

//// [/home/src/projects/project/node_modules/foo2/package.json]
{
  "name": "foo2",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}

//// [/home/src/projects/project/node_modules/foo2/index.js]
module.exports = { foo2: 1 };

//// [/home/src/projects/project/node_modules/foo2/index.mjs]
export const foo2 = 1;

//// [/home/src/projects/project/node_modules/foo2/index.d.ts]
export declare const foo2: number;

//// [/home/src/projects/project/index.mts]
import { foo } from "foo";
import { bar } from "bar";
import { foo2 } from "foo2";
import { bar2 } from "bar2";


//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "moduleResolution": "node16",
    "traceResolution": true,
    "incremental": true,
    "strict": true,
    "types": []
  },
  "files": [
    "index.mts"
  ]
}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/projects/project/index.mts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /home/src/projects/project
Info seq  [hh:mm:ss:mss] For info: /home/src/projects/project/index.mts :: Config file name: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/tsconfig.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/projects/project/index.mts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/projects/project/tsconfig.json : {
 "rootNames": [
  "/home/src/projects/project/index.mts"
 ],
 "options": {
  "moduleResolution": 3,
  "traceResolution": true,
  "incremental": true,
  "strict": true,
  "types": [],
  "configFilePath": "/home/src/projects/project/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo/index.mjs', result '/home/src/projects/project/node_modules/foo/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo' was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/bar/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar/index.mjs', result '/home/src/projects/project/node_modules/bar/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/home/src/projects/project/node_modules/bar/index.mjs' with Package ID 'bar/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'types'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'types'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo2/index.d.ts', result '/home/src/projects/project/node_modules/foo2/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo2' was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'types'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'types'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', result '/home/src/projects/project/node_modules/@types/bar2/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar2' was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'. ========
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects 0 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects 0 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 0 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project 0 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/foo/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/bar/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types/bar/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/foo2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/bar2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/projects/project/node_modules/@types/bar2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/foo2/index.d.ts
	  Imported via "foo2" from file 'index.mts' with packageId 'foo2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo2/package.json' does not have field "type"
	node_modules/@types/bar2/index.d.ts
	  Imported via "bar2" from file 'index.mts' with packageId '@types/bar2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar2/package.json' does not have field "type"
	index.mts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/projects/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "1097a5f82e8323ba7aba7567ec06402f7ad4ea74abce44ec5efd223ac77ff169",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 112,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 3,
            "dtsSize": 402,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "moduleResolution": "node16",
            "traceResolution": true,
            "incremental": true,
            "strict": true,
            "types": []
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/projects/project/index.mts",
        "configFile": "/home/src/projects/project/tsconfig.json",
        "diagnostics": [
          {
            "text": "Option 'module' must be set to 'Node16' when option 'moduleResolution' is set to 'Node16'.",
            "code": 5110,
            "category": "error"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/home/src/projects: *new*
  {}
/home/src/projects/project: *new*
  {}
/home/src/projects/project/node_modules/@types/bar/package.json: *new*
  {}
/home/src/projects/project/node_modules/@types/bar2/package.json: *new*
  {}
/home/src/projects/project/node_modules/bar/package.json: *new*
  {}
/home/src/projects/project/node_modules/bar2/package.json: *new*
  {}
/home/src/projects/project/node_modules/foo/package.json: *new*
  {}
/home/src/projects/project/node_modules/foo2/package.json: *new*
  {}
/home/src/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project/node_modules: *new*
  {}

Projects::
/home/src/projects/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar2/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 1
1: checkOne *new*

Before running Timeout callback:: count: 1
1: checkOne

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
1: semanticCheck *new*

Before running Immedidate callback:: count: 1
1: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 2,
              "offset": 21
            },
            "end": {
              "line": 2,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'bar'. '/home/src/projects/project/node_modules/bar/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
2: suggestionCheck *new*

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 2
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
2: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar/index.d.ts] deleted

Timeout callback:: count: 1
2: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
3: /home/src/projects/project/tsconfig.json *new*
4: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
3: /home/src/projects/project/tsconfig.json
4: *ensureProjectForOpenFiles*
5: checkOne *new*

Before running Timeout callback:: count: 3
3: /home/src/projects/project/tsconfig.json
4: *ensureProjectForOpenFiles*
5: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/@types/bar/index.d.ts', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/@types/bar/index.d.ts' has a '.d.ts' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/@types/bar/index.d.ts' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar/index.mjs', result '/home/src/projects/project/node_modules/bar/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/home/src/projects/project/node_modules/bar/index.mjs' with Package ID 'bar/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
3: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*

Before running Immedidate callback:: count: 1
3: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 2,
              "offset": 21
            },
            "end": {
              "line": 2,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'bar'. '/home/src/projects/project/node_modules/bar/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/bar` if it exists or add a new declaration (.d.ts) file containing `declare module 'bar';`",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
4: suggestionCheck *new*

Before running Immedidate callback:: count: 1
4: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 3
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
6: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo/index.d.ts] deleted

Timeout callback:: count: 1
6: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
7: /home/src/projects/project/tsconfig.json *new*
8: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
7: /home/src/projects/project/tsconfig.json
8: *ensureProjectForOpenFiles*
9: checkOne *new*

Before running Timeout callback:: count: 3
7: /home/src/projects/project/tsconfig.json
8: *ensureProjectForOpenFiles*
9: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/foo/index.d.ts', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.d.ts' has a '.d.ts' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/foo/index.d.ts' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo/index.mjs', result '/home/src/projects/project/node_modules/foo/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo' was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/bar/index.mjs' with Package ID 'bar/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
5: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*

Before running Immedidate callback:: count: 1
5: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/foo` if it exists or add a new declaration (.d.ts) file containing `declare module 'foo';`",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 2,
              "offset": 21
            },
            "end": {
              "line": 2,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'bar'. '/home/src/projects/project/node_modules/bar/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/bar` if it exists or add a new declaration (.d.ts) file containing `declare module 'bar';`",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
6: suggestionCheck *new*

Before running Immedidate callback:: count: 1
6: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 4
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
10: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar/index.d.ts]
export declare const bar: number;


Timeout callback:: count: 1
10: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
11: /home/src/projects/project/tsconfig.json *new*
12: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 5,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
11: /home/src/projects/project/tsconfig.json
12: *ensureProjectForOpenFiles*
13: checkOne *new*

Before running Timeout callback:: count: 3
11: /home/src/projects/project/tsconfig.json
12: *ensureProjectForOpenFiles*
13: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar/index.mjs', result '/home/src/projects/project/node_modules/bar/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/home/src/projects/project/node_modules/bar/index.mjs' with Package ID 'bar/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
7: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 4 *changed*

Before running Immedidate callback:: count: 1
7: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/foo` if it exists or add a new declaration (.d.ts) file containing `declare module 'foo';`",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 2,
              "offset": 21
            },
            "end": {
              "line": 2,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'bar'. '/home/src/projects/project/node_modules/bar/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
8: suggestionCheck *new*

Before running Immedidate callback:: count: 1
8: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 5
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
14: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo/index.d.ts]
export declare const foo: number;


Timeout callback:: count: 1
14: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
15: /home/src/projects/project/tsconfig.json *new*
16: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 5 *changed*
    projectProgramVersion: 4

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 6,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
15: /home/src/projects/project/tsconfig.json
16: *ensureProjectForOpenFiles*
17: checkOne *new*

Before running Timeout callback:: count: 3
15: /home/src/projects/project/tsconfig.json
16: *ensureProjectForOpenFiles*
17: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo/index.mjs', result '/home/src/projects/project/node_modules/foo/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo' was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/bar/index.mjs' with Package ID 'bar/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 5 projectProgramVersion: 4 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
9: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 5
    projectProgramVersion: 5 *changed*

Before running Immedidate callback:: count: 1
9: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 2,
              "offset": 21
            },
            "end": {
              "line": 2,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'bar'. '/home/src/projects/project/node_modules/bar/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
10: suggestionCheck *new*

Before running Immedidate callback:: count: 1
10: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 6
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/@types/bar/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/@types/bar/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
18: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar/package.json]
{
  "name": "@types/bar",
  "version": "1.0.0",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "require": "./index.d.ts"
    }
  }
}


Timeout callback:: count: 1
18: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
19: /home/src/projects/project/tsconfig.json *new*
20: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 6 *changed*
    projectProgramVersion: 5

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 7,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
19: /home/src/projects/project/tsconfig.json
20: *ensureProjectForOpenFiles*
21: checkOne *new*

Before running Timeout callback:: count: 3
19: /home/src/projects/project/tsconfig.json
20: *ensureProjectForOpenFiles*
21: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.mjs' with Package ID 'foo/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'types'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'types'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/@types/bar/index.d.ts', result '/home/src/projects/project/node_modules/@types/bar/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 6 projectProgramVersion: 5 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/@types/bar/index.d.ts
	  Imported via "bar" from file 'index.mts' with packageId '@types/bar/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar/package.json' does not have field "type"
	node_modules/foo2/index.d.ts
	  Imported via "foo2" from file 'index.mts' with packageId 'foo2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo2/package.json' does not have field "type"
	node_modules/@types/bar2/index.d.ts
	  Imported via "bar2" from file 'index.mts' with packageId '@types/bar2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar2/package.json' does not have field "type"
	index.mts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
11: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 6
    projectProgramVersion: 6 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/@types/bar2/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json

Before running Immedidate callback:: count: 1
11: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 21
            },
            "end": {
              "line": 1,
              "offset": 26
            },
            "text": "Could not find a declaration file for module 'foo'. '/home/src/projects/project/node_modules/foo/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
12: suggestionCheck *new*

Before running Immedidate callback:: count: 1
12: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 7
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/node_modules/foo/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/foo/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/node_modules/foo/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/foo/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
22: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo/package.json]
{
  "name": "foo",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}


Timeout callback:: count: 1
22: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
23: /home/src/projects/project/tsconfig.json *new*
24: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 7 *changed*
    projectProgramVersion: 6

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 8,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
23: /home/src/projects/project/tsconfig.json
24: *ensureProjectForOpenFiles*
25: checkOne *new*

Before running Timeout callback:: count: 3
23: /home/src/projects/project/tsconfig.json
24: *ensureProjectForOpenFiles*
25: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'types'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'types'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo/index.d.ts', result '/home/src/projects/project/node_modules/foo/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo' was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' with Package ID '@types/bar2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 7 projectProgramVersion: 6 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/node_modules/@types/bar2/index.d.ts Text-1 "export declare const bar2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/foo/index.d.ts
	  Imported via "foo" from file 'index.mts' with packageId 'foo/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo/package.json' does not have field "type"
	node_modules/@types/bar/index.d.ts
	  Imported via "bar" from file 'index.mts' with packageId '@types/bar/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar/package.json' does not have field "type"
	node_modules/foo2/index.d.ts
	  Imported via "foo2" from file 'index.mts' with packageId 'foo2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo2/package.json' does not have field "type"
	node_modules/@types/bar2/index.d.ts
	  Imported via "bar2" from file 'index.mts' with packageId '@types/bar2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar2/package.json' does not have field "type"
	index.mts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

PolledWatches *deleted*::
/home/src/projects/node_modules:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects:
  {}
/home/src/projects/project:
  {}
/home/src/projects/project/node_modules/@types/bar/package.json:
  {}
/home/src/projects/project/node_modules/@types/bar2/package.json:
  {}
/home/src/projects/project/node_modules/bar/package.json:
  {}
/home/src/projects/project/node_modules/bar2/package.json:
  {}
/home/src/projects/project/node_modules/foo/package.json:
  {}
/home/src/projects/project/node_modules/foo2/package.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/node_modules:
  {}

Immedidate callback:: count: 1
13: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 7
    projectProgramVersion: 7 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/@types/bar2/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json

Before running Immedidate callback:: count: 1
13: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
14: suggestionCheck *new*

Before running Immedidate callback:: count: 1
14: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 8
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/@types/bar2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/@types/bar2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
26: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar2/package.json]
{
  "name": "@types/bar2",
  "version": "1.0.0",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "require": "./index.d.ts"
    }
  }
}


Timeout callback:: count: 1
26: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
27: /home/src/projects/project/tsconfig.json *new*
28: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 8 *changed*
    projectProgramVersion: 7

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 9,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
27: /home/src/projects/project/tsconfig.json
28: *ensureProjectForOpenFiles*
29: checkOne *new*

Before running Timeout callback:: count: 3
27: /home/src/projects/project/tsconfig.json
28: *ensureProjectForOpenFiles*
29: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.d.ts' with Package ID 'foo2/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar2/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar2/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar2/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar2/index.mjs', result '/home/src/projects/project/node_modules/bar2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar2' was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 8 projectProgramVersion: 7 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/node_modules/foo2/index.d.ts Text-1 "export declare const foo2: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/foo/index.d.ts
	  Imported via "foo" from file 'index.mts' with packageId 'foo/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo/package.json' does not have field "type"
	node_modules/@types/bar/index.d.ts
	  Imported via "bar" from file 'index.mts' with packageId '@types/bar/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar/package.json' does not have field "type"
	node_modules/foo2/index.d.ts
	  Imported via "foo2" from file 'index.mts' with packageId 'foo2/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo2/package.json' does not have field "type"
	index.mts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

PolledWatches::
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/projects:
  {}
/home/src/projects/project:
  {}
/home/src/projects/project/node_modules/@types/bar/package.json:
  {}
/home/src/projects/project/node_modules/@types/bar2/package.json:
  {}
/home/src/projects/project/node_modules/bar/package.json:
  {}
/home/src/projects/project/node_modules/bar2/package.json:
  {}
/home/src/projects/project/node_modules/foo/package.json:
  {}
/home/src/projects/project/node_modules/foo2/package.json:
  {}
/home/src/projects/project/tsconfig.json:
  {}

FsWatchesRecursive::
/home/src/projects/project/node_modules:
  {}

Immedidate callback:: count: 1
15: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 8
    projectProgramVersion: 8 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/@types/bar2/index.d.ts *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /home/src/projects/project/tsconfig.json *deleted*
/home/src/projects/project/node_modules/foo/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json

Before running Immedidate callback:: count: 1
15: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
16: suggestionCheck *new*

Before running Immedidate callback:: count: 1
16: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 9
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/foo2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/package.json 1:: WatchInfo: /home/src/projects/project/node_modules/foo2/package.json 2000 undefined Project: /home/src/projects/project/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
30: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo2/package.json]
{
  "name": "foo2",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "exports": {
    ".": {
      "import": "./index.mjs",
      "require": "./index.js"
    }
  }
}


Timeout callback:: count: 1
30: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
31: /home/src/projects/project/tsconfig.json *new*
32: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 9 *changed*
    projectProgramVersion: 8

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 10,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
31: /home/src/projects/project/tsconfig.json
32: *ensureProjectForOpenFiles*
33: checkOne *new*

Before running Timeout callback:: count: 3
31: /home/src/projects/project/tsconfig.json
32: *ensureProjectForOpenFiles*
33: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo2/index.mjs', result '/home/src/projects/project/node_modules/foo2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo2' was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.mjs' with Package ID 'foo2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 9 projectProgramVersion: 8 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/foo/index.d.ts
	  Imported via "foo" from file 'index.mts' with packageId 'foo/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/foo/package.json' does not have field "type"
	node_modules/@types/bar/index.d.ts
	  Imported via "bar" from file 'index.mts' with packageId '@types/bar/index.d.ts@1.0.0'
	  File is CommonJS module because 'node_modules/@types/bar/package.json' does not have field "type"
	index.mts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
17: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 9
    projectProgramVersion: 9 *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/@types/bar2/index.d.ts
    version: Text-1
    containingProjects: 0
/home/src/projects/project/node_modules/foo/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts *changed*
    version: Text-1
    containingProjects: 0 *changed*
        /home/src/projects/project/tsconfig.json *deleted*

Before running Immedidate callback:: count: 1
17: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 22
            },
            "end": {
              "line": 3,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'foo2'. '/home/src/projects/project/node_modules/foo2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
18: suggestionCheck *new*

Before running Immedidate callback:: count: 1
18: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 10
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
34: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar2/index.d.ts] deleted

Timeout callback:: count: 1
34: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/@types/bar2/index.d.ts *deleted*
    version: Text-1
    containingProjects: 0
/home/src/projects/project/node_modules/foo/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts
    version: Text-1
    containingProjects: 0

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
35: /home/src/projects/project/tsconfig.json *new*
36: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 10 *changed*
    projectProgramVersion: 9

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 11,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
35: /home/src/projects/project/tsconfig.json
36: *ensureProjectForOpenFiles*
37: checkOne *new*

Before running Timeout callback:: count: 3
35: /home/src/projects/project/tsconfig.json
36: *ensureProjectForOpenFiles*
37: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.mjs' with Package ID 'foo2/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar2/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar2/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar2/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' has a '.d.ts' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar2/index.mjs', result '/home/src/projects/project/node_modules/bar2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar2' was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 10 projectProgramVersion: 9 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
19: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 10
    projectProgramVersion: 10 *changed*

Before running Immedidate callback:: count: 1
19: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 22
            },
            "end": {
              "line": 3,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'foo2'. '/home/src/projects/project/node_modules/foo2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/bar2` if it exists or add a new declaration (.d.ts) file containing `declare module 'bar2';`",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
20: suggestionCheck *new*

Before running Immedidate callback:: count: 1
20: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 11
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
38: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo2/index.d.ts] deleted

Timeout callback:: count: 1
38: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/index.mts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/projects/project/tsconfig.json *default*
/home/src/projects/project/node_modules/@types/bar/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo/index.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/projects/project/tsconfig.json
/home/src/projects/project/node_modules/foo2/index.d.ts *deleted*
    version: Text-1
    containingProjects: 0

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
39: /home/src/projects/project/tsconfig.json *new*
40: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 11 *changed*
    projectProgramVersion: 10

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 12,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
39: /home/src/projects/project/tsconfig.json
40: *ensureProjectForOpenFiles*
41: checkOne *new*

Before running Timeout callback:: count: 3
39: /home/src/projects/project/tsconfig.json
40: *ensureProjectForOpenFiles*
41: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/foo2/index.d.ts', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.d.ts' has a '.d.ts' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/foo2/index.d.ts' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo2/index.mjs', result '/home/src/projects/project/node_modules/foo2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo2' was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.mjs' with Package ID 'foo2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 11 projectProgramVersion: 10 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
21: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 11
    projectProgramVersion: 11 *changed*

Before running Immedidate callback:: count: 1
21: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 22
            },
            "end": {
              "line": 3,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'foo2'. '/home/src/projects/project/node_modules/foo2/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/foo2` if it exists or add a new declaration (.d.ts) file containing `declare module 'foo2';`",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/bar2` if it exists or add a new declaration (.d.ts) file containing `declare module 'bar2';`",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
22: suggestionCheck *new*

Before running Immedidate callback:: count: 1
22: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 12
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/@types/bar2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
42: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/@types/bar2/index.d.ts]
export declare const bar2: number;


Timeout callback:: count: 1
42: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
43: /home/src/projects/project/tsconfig.json *new*
44: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 12 *changed*
    projectProgramVersion: 11

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 13,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
43: /home/src/projects/project/tsconfig.json
44: *ensureProjectForOpenFiles*
45: checkOne *new*

Before running Timeout callback:: count: 3
43: /home/src/projects/project/tsconfig.json
44: *ensureProjectForOpenFiles*
45: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.mjs' with Package ID 'foo2/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/@types/bar2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'bar2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'types' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'main' field 'index.js' that references '/home/src/projects/project/node_modules/bar2/index.js'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/projects/project/node_modules/bar2/index.js', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/bar2/index.js' has a '.js' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/bar2/index.js.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/project/node_modules/bar2/index.js' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/@types/bar2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/bar2/index.mjs', result '/home/src/projects/project/node_modules/bar2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar2' was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 12 projectProgramVersion: 11 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
23: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 12
    projectProgramVersion: 12 *changed*

Before running Immedidate callback:: count: 1
23: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 22
            },
            "end": {
              "line": 3,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'foo2'. '/home/src/projects/project/node_modules/foo2/index.mjs' implicitly has an 'any' type.\n  Try `npm i --save-dev @types/foo2` if it exists or add a new declaration (.d.ts) file containing `declare module 'foo2';`",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
24: suggestionCheck *new*

Before running Immedidate callback:: count: 1
24: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 13
      }
    }
After running Immedidate callback:: count: 0

Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project/node_modules/foo2/index.d.ts :: WatchInfo: /home/src/projects/project/node_modules 1 undefined Project: /home/src/projects/project/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
46: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
//// [/home/src/projects/project/node_modules/foo2/index.d.ts]
export declare const foo2: number;


Timeout callback:: count: 1
46: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
47: /home/src/projects/project/tsconfig.json *new*
48: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 13 *changed*
    projectProgramVersion: 12

Before running Immedidate callback:: count: 0

After running Immedidate callback:: count: 0

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/home/src/projects/project/index.mts"
        ]
      },
      "seq": 14,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 3
47: /home/src/projects/project/tsconfig.json
48: *ensureProjectForOpenFiles*
49: checkOne *new*

Before running Timeout callback:: count: 3
47: /home/src/projects/project/tsconfig.json
48: *ensureProjectForOpenFiles*
49: checkOne

Info seq  [hh:mm:ss:mss] Running: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'foo' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/foo/index.d.ts' with Package ID 'foo/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/@types/bar/index.d.ts' with Package ID '@types/bar/index.d.ts@1.0.0'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'foo2' from '/home/src/projects/project/index.mts'. ========
Info seq  [hh:mm:ss:mss] Explicitly specified module resolution kind: 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/home/src/projects/project/node_modules/foo2/package.json'.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.mts' does not exist.
Info seq  [hh:mm:ss:mss] Failed to resolve under condition 'import'.
Info seq  [hh:mm:ss:mss] Saw non-matching condition 'require'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/home/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Entering conditional exports.
Info seq  [hh:mm:ss:mss] Matched 'exports' condition 'import'.
Info seq  [hh:mm:ss:mss] Using 'exports' subpath '.' with target './index.mjs'.
Info seq  [hh:mm:ss:mss] File name '/home/src/projects/project/node_modules/foo2/index.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.mjs' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolved under condition 'import'.
Info seq  [hh:mm:ss:mss] Exiting conditional exports.
Info seq  [hh:mm:ss:mss] Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Loading module 'foo2' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typesVersions' field.
Info seq  [hh:mm:ss:mss] 'package.json' does not have a 'typings' field.
Info seq  [hh:mm:ss:mss] 'package.json' has 'types' field 'index.d.ts' that references '/home/src/projects/project/node_modules/foo2/index.d.ts'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo2/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/projects/project/node_modules/foo2/index.mjs', result '/home/src/projects/project/node_modules/foo2/index.mjs'.
Info seq  [hh:mm:ss:mss] ======== Module name 'foo2' was successfully resolved to '/home/src/projects/project/node_modules/foo2/index.mjs' with Package ID 'foo2/index.mjs@1.0.0'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'bar2' from '/home/src/projects/project/index.mts' of old program, it was successfully resolved to '/home/src/projects/project/node_modules/bar2/index.mjs' with Package ID 'bar2/index.mjs@1.0.0'.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/foo/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/projects/project/node_modules/@types/bar/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/projects/project/tsconfig.json projectStateVersion: 13 projectProgramVersion: 12 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/projects/project/node_modules/foo/index.d.ts Text-1 "export declare const foo: number;"
	/home/src/projects/project/node_modules/@types/bar/index.d.ts Text-1 "export declare const bar: number;"
	/home/src/projects/project/index.mts SVC-1-0 "import { foo } from \"foo\";\nimport { bar } from \"bar\";\nimport { foo2 } from \"foo2\";\nimport { bar2 } from \"bar2\";\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/projects/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/projects/project/index.mts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/projects/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/projects/project/index.mts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/projects/project/index.mts"
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "syntaxDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": []
      }
    }
After running Timeout callback:: count: 0

Immedidate callback:: count: 1
25: semanticCheck *new*

Projects::
/home/src/projects/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 13
    projectProgramVersion: 13 *changed*

Before running Immedidate callback:: count: 1
25: semanticCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "semanticDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 3,
              "offset": 22
            },
            "end": {
              "line": 3,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'foo2'. '/home/src/projects/project/node_modules/foo2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/foo2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'foo2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          },
          {
            "start": {
              "line": 4,
              "offset": 22
            },
            "end": {
              "line": 4,
              "offset": 28
            },
            "text": "Could not find a declaration file for module 'bar2'. '/home/src/projects/project/node_modules/bar2/index.mjs' implicitly has an 'any' type.\n  There are types at '/home/src/projects/project/node_modules/@types/bar2/index.d.ts', but this result could not be resolved when respecting package.json \"exports\". The '@types/bar2' library may need to update its package.json or typings.",
            "code": 7016,
            "category": "error"
          }
        ]
      }
    }
After running Immedidate callback:: count: 1

Immedidate callback:: count: 1
26: suggestionCheck *new*

Before running Immedidate callback:: count: 1
26: suggestionCheck

Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "suggestionDiag",
      "body": {
        "file": "/home/src/projects/project/index.mts",
        "diagnostics": [
          {
            "start": {
              "line": 1,
              "offset": 1
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "text": "'foo' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 2,
              "offset": 1
            },
            "end": {
              "line": 2,
              "offset": 27
            },
            "text": "'bar' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 3,
              "offset": 1
            },
            "end": {
              "line": 3,
              "offset": 29
            },
            "text": "'foo2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          },
          {
            "start": {
              "line": 4,
              "offset": 1
            },
            "end": {
              "line": 4,
              "offset": 29
            },
            "text": "'bar2' is declared but its value is never read.",
            "code": 6133,
            "category": "suggestion",
            "reportsUnnecessary": true
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "requestCompleted",
      "body": {
        "request_seq": 14
      }
    }
After running Immedidate callback:: count: 0
