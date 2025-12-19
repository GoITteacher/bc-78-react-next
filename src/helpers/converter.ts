export const getFormatDate = (userDate:Date)=>{
    const year = userDate.getFullYear();
    const month = userDate.getMonth() + 1;
    const date = userDate.getDate();

    return `${year}-${month}-${date}`

}