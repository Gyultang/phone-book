let initialState={
    contact:[], //받아온연락처를 여기에 추가
    keyword:"",
};

function reducer(state=initialState, action){
    const {type,payload}=action; //type과 payload는 action으로부터 뽑아냄 (action.type앞에 액션붙일 필요가없음)

  switch(type){
    case "ADD_CONTACT":
        // return{...state,contact:[...state.contact,{name:payload.name,phoneNumber:payload.phoneNumber,},],}; 
        // break;
        state.contact.push({
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          });  break;
    case "SEARCH_NAME":
        state.keyword = payload.keyword;
        break;
        // return{...state,keyword : payload.keyword};
        // default: return{...state}
  };
  return { ...state };
}

export default reducer;