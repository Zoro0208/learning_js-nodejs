
function organizeFn(dirPath){

    console.log("organize command executed",dirPath!=undefined?dirPath: process.cwd() );


}

module.exports={
organizeFn:organizeFn
}