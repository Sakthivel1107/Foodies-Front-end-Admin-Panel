import axios from "axios";

const API_URL = 'https://foodies-back-end-1.onrender.com/api/foods';

export const addFood = async (foodData,image)=>{
       const formData = new FormData();
        formData.append("food", JSON.stringify(foodData));
        formData.append("file",image);
        try{
          axios.post(API_URL,formData,{headers:{"Content-Type":"multipart/fomr-data"}});
        }
        catch(error){
            console.log(error);
            throw error;
        }
}

export const getFoodList = async () => {
  try{
    const response = await axios.get(API_URL);
    return response;
  }
  catch(error){
    console.log('Error while fetching foods ',error);
    throw error;
  }
}

export const deleteFoodById = async (id) => {
  try{
    const response = axios.delete(API_URL+"/"+id);
    return response;
  }
  catch(error){
    console.log('Error while deleteing food ',error);
    throw error;
  }
}