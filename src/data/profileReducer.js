const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE = "ADD_LIKE";
const profileReducer = (state, action) => {
    switch(action.type) {
        case DELETE_POST: 
            state = state.filter((post) => {
                return post.id !== action.postId;
            });  
            break;
        case ADD_POST: 
            const newPost = { 
                userName: action.userName,
                text: action.text,
                img: action.img,
                id: Math.random(),
                like: 0
            }
            state.unshift(newPost);
            break;
        case ADD_LIKE: 
            const post = state.find((element) => {
                return element.id === action.id;
            });
            post.like++;
            break;
        default: 
            console.log("Что то не то :(");
            break;
    }
    return state;
}

export const deletePostAC = (id) => {
    const action = {
        type: "DELETE_POST", 
        postId: id
    }
    return action;
}

export const addPostAC = (userName, text, img) => {
    const action = {
        type: "ADD_POST", 
        userName: userName,
        text: text,
        img: img
    }
    return action;
}

export const addLikeAC = (id) => {
    const action = {
        type: "ADD_LIKE", 
        id: id
    }
    return action;
}

export default profileReducer;