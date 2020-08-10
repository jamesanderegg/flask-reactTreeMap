import axios from 'axios';

export const loadAllData = () => {
  const data= []
  axios.get('/denver_311').then(response =>{
    for (var i = 0; i < response.data.latitude.length; i++){
      data.push([response.data.latitude[i],response.data.longitude[i]])
    }

    console.log("DATA: ", data)
  })
};
