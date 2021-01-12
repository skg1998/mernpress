import { authHeader } from '../helpers';
const BASE_URL = "http://api.masonicsprig.com/";

export const memberService = {
    Members,
    MembersUpload
};

function Members(){ 
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    
    return fetch(`${BASE_URL}api/admin/members?offset=0&limit=1000`, requestOptions).then(function(data){
        return data.json();
    });
}

function MembersUpload(formdata){ 
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: formdata
    };
    
    return fetch(`${BASE_URL}api/admin/members/upload`, requestOptions).then(function(data){
        return data
    });
}

