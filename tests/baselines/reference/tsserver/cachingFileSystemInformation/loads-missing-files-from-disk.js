currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/users/username/projects/project/foo.ts]
import {y} from "bar"


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "compilerOptionsForInferredProjects",
      "arguments": {
        "options": {
          "module": "AMD",
          "noLib": true
        }
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/users/username/projects/project/foo.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /users/username/projects/project
Info seq  [hh:mm:ss:mss] For info: /users/username/projects/project/foo.ts :: No config files found.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/project/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/users/username/projects/project/foo.ts SVC-1-0 "import {y} from \"bar\""


	foo.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/username/projects/project/foo.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/users/username/projects/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/project/jsconfig.json: *new*
  {"pollingInterval":2000}
/users/username/projects/project/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/project/tsconfig.json: *new*
  {"pollingInterval":2000}

FsWatches::
/users/username/projects: *new*
  {}
/users/username/projects/project: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/users/username/projects/project/foo.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] getSemanticDiagnostics:: /users/username/projects/project/foo.ts:: 1
Info seq  [hh:mm:ss:mss] foo.ts(1,17): error TS2792: Cannot find module 'bar'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?

Info seq  [hh:mm:ss:mss] fileExists:: [
  {
    "key": "/users/username/projects/project/tsconfig.json",
    "count": 2
  },
  {
    "key": "/users/username/projects/project/jsconfig.json",
    "count": 2
  },
  {
    "key": "/users/username/projects/tsconfig.json",
    "count": 1
  },
  {
    "key": "/users/username/projects/jsconfig.json",
    "count": 1
  },
  {
    "key": "/users/username/tsconfig.json",
    "count": 1
  },
  {
    "key": "/users/username/jsconfig.json",
    "count": 1
  },
  {
    "key": "/users/tsconfig.json",
    "count": 1
  },
  {
    "key": "/users/jsconfig.json",
    "count": 1
  },
  {
    "key": "/tsconfig.json",
    "count": 1
  },
  {
    "key": "/jsconfig.json",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.ts",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.tsx",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.d.ts",
    "count": 1
  },
  {
    "key": "/users/username/projects/bar.ts",
    "count": 1
  },
  {
    "key": "/users/username/projects/bar.tsx",
    "count": 1
  },
  {
    "key": "/users/username/projects/bar.d.ts",
    "count": 1
  },
  {
    "key": "/users/username/bar.ts",
    "count": 1
  },
  {
    "key": "/users/username/bar.tsx",
    "count": 1
  },
  {
    "key": "/users/username/bar.d.ts",
    "count": 1
  },
  {
    "key": "/users/bar.ts",
    "count": 1
  },
  {
    "key": "/users/bar.tsx",
    "count": 1
  },
  {
    "key": "/users/bar.d.ts",
    "count": 1
  },
  {
    "key": "/bar.ts",
    "count": 1
  },
  {
    "key": "/bar.tsx",
    "count": 1
  },
  {
    "key": "/bar.d.ts",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.js",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.jsx",
    "count": 1
  },
  {
    "key": "/users/username/projects/bar.js",
    "count": 1
  },
  {
    "key": "/users/username/projects/bar.jsx",
    "count": 1
  },
  {
    "key": "/users/username/bar.js",
    "count": 1
  },
  {
    "key": "/users/username/bar.jsx",
    "count": 1
  },
  {
    "key": "/users/bar.js",
    "count": 1
  },
  {
    "key": "/users/bar.jsx",
    "count": 1
  },
  {
    "key": "/bar.js",
    "count": 1
  },
  {
    "key": "/bar.jsx",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/package.json",
    "count": 1
  },
  {
    "key": "/users/username/projects/package.json",
    "count": 1
  },
  {
    "key": "/users/username/package.json",
    "count": 1
  },
  {
    "key": "/users/package.json",
    "count": 1
  },
  {
    "key": "/package.json",
    "count": 1
  }
]
Info seq  [hh:mm:ss:mss] directoryExists:: [
  {
    "key": "/users/username/projects/project",
    "count": 3
  },
  {
    "key": "/users/username/projects",
    "count": 3
  },
  {
    "key": "/users/username",
    "count": 2
  },
  {
    "key": "/users",
    "count": 2
  },
  {
    "key": "/",
    "count": 2
  },
  {
    "key": "/users/username/projects/project/node_modules",
    "count": 2
  },
  {
    "key": "/users/username/projects/node_modules",
    "count": 2
  },
  {
    "key": "/users/username/node_modules",
    "count": 1
  },
  {
    "key": "/users/node_modules",
    "count": 1
  },
  {
    "key": "/node_modules",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/node_modules/@types",
    "count": 2
  },
  {
    "key": "/users/username/projects/node_modules/@types",
    "count": 2
  },
  {
    "key": "/users/username/node_modules/@types",
    "count": 1
  },
  {
    "key": "/users/node_modules/@types",
    "count": 1
  },
  {
    "key": "/node_modules/@types",
    "count": 1
  }
]
Info seq  [hh:mm:ss:mss] getDirectories:: []
Info seq  [hh:mm:ss:mss] readFile:: [
  {
    "key": "/users/username/projects/project/foo.ts",
    "count": 1
  }
]
Info seq  [hh:mm:ss:mss] readDirectory:: []
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Triggered with /users/username/projects/project/bar.d.ts :: WatchInfo: /users/username/projects/project 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*FailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/project/bar.d.ts :: WatchInfo: /users/username/projects/project 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
1: /dev/null/inferredProject1*FailedLookupInvalidation
//// [/users/username/projects/project/bar.d.ts]
export var y = 1


Timeout callback:: count: 1
1: /dev/null/inferredProject1*FailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /dev/null/inferredProject1*FailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
2: /dev/null/inferredProject1* *new*
3: *ensureProjectForOpenFiles* *new*

Projects::
/dev/null/inferredProject1* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1

Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/username/projects/project/bar.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/project/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/users/username/projects/project/bar.d.ts Text-1 "export var y = 1"
	/users/username/projects/project/foo.ts SVC-1-0 "import {y} from \"bar\""


	bar.d.ts
	  Imported via "bar" from file 'foo.ts'
	foo.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] getSemanticDiagnostics:: /users/username/projects/project/foo.ts:: 0
Info seq  [hh:mm:ss:mss] fileExists:: [
  {
    "key": "/users/username/projects/project/bar.ts",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.tsx",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/bar.d.ts",
    "count": 3
  }
]
Info seq  [hh:mm:ss:mss] directoryExists:: [
  {
    "key": "/users/username/projects/project",
    "count": 1
  },
  {
    "key": "/users/username/projects/project/node_modules/@types",
    "count": 1
  },
  {
    "key": "/users/username/projects/node_modules/@types",
    "count": 1
  },
  {
    "key": "/users/username/node_modules/@types",
    "count": 1
  },
  {
    "key": "/users/node_modules/@types",
    "count": 1
  },
  {
    "key": "/node_modules/@types",
    "count": 1
  }
]
Info seq  [hh:mm:ss:mss] getDirectories:: []
Info seq  [hh:mm:ss:mss] readFile:: [
  {
    "key": "/users/username/projects/project/bar.d.ts",
    "count": 1
  }
]
Info seq  [hh:mm:ss:mss] readDirectory:: []