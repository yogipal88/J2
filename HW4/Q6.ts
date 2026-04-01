function getStudentInfo<T>(info:T):T{
    return  info
}
console.log(getStudentInfo<string>("tom"));
console.log(getStudentInfo<number>(10));
console.log(getStudentInfo<boolean>(true));


