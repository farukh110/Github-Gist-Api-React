import { base_url } from "../../AppConsts/AppConsts";

const GetAllGistUrl = (username) => {

    return `${base_url}/users/${username}/gists`;

}

const GetGistUrl = (Id) => {

    return `${base_url}/gists${Id}`;
}


export { GetAllGistUrl, GetGistUrl };