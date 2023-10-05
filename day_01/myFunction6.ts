function consoleError(errMsg:string):void {
    console.log(errMsg);
}

consoleError('error')

function handleError(errMsg:string):never {
    throw new Error(errMsg);
}