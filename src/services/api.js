import { getItem } from "../utils/localStorage";
import { BASE_URL } from "../constants";
import axios from "axios";

class RestAPI {

  //** SIGNUP API **//
  static userSignup(data) {
    return axios({
      method: "post",
      url: `${BASE_URL}/api/accounts/register/`,
      data: data
    }).then(
      res => res

    )
  };

  //** SIGNUP API **//
  static userSignIn(data) {

    return axios({
      method: "post",
      url: `${BASE_URL}/api/accounts/login/`,
      data: data
    }).then(
      res => res
    )
  };

  //** ADD PAPER API **//
  static addPaper(data) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "post",
      url: `${BASE_URL}/api/interests/papers/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      data: data
    }).then(
      res => res

    )
  };

  //** GET LIST PAPER API **//
  static getListPaper() {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/papers/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res
    )
  };

  //** GET A PAPER API **//
  static getPaper(id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/papers/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res
    )
  };

  //** DELETE A PAPER API **//
  static deletePaper(id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "DELETE",
      url: `${BASE_URL}/api/interests/papers/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res
    )
  };

  //** UPDATE PAPER API **//
  static updatePaper(data, id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "patch",
      url: `${BASE_URL}/api/interests/papers/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      data: data
    }).then(
      res => res

    )
  };


  //** GET USER PROFILE DATA API **//
  static getUserData() {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/accounts/profile/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      //   data: data
    }).then(
      res => res

    )
  };

  //** UPDATE USER PROFILE API **//
  static updateUserProfile(data, id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "patch",
      url: `${BASE_URL}/api/accounts/profile/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      data: data
    }).then(
      res => res

    )
  };



  //** GET KEYWORD DATA API **//
  static getKeyword() {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/keywords/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      //   data: data
    }).then(
      res => res

    )
  };

  //** ADD KEYWORD DATA API **//
  static addKeyword(data) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "post",
      url: `${BASE_URL}/api/interests/keywords/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      data: {
        keywords: [data]
      }
    }).then(
      res => res

    )
  };


  //** GET BLACK KEYWORD  API **//
  static getBlackKeyword() {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/black-listed-keywords/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      //   data: data
    }).then(
      res => res

    )
  };

  //** ADD BLACK KEYWORD API **//
  static addBlackKeyword(data) {

    const TOKEN = getItem("accessToken");
    return axios({
      method: "post",
      url: `${BASE_URL}/api/interests/black-listed-keywords/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      data: {
        keywords: [data]
      }
    }).then(
      res => res

    )
  };


  //** DELETE BLACK KEYWORD API **//
  static deleteBlackKeyword(id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "delete",
      url: `${BASE_URL}/api/interests/black-listed-keywords/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },

    }).then(
      res => res

    )
  };


  //** PIE DATA API **//
  static pieChart(data) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/short-term/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      keywords: data
    }).then(
      res => res

    )
  };

  //** STREAM DATA API **//
  static streamChart() {

    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/stream-graph/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res

    )
  };

  //** CONCEPT DATA API **//
  static conceptChart() {

    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/long-term/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res

    )
  };





  //** BAR DATA API **//
  static barChart(data) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/activity-stats/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      keywords: data
    }).then(
      res => res

    )
  };

  //** CLOUD DATA API **//
  static cloudChart(data) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/long-term/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
      keywords: data
    }).then(
      res => res

    )
  };

  //** GET SEARCH USER PROFILE DATA API **//
  static getUserProfile(id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/accounts/public-profile/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res
    )
  };


  //** GET SCORE SEARCH USER PROFILE DATA API **//
  static getScore(id) {
    const TOKEN = getItem("accessToken");
    return axios({
      method: "get",
      url: `${BASE_URL}/api/interests/similarity/${id}/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Token ${TOKEN}`
      },
    }).then(
      res => res
    )
  };




}

export default RestAPI;
