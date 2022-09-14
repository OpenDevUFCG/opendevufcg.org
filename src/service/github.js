import axios from "axios";

const githubURL = "https://api.github.com/";

export const githubAPI = axios.create({
  baseURL: githubURL,
});

export const queryMembers = async () => {
  try {
    const response = await githubAPI.get("orgs/OpenDevUFCG/members");
    return response;
  } catch (e) {
    console.log("Erro ao recuperar infos...");
    return null;
  }
};
