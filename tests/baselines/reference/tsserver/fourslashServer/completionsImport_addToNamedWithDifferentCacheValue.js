currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/node_modules/mylib] symlink(/packages/mylib)
//// [/packages/mylib/index.ts]
export * from "./mySubDir";

//// [/packages/mylib/mySubDir/index.ts]
export * from "./myClass";
export * from "./myClass2";

//// [/packages/mylib/mySubDir/myClass.ts]
export class MyClass {}

//// [/packages/mylib/mySubDir/myClass2.ts]
export class MyClass2 {}

//// [/packages/mylib/package.json]
{ "name": "mylib", "version": "1.0.0", "main": "index.js" }

//// [/src/index.ts]

const a = new MyClass();
const b = new MyClass2();

//// [/tsconfig.json]
{ "compilerOptions": { "module": "commonjs" } }


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/tsconfig.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] Search path: /
Info seq  [hh:mm:ss:mss] For info: /tsconfig.json :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.json",
        "reason": "Creating possible configured project for /tsconfig.json to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/lib.d.ts",
  "/lib.decorators.d.ts",
  "/lib.decorators.legacy.d.ts",
  "/packages/mylib/index.ts",
  "/packages/mylib/mySubDir/index.ts",
  "/packages/mylib/mySubDir/myClass.ts",
  "/packages/mylib/mySubDir/myClass2.ts",
  "/src/index.ts"
 ],
 "options": {
  "module": 1,
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/mylib/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/mylib/mySubDir/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/mylib/mySubDir/myClass.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/mylib/mySubDir/myClass2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/mylib/mySubDir 1 undefined Project: /tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/mylib/mySubDir 1 undefined Project: /tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/lib.d.ts Text-1 lib.d.ts-Text
	/packages/mylib/mySubDir/myClass.ts Text-1 "export class MyClass {}"
	/packages/mylib/mySubDir/myClass2.ts Text-1 "export class MyClass2 {}"
	/packages/mylib/mySubDir/index.ts Text-1 "export * from \"./myClass\";\nexport * from \"./myClass2\";"
	/packages/mylib/index.ts Text-1 "export * from \"./mySubDir\";"
	/src/index.ts Text-1 "\nconst a = new MyClass();\nconst b = new MyClass2();"


	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	  Matched by default include pattern '**/*'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	  Matched by default include pattern '**/*'
	lib.d.ts
	  Matched by default include pattern '**/*'
	packages/mylib/mySubDir/myClass.ts
	  Imported via "./myClass" from file 'packages/mylib/mySubDir/index.ts'
	  Matched by default include pattern '**/*'
	packages/mylib/mySubDir/myClass2.ts
	  Imported via "./myClass2" from file 'packages/mylib/mySubDir/index.ts'
	  Matched by default include pattern '**/*'
	packages/mylib/mySubDir/index.ts
	  Imported via "./mySubDir" from file 'packages/mylib/index.ts'
	  Matched by default include pattern '**/*'
	packages/mylib/index.ts
	  Matched by default include pattern '**/*'
	src/index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/tsconfig.json",
        "configFile": "/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/tsconfig.json SVC-1-0 "{ \"compilerOptions\": { \"module\": \"commonjs\" } }"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	tsconfig.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/packages/mylib/index.ts: *new*
  {"pollingInterval":500}
/packages/mylib/mySubDir/index.ts: *new*
  {"pollingInterval":500}
/packages/mylib/mySubDir/myClass.ts: *new*
  {"pollingInterval":500}
/packages/mylib/mySubDir/myClass2.ts: *new*
  {"pollingInterval":500}
/src/index.ts: *new*
  {"pollingInterval":500}
/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
: *new*
  {}
/packages/mylib/mySubDir: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/tsconfig.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /src/index.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Search path: /src
Info seq  [hh:mm:ss:mss] For info: /src/index.ts :: Config file name: /tsconfig.json
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/packages/mylib/index.ts:
  {"pollingInterval":500}
/packages/mylib/mySubDir/index.ts:
  {"pollingInterval":500}
/packages/mylib/mySubDir/myClass.ts:
  {"pollingInterval":500}
/packages/mylib/mySubDir/myClass2.ts:
  {"pollingInterval":500}
/tsconfig.json:
  {"pollingInterval":2000}

watchedFiles *deleted*::
/src/index.ts:
  {"pollingInterval":500}

watchedDirectoriesRecursive::
:
  {}
/packages/mylib/mySubDir:
  {}

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "formatOptions": {
          "indentSize": 4,
          "tabSize": 4,
          "newLineCharacter": "\n",
          "convertTabsToSpaces": true,
          "indentStyle": 2,
          "insertSpaceAfterConstructor": false,
          "insertSpaceAfterCommaDelimiter": true,
          "insertSpaceAfterSemicolonInForStatements": true,
          "insertSpaceBeforeAndAfterBinaryOperators": true,
          "insertSpaceAfterKeywordsInControlFlowStatements": true,
          "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
          "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
          "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
          "insertSpaceBeforeFunctionParenthesis": false,
          "placeOpenBraceOnNewLineForFunctions": false,
          "placeOpenBraceOnNewLineForControlBlocks": false,
          "semicolons": "ignore",
          "trimTrailingWhitespace": true,
          "indentSwitchCase": true
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] Format host information updated
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 2,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "preferences": {
          "includeCompletionsForModuleExports": true,
          "includeInsertTextCompletions": true,
          "allowIncompleteCompletions": true
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 3,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 2,
        "offset": 22
      },
      "command": "completionInfo"
    }
Info seq  [hh:mm:ss:mss] getCompletionData: Get current token: *
Info seq  [hh:mm:ss:mss] getCompletionData: Is inside comment: *
Info seq  [hh:mm:ss:mss] getCompletionData: Get previous token: *
Info seq  [hh:mm:ss:mss] getCompletionsAtPosition: isCompletionListBlocker: *
Info seq  [hh:mm:ss:mss] getExportInfoMap: cache miss or empty; calculating new results
Info seq  [hh:mm:ss:mss] getExportInfoMap: done in * ms
Info seq  [hh:mm:ss:mss] collectAutoImports: resolved 4 module specifiers, plus 0 ambient and 2 from cache
Info seq  [hh:mm:ss:mss] collectAutoImports: response is complete
Info seq  [hh:mm:ss:mss] collectAutoImports: *
Info seq  [hh:mm:ss:mss] getCompletionData: Semantic work: *
Info seq  [hh:mm:ss:mss] getCompletionsAtPosition: getCompletionEntriesFromSymbols: *
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionInfo",
      "request_seq": 4,
      "success": true,
      "body": {
        "flags": 9,
        "isGlobalCompletion": false,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": false,
        "optionalReplacementSpan": {
          "start": {
            "line": 2,
            "offset": 15
          },
          "end": {
            "line": 2,
            "offset": 22
          }
        },
        "entries": [
          {
            "name": "b",
            "kind": "const",
            "kindModifiers": "",
            "sortText": "11"
          },
          {
            "name": "abstract",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "any",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "ArrayBuffer",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "as",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "asserts",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "async",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "await",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "bigint",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "boolean",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Boolean",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "break",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "case",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "catch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "class",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "const",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "continue",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "DataView",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Date",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "debugger",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "declare",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "decodeURI",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "decodeURIComponent",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "default",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "delete",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "do",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "else",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "encodeURI",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "encodeURIComponent",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "enum",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Error",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "eval",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "EvalError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "export",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "extends",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "false",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "finally",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Float32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Float64Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "for",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "function",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Function",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "globalThis",
            "kind": "module",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "if",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "implements",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "import",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "in",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "infer",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Infinity",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "instanceof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Int16Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Int32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Int8Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "interface",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Intl",
            "kind": "module",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "isFinite",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "isNaN",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "JSON",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "keyof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "let",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Math",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "module",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "namespace",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "NaN",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "never",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "new",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "null",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "number",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Number",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "object",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Object",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "package",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "parseFloat",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "parseInt",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "RangeError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "readonly",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "ReferenceError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "RegExp",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "return",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "satisfies",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "string",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "String",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "super",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "switch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "symbol",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "SyntaxError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "this",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "throw",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "true",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "try",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "type",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "TypeError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "typeof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Uint16Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint8Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint8ClampedArray",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "undefined",
            "kind": "var",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "unique",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "unknown",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "URIError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "var",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "void",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "while",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "with",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "yield",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "MyClass",
            "kind": "class",
            "kindModifiers": "export",
            "sortText": "16",
            "hasAction": true,
            "source": "../packages/mylib",
            "sourceDisplay": [
              {
                "text": "../packages/mylib",
                "kind": "text"
              }
            ],
            "data": {
              "exportName": "MyClass",
              "exportMapKey": "7 * MyClass ",
              "moduleSpecifier": "../packages/mylib",
              "fileName": "/packages/mylib/index.ts"
            }
          },
          {
            "name": "MyClass2",
            "kind": "class",
            "kindModifiers": "export",
            "sortText": "16",
            "hasAction": true,
            "source": "../packages/mylib",
            "sourceDisplay": [
              {
                "text": "../packages/mylib",
                "kind": "text"
              }
            ],
            "data": {
              "exportName": "MyClass2",
              "exportMapKey": "8 * MyClass2 ",
              "moduleSpecifier": "../packages/mylib",
              "fileName": "/packages/mylib/index.ts"
            }
          },
          {
            "name": "escape",
            "kind": "function",
            "kindModifiers": "deprecated,declare",
            "sortText": "z15"
          },
          {
            "name": "unescape",
            "kind": "function",
            "kindModifiers": "deprecated,declare",
            "sortText": "z15"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "preferences": {
          "includeCompletionsForModuleExports": true,
          "includeCompletionsWithInsertText": true,
          "allowIncompleteCompletions": true
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 5,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 2,
        "offset": 22,
        "entryNames": [
          {
            "name": "MyClass",
            "source": "../packages/mylib",
            "data": {
              "exportName": "MyClass",
              "fileName": "/packages/mylib/index.ts"
            }
          }
        ]
      },
      "command": "completionEntryDetails-full"
    }
Info seq  [hh:mm:ss:mss] getExportInfoMap: cache hit
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionEntryDetails-full",
      "request_seq": 6,
      "success": true,
      "body": [
        {
          "name": "MyClass",
          "kindModifiers": "export",
          "kind": "constructor",
          "displayParts": [
            {
              "text": "constructor",
              "kind": "keyword"
            },
            {
              "text": " ",
              "kind": "space"
            },
            {
              "text": "MyClass",
              "kind": "className"
            },
            {
              "text": "(",
              "kind": "punctuation"
            },
            {
              "text": ")",
              "kind": "punctuation"
            },
            {
              "text": ":",
              "kind": "punctuation"
            },
            {
              "text": " ",
              "kind": "space"
            },
            {
              "text": "MyClass",
              "kind": "className"
            }
          ],
          "documentation": [],
          "tags": [],
          "codeActions": [
            {
              "description": "Add import from \"../packages/mylib\"",
              "changes": [
                {
                  "fileName": "/src/index.ts",
                  "textChanges": [
                    {
                      "span": {
                        "start": 0,
                        "length": 0
                      },
                      "newText": "import { MyClass } from \"../packages/mylib\";\n"
                    }
                  ]
                }
              ]
            }
          ],
          "source": [
            {
              "text": "../packages/mylib",
              "kind": "text"
            }
          ],
          "sourceDisplay": [
            {
              "text": "../packages/mylib",
              "kind": "text"
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "import { MyClass } from \"../packages/mylib\";\n"
      },
      "command": "change"
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-1 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/lib.d.ts Text-1 lib.d.ts-Text
	/packages/mylib/mySubDir/myClass.ts Text-1 "export class MyClass {}"
	/packages/mylib/mySubDir/myClass2.ts Text-1 "export class MyClass2 {}"
	/packages/mylib/mySubDir/index.ts Text-1 "export * from \"./myClass\";\nexport * from \"./myClass2\";"
	/packages/mylib/index.ts Text-1 "export * from \"./mySubDir\";"
	/src/index.ts SVC-2-1 "import { MyClass } from \"../packages/mylib\";\n\nconst a = new MyClass();\nconst b = new MyClass2();"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /src/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 45,
        "insertString": ""
      },
      "command": "change"
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-2 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "i"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-3 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 2,
        "key": "i"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 11,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 2,
        "endLine": 1,
        "endOffset": 2,
        "insertString": "m"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-4 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 3,
        "key": "m"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 13,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 3,
        "endLine": 1,
        "endOffset": 3,
        "insertString": "p"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-5 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 4,
        "key": "p"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 15,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 4,
        "endLine": 1,
        "endOffset": 4,
        "insertString": "o"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-6 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 17,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 5,
        "key": "o"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 17,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 18,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 5,
        "endLine": 1,
        "endOffset": 5,
        "insertString": "r"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-7 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 19,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 6,
        "key": "r"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 19,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 20,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 6,
        "endLine": 1,
        "endOffset": 6,
        "insertString": "t"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-8 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 21,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 7,
        "key": "t"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 21,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 22,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 7,
        "endLine": 1,
        "endOffset": 7,
        "insertString": " "
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-9 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 23,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 8,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 23,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 24,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 8,
        "endLine": 1,
        "endOffset": 8,
        "insertString": "{"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-10 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 25,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 9,
        "key": "{"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 25,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 26,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 9,
        "endLine": 1,
        "endOffset": 9,
        "insertString": " "
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-11 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 27,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 10,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 27,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 28,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 10,
        "endLine": 1,
        "endOffset": 10,
        "insertString": "M"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-12 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 29,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 11,
        "key": "M"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 29,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 30,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 11,
        "endLine": 1,
        "endOffset": 11,
        "insertString": "y"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-13 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 31,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 12,
        "key": "y"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 31,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 32,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 12,
        "endLine": 1,
        "endOffset": 12,
        "insertString": "C"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-14 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 33,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 13,
        "key": "C"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 33,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 34,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 13,
        "endLine": 1,
        "endOffset": 13,
        "insertString": "l"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-15 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 35,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 14,
        "key": "l"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 35,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 36,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 14,
        "endLine": 1,
        "endOffset": 14,
        "insertString": "a"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-16 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 37,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 15,
        "key": "a"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 37,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 38,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 15,
        "endLine": 1,
        "endOffset": 15,
        "insertString": "s"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-17 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 39,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 16,
        "key": "s"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 39,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 40,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 16,
        "endLine": 1,
        "endOffset": 16,
        "insertString": "s"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-18 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 41,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 17,
        "key": "s"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 41,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 42,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 17,
        "endLine": 1,
        "endOffset": 17,
        "insertString": " "
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-19 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 43,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 18,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 43,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 44,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 18,
        "endLine": 1,
        "endOffset": 18,
        "insertString": "}"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-20 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 45,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 19,
        "key": "}"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 45,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 46,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 19,
        "endLine": 1,
        "endOffset": 19,
        "insertString": " "
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-21 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 47,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 20,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 47,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 48,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 20,
        "endLine": 1,
        "endOffset": 20,
        "insertString": "f"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-22 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 49,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 21,
        "key": "f"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 49,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 50,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 21,
        "endLine": 1,
        "endOffset": 21,
        "insertString": "r"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-23 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 51,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 22,
        "key": "r"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 51,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 52,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 22,
        "endLine": 1,
        "endOffset": 22,
        "insertString": "o"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-24 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 53,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 23,
        "key": "o"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 53,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 54,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 23,
        "endLine": 1,
        "endOffset": 23,
        "insertString": "m"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-25 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 55,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 24,
        "key": "m"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 55,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 56,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 24,
        "endLine": 1,
        "endOffset": 24,
        "insertString": " "
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-26 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 57,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 25,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 57,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 58,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 25,
        "endLine": 1,
        "endOffset": 25,
        "insertString": "\""
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-27 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 59,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 26,
        "key": "\""
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 59,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 60,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 26,
        "endLine": 1,
        "endOffset": 26,
        "insertString": "m"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-28 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 61,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 27,
        "key": "m"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 61,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 62,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 27,
        "endLine": 1,
        "endOffset": 27,
        "insertString": "y"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-29 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 63,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 28,
        "key": "y"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 63,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 64,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 28,
        "endLine": 1,
        "endOffset": 28,
        "insertString": "l"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-30 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 65,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 29,
        "key": "l"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 65,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 66,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 29,
        "endLine": 1,
        "endOffset": 29,
        "insertString": "i"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-31 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 67,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 30,
        "key": "i"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 67,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 68,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 30,
        "endLine": 1,
        "endOffset": 30,
        "insertString": "b"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-32 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 69,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 31,
        "key": "b"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 69,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 70,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 31,
        "endLine": 1,
        "endOffset": 31,
        "insertString": "\""
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-33 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 71,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 32,
        "key": "\""
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 71,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 72,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 32,
        "endLine": 1,
        "endOffset": 32,
        "insertString": ";"
      },
      "command": "change"
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 2
        /tsconfig.json
        /dev/null/inferredProject1*
/packages/mylib/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/index.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/packages/mylib/mySubDir/myClass2.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/src/index.ts (Open) *changed*
    version: SVC-2-34 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 73,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 1,
        "offset": 33,
        "key": ";"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 73,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 74,
      "type": "request",
      "arguments": {
        "preferences": {
          "includeCompletionsForModuleExports": true,
          "includeInsertTextCompletions": true,
          "allowIncompleteCompletions": true
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 74,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 75,
      "type": "request",
      "arguments": {
        "file": "/src/index.ts",
        "line": 4,
        "offset": 23
      },
      "command": "completionInfo"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (8)
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/lib.d.ts Text-1 lib.d.ts-Text
	/packages/mylib/mySubDir/myClass.ts Text-1 "export class MyClass {}"
	/packages/mylib/mySubDir/myClass2.ts Text-1 "export class MyClass2 {}"
	/packages/mylib/mySubDir/index.ts Text-1 "export * from \"./myClass\";\nexport * from \"./myClass2\";"
	/packages/mylib/index.ts Text-1 "export * from \"./mySubDir\";"
	/src/index.ts SVC-2-34 "import { MyClass } from \"mylib\";\n\nconst a = new MyClass();\nconst b = new MyClass2();"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getCompletionData: Get current token: *
Info seq  [hh:mm:ss:mss] getCompletionData: Is inside comment: *
Info seq  [hh:mm:ss:mss] getCompletionData: Get previous token: *
Info seq  [hh:mm:ss:mss] getCompletionsAtPosition: isCompletionListBlocker: *
Info seq  [hh:mm:ss:mss] getExportInfoMap: cache hit
Info seq  [hh:mm:ss:mss] collectAutoImports: resolved 0 module specifiers, plus 0 ambient and 3 from cache
Info seq  [hh:mm:ss:mss] collectAutoImports: response is complete
Info seq  [hh:mm:ss:mss] collectAutoImports: *
Info seq  [hh:mm:ss:mss] getCompletionData: Semantic work: *
Info seq  [hh:mm:ss:mss] getCompletionsAtPosition: getCompletionEntriesFromSymbols: *
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionInfo",
      "request_seq": 75,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      },
      "body": {
        "flags": 1,
        "isGlobalCompletion": false,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": false,
        "optionalReplacementSpan": {
          "start": {
            "line": 4,
            "offset": 15
          },
          "end": {
            "line": 4,
            "offset": 23
          }
        },
        "entries": [
          {
            "name": "a",
            "kind": "const",
            "kindModifiers": "",
            "sortText": "11"
          },
          {
            "name": "MyClass",
            "kind": "alias",
            "kindModifiers": "export",
            "sortText": "11"
          },
          {
            "name": "abstract",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "any",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "ArrayBuffer",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "as",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "asserts",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "async",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "await",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "bigint",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "boolean",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Boolean",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "break",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "case",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "catch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "class",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "const",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "continue",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "DataView",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Date",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "debugger",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "declare",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "decodeURI",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "decodeURIComponent",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "default",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "delete",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "do",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "else",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "encodeURI",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "encodeURIComponent",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "enum",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Error",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "eval",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "EvalError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "export",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "extends",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "false",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "finally",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Float32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Float64Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "for",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "function",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Function",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "globalThis",
            "kind": "module",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "if",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "implements",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "import",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "in",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "infer",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Infinity",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "instanceof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Int16Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Int32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Int8Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "interface",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Intl",
            "kind": "module",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "isFinite",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "isNaN",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "JSON",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "keyof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "let",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Math",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "module",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "namespace",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "NaN",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "never",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "new",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "null",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "number",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Number",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "object",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Object",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "package",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "parseFloat",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "parseInt",
            "kind": "function",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "RangeError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "readonly",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "ReferenceError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "RegExp",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "return",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "satisfies",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "string",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "String",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "super",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "switch",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "symbol",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "SyntaxError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "this",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "throw",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "true",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "try",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "type",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "TypeError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "typeof",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "Uint16Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint32Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint8Array",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "Uint8ClampedArray",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "undefined",
            "kind": "var",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "unique",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "unknown",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "URIError",
            "kind": "var",
            "kindModifiers": "declare",
            "sortText": "15"
          },
          {
            "name": "var",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "void",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "while",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "with",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "yield",
            "kind": "keyword",
            "kindModifiers": "",
            "sortText": "15"
          },
          {
            "name": "MyClass2",
            "kind": "class",
            "kindModifiers": "export",
            "sortText": "16",
            "hasAction": true,
            "source": "mylib",
            "sourceDisplay": [
              {
                "text": "mylib",
                "kind": "text"
              }
            ],
            "data": {
              "exportName": "MyClass2",
              "exportMapKey": "8 * MyClass2 ",
              "moduleSpecifier": "mylib",
              "fileName": "/packages/mylib/mySubDir/myClass2.ts"
            }
          },
          {
            "name": "escape",
            "kind": "function",
            "kindModifiers": "deprecated,declare",
            "sortText": "z15"
          },
          {
            "name": "unescape",
            "kind": "function",
            "kindModifiers": "deprecated,declare",
            "sortText": "z15"
          }
        ]
      }
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
