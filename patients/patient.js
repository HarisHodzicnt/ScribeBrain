const setDate = (operation) => {
    debugger;
    const timeHtml = document.getElementById('date').innerHTML;
    const text = timeHtml.split(" ");
    const date = parseInt(text[1]);
    if(operation === 'minus') {
        if(date > 1)
        document.getElementById('date').innerHTML = text[0] + ' ' + (date - 1);
    else 
    document.getElementById('date').innerHTML = text[0] + ' ' + 1;
}
    else if(operation === 'plus') {
        if (date < 31 ) 
        document.getElementById('date').innerHTML = text[0] + ' ' + (date + 1);
        else
        document.getElementById('date').innerHTML = text[0] + ' ' + 31;
    }
}