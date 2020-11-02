const getInfoCovid = (callback) => {
    const request =  new XMLHttpRequest();

    request.addEventListener('readystatechange' , () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined , data);

        } else if (request.readyState === 4) {
            callback('could not fetch data' , undefined);
        }
    });

    request.open('GET' ,"https://disease.sh/v3/covid-19/historical/Greece?lastdays=30" );
    request.send();
};


getInfoCovid ((err,data) =>{
    console.log('call] fired');
    if(err) {
        console.log(err);
    }else{
        console.log(data)
    }
});