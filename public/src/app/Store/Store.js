import {dispatch,register} from '../Dispatcher/Dispatcher';
import AppConstants from '../Constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
var tagData=[];
var emptydata=[];

const AppStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT,callback)
  },
  setData(data){
    tagData=data;
  },
  getData(){
    return tagData;
  },
  getClearTextFieldMsg(){
    return emptydata;
  }
});

  dispatcherIndex:register((action)=>{
     switch (action.actionType) {
       case AppConstants.ADD_DATA:
              AppStore.setData(action.data);
              AppStore.emitChange();
              break;
       case AppConstants.REMOVE_DATA:
              removeData(action.item);
              break;
      case AppConstants.CLEAR_DATA:
              removeData(action.item);
              AppStore.emitChange();
              break;
     }

     AppStore.emitChange();

  });


export default AppStore;
