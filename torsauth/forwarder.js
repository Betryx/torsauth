const {exec} = require("child_process")

function launch(name, port){
    try{
        const child = exec(`lt -s ${name} --port ${port}`)

    }catch(err){
        return err
    }
    
}

module.exports = launch