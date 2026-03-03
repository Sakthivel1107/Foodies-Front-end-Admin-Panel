import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import './ListFood.css';
import { getFoodList , deleteFoodById } from '../../services/foodService';
import SkeletonLoader from '../Skeleton loader/SkeletonLoader';

const ListFood = () => {
  const [list,setList] = useState([]);
  const fetchList = async () => {
    const response = await getFoodList();
    if(response.status === 200){
      setList(response.data);
    }
    else{
      toast.error('Error while reading the foods.');
    }
  };
  const deleteFood = async (id) => {
    const response = await deleteFoodById(id);
    if(response.status === 200){
      toast.success("Food is deleted.");
      await fetchList();
    }
    else{
      toast.error("Error while deleting food");
    }
  }
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 py-3 card">
        <table>
          <thead className='fs-6'>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            list.length === 0 ? (<SkeletonLoader rows={7} />) :
             (  <tbody>{
                      list.map((item,index)=>{
                        return(
                        <tr key={index}>
                          <td>
                            <img src={item.imageUrl} alt="Food-image" width={48} height={48} />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>₹{item.price}.00</td>
                          <td className='ps-3'>
                            <i className='bi bi-x-circle-fill text-danger fs-3' onClick={() => deleteFood(item.id)}></i>
                          </td>
                        </tr>
                        );
                      })
                    }          
                </tbody>
              )
          }
          
        </table>
      </div>
    </div>
  )
}

export default ListFood;