(async function(){
    const go = new Go();
    const resp = await fetch("main.wasm")

    const result = await WebAssembly.instantiateStreaming(resp, go.importObject)
    await go.run(result.instance)
})()