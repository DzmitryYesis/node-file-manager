
const startProgram = () => {

    const argv = process.argv
    const arrWithName = argv.filter(arg=> arg.startsWith("--"))
    const name = arrWithName[0].slice(11)
    console.log(`Welcome to the File Manager, ${name}!`)
}

startProgram()