var key,Module=void 0!==Module?Module:{},moduleOverrides={};for(key in Module)Module.hasOwnProperty(key)&&(moduleOverrides[key]=Module[key]);var read_,readAsync,readBinary,setWindowTitle,nodeFS,nodePath,arguments_=[],thisProgram="./this.program",quit_=function(e,n){throw n},ENVIRONMENT_IS_WEB="object"==typeof window,ENVIRONMENT_IS_WORKER="function"==typeof importScripts,ENVIRONMENT_IS_NODE="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,scriptDirectory="";function locateFile(e){return Module.locateFile?Module.locateFile(e,scriptDirectory):scriptDirectory+e}function logExceptionOnExit(e){e instanceof ExitStatus||err("exiting due to exception: "+e)}ENVIRONMENT_IS_NODE?(scriptDirectory=ENVIRONMENT_IS_WORKER?require("path").dirname(scriptDirectory)+"/":__dirname+"/",read_=function(e,n){return nodeFS||(nodeFS=require("fs")),nodePath||(nodePath=require("path")),e=nodePath.normalize(e),nodeFS.readFileSync(e,n?null:"utf8")},readBinary=function(e){var n=read_(e,!0);return n.buffer||(n=new Uint8Array(n)),assert(n.buffer),n},readAsync=function(e,n,r){nodeFS||(nodeFS=require("fs")),nodePath||(nodePath=require("path")),e=nodePath.normalize(e),nodeFS.readFile(e,(function(e,t){e?r(e):n(t.buffer)}))},process.argv.length>1&&(thisProgram=process.argv[1].replace(/\\/g,"/")),arguments_=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=Module),process.on("uncaughtException",(function(e){if(!(e instanceof ExitStatus))throw e})),process.on("unhandledRejection",(function(e){throw e})),quit_=function(e,n){if(keepRuntimeAlive())throw process.exitCode=e,n;logExceptionOnExit(n),process.exit(e)},Module.inspect=function(){return"[Emscripten Module object]"}):(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&(ENVIRONMENT_IS_WORKER?scriptDirectory=self.location.href:"undefined"!=typeof document&&document.currentScript&&(scriptDirectory=document.currentScript.src),scriptDirectory=0!==scriptDirectory.indexOf("blob:")?scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1):"",read_=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},ENVIRONMENT_IS_WORKER&&(readBinary=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),readAsync=function(e,n,r){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(){200==t.status||0==t.status&&t.response?n(t.response):r()},t.onerror=r,t.send(null)},setWindowTitle=function(e){document.title=e});var wasmBinary,out=Module.print||void 0,err=Module.printErr||void 0;for(key in moduleOverrides)moduleOverrides.hasOwnProperty(key)&&(Module[key]=moduleOverrides[key]);moduleOverrides=null,Module.arguments&&(arguments_=Module.arguments),Module.thisProgram&&(thisProgram=Module.thisProgram),Module.quit&&(quit_=Module.quit),Module.wasmBinary&&(wasmBinary=Module.wasmBinary);var wasmMemory,noExitRuntime=Module.noExitRuntime||!0;"object"!=typeof WebAssembly&&abort("no native wasm support detected");var EXITSTATUS,ABORT=!1;function assert(e,n){e||abort("Assertion failed: "+n)}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64,UTF8Decoder="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function UTF8ArrayToString(e,n,r){for(var t=n+r,i=n;e[i]&&!(i>=t);)++i;if(i-n>16&&e.subarray&&UTF8Decoder)return UTF8Decoder.decode(e.subarray(n,i));for(var o="";n<i;){var a=e[n++];if(128&a){var u=63&e[n++];if(192!=(224&a)){var l=63&e[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|l:(7&a)<<18|u<<12|l<<6|63&e[n++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function UTF8ToString(e,n){return e?UTF8ArrayToString(HEAPU8,e,n):""}function updateGlobalBufferAndViews(e){buffer=e,Module.HEAP8=HEAP8=new Int8Array(e),Module.HEAP16=HEAP16=new Int16Array(e),Module.HEAP32=HEAP32=new Int32Array(e),Module.HEAPU8=HEAPU8=new Uint8Array(e),Module.HEAPU16=HEAPU16=new Uint16Array(e),Module.HEAPU32=HEAPU32=new Uint32Array(e),Module.HEAPF32=HEAPF32=new Float32Array(e),Module.HEAPF64=HEAPF64=new Float64Array(e)}var wasmTable,INITIAL_MEMORY=Module.INITIAL_MEMORY||67108864,__ATPRERUN__=[],__ATINIT__=[],__ATPOSTRUN__=[],runtimeInitialized=!1,runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module.preRun)for("function"==typeof Module.preRun&&(Module.preRun=[Module.preRun]);Module.preRun.length;)addOnPreRun(Module.preRun.shift());callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=!0,callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module.postRun)for("function"==typeof Module.postRun&&(Module.postRun=[Module.postRun]);Module.postRun.length;)addOnPostRun(Module.postRun.shift());callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(e){__ATPRERUN__.unshift(e)}function addOnInit(e){__ATINIT__.unshift(e)}function addOnPostRun(e){__ATPOSTRUN__.unshift(e)}var runDependencies=0,runDependencyWatcher=null,dependenciesFulfilled=null;function addRunDependency(e){runDependencies++,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies)}function removeRunDependency(e){if(runDependencies--,Module.monitorRunDependencies&&Module.monitorRunDependencies(runDependencies),0==runDependencies&&(null!==runDependencyWatcher&&(clearInterval(runDependencyWatcher),runDependencyWatcher=null),dependenciesFulfilled)){var n=dependenciesFulfilled;dependenciesFulfilled=null,n()}}function abort(e){throw Module.onAbort&&Module.onAbort(e),err(e="Aborted("+e+")"),ABORT=!0,EXITSTATUS=1,e+=". Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(e)}Module.preloadedImages={},Module.preloadedAudios={};var wasmBinaryFile,dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(e){return e.startsWith(dataURIPrefix)}function isFileURI(e){return e.startsWith("file://")}function getBinary(e){try{if(e==wasmBinaryFile&&wasmBinary)return new Uint8Array(wasmBinary);if(readBinary)return readBinary(e);throw"both async and sync fetching of the wasm failed"}catch(e){abort(e)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if("function"==typeof fetch&&!isFileURI(wasmBinaryFile))return fetch(wasmBinaryFile,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+wasmBinaryFile+"'";return e.arrayBuffer()})).catch((function(){return getBinary(wasmBinaryFile)}));if(readAsync)return new Promise((function(e,n){readAsync(wasmBinaryFile,(function(n){e(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return getBinary(wasmBinaryFile)}))}function createWasm(){var e={a:asmLibraryArg};function n(e,n){var r=e.exports;Module.asm=r,updateGlobalBufferAndViews((wasmMemory=Module.asm.d).buffer),wasmTable=Module.asm.j,addOnInit(Module.asm.e),removeRunDependency("wasm-instantiate")}function r(e){n(e.instance)}function t(n){return getBinaryPromise().then((function(n){return WebAssembly.instantiate(n,e)})).then((function(e){return e})).then(n,(function(e){err("failed to asynchronously prepare wasm: "+e),abort(e)}))}if(addRunDependency("wasm-instantiate"),Module.instantiateWasm)try{return Module.instantiateWasm(e,n)}catch(e){return err("Module.instantiateWasm callback failed with error: "+e),!1}return wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||isDataURI(wasmBinaryFile)||isFileURI(wasmBinaryFile)||"function"!=typeof fetch?t(r):fetch(wasmBinaryFile,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,e).then(r,(function(e){return err("wasm streaming compile failed: "+e),err("falling back to ArrayBuffer instantiation"),t(r)}))})),{}}function callRuntimeCallbacks(e){for(;e.length>0;){var n=e.shift();if("function"!=typeof n){var r=n.func;"number"==typeof r?void 0===n.arg?getWasmTableEntry(r)():getWasmTableEntry(r)(n.arg):r(void 0===n.arg?null:n.arg)}else n(Module)}}isDataURI(wasmBinaryFile="main.wasm")||(wasmBinaryFile=locateFile(wasmBinaryFile));var wasmTableMirror=[];function getWasmTableEntry(e){var n=wasmTableMirror[e];return n||(e>=wasmTableMirror.length&&(wasmTableMirror.length=e+1),wasmTableMirror[e]=n=wasmTable.get(e)),n}function _emscripten_memcpy_big(e,n,r){HEAPU8.copyWithin(e,n,n+r)}function abortOnCannotGrowMemory(e){abort("OOM")}function _emscripten_resize_heap(e){HEAPU8.length;abortOnCannotGrowMemory(e>>>=0)}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(e,n){var r=SYSCALLS.buffers[e];0===n||10===n?((1===e?out:err)(UTF8ArrayToString(r,0)),r.length=0):r.push(n)},varargs:void 0,get:function(){return SYSCALLS.varargs+=4,HEAP32[SYSCALLS.varargs-4>>2]},getStr:function(e){return UTF8ToString(e)},get64:function(e,n){return e}};function _fd_write(e,n,r,t){for(var i=0,o=0;o<r;o++){var a=HEAP32[n>>2],u=HEAP32[n+4>>2];n+=8;for(var l=0;l<u;l++)SYSCALLS.printChar(e,HEAPU8[a+l]);i+=u}return HEAP32[t>>2]=i,0}var calledRun,asmLibraryArg={b:_emscripten_memcpy_big,c:_emscripten_resize_heap,a:_fd_write},asm=createWasm(),___wasm_call_ctors=Module.___wasm_call_ctors=function(){return(___wasm_call_ctors=Module.___wasm_call_ctors=Module.asm.e).apply(null,arguments)},_fibonacci=Module._fibonacci=function(){return(_fibonacci=Module._fibonacci=Module.asm.f).apply(null,arguments)},_lz_rgb32_decompress=Module._lz_rgb32_decompress=function(){return(_lz_rgb32_decompress=Module._lz_rgb32_decompress=Module.asm.g).apply(null,arguments)},_malloc_buf=Module._malloc_buf=function(){return(_malloc_buf=Module._malloc_buf=Module.asm.h).apply(null,arguments)},_free_buf=Module._free_buf=function(){return(_free_buf=Module._free_buf=Module.asm.i).apply(null,arguments)};function ExitStatus(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function run(e){function n(){calledRun||(calledRun=!0,Module.calledRun=!0,ABORT||(initRuntime(),Module.onRuntimeInitialized&&Module.onRuntimeInitialized(),postRun()))}e=e||arguments_,runDependencies>0||(preRun(),runDependencies>0||(Module.setStatus?(Module.setStatus("Running..."),setTimeout((function(){setTimeout((function(){Module.setStatus("")}),1),n()}),1)):n()))}if(dependenciesFulfilled=function e(){calledRun||run(),calledRun||(dependenciesFulfilled=e)},Module.run=run,Module.preInit)for("function"==typeof Module.preInit&&(Module.preInit=[Module.preInit]);Module.preInit.length>0;)Module.preInit.pop()();run();