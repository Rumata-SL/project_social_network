export const required = (value: string) => {
    if (value) return undefined
    return "error message"
}

export  const maxLengthCreator = (maxLength:number)=>(value:string)=>{
    if (value.length > maxLength) {
        return `Max length ${maxLength} symbols`
    }
    return undefined
}


export const minLength2 = (value: string) => {
    if (value.length < 2) {
        return "Min length 2 symbols"
    }
    return undefined
}
