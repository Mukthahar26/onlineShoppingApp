const logger ={
    log: __DEV__ ? console.log : ()=>{},
    error:__DEV__ ? console.error : ()=>{}
}

export default logger;