import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

export default {
   SendDataToTag(sentence){
     axios.get('/v1/api/'+sentence).then((response)=>{
        dispatch({ actionType: AppConstants.ADD_DATA,data:response.data});
       }).catch((err)=>{
          console.log(err);
      });

   },
   RemoveTaggedData(item){
     axios.get().then((response)=>{
        dispatch({ actionType: AppConstants.REMOVE_DATA,data:response});
       }).catch((err)=>{
          console.log(err);
      });
   },
   ClearTextFieldErorrMsg(item){
      dispatch({ actionType: AppConstants.CLEAR_DATA,data:''});
   }
}
