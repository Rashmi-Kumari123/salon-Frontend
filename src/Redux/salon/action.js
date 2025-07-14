import axios from "axios";
import { CREATE_SALON_FAILURE, CREATE_SALON_REQUEST, CREATE_SALON_SUCCESS, FETCH_SALON_BY_ID_FAILURE, FETCH_SALON_BY_ID_REQUEST, FETCH_SALON_BY_ID_SUCCESS, FETCH_SALON_BY_OWNER_FAILURE, FETCH_SALON_BY_OWNER_REQUEST, FETCH_SALON_BY_OWNER_SUCCESS, FETCH_SALONS_FAILURE, FETCH_SALONS_REQUEST, FETCH_SALONS_SUCCESS, SEARCH_SALONS_FAILURE, SEARCH_SALONS_REQUEST, SEARCH_SALONS_SUCCESS, UPDATE_SALON_FAILURE, UPDATE_SALON_REQUEST, UPDATE_SALON_SUCCESS } from "./actionTypes";

const API_BASE_URL = "/api/salons"

export const createSalon = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_SALON_REQUEST })

    try {
        const jwt = "";
        const response = await axios.post(API_BASE_URL, reqData.salonDetails, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        reqData.navigate("/salon-dashboard");

        dispatch({ type: CREATE_SALON_SUCCESS, payload: response.data })
    } 
    catch (error) {
        dispatch({ type: CREATE_SALON_FAILURE, payload: error.message })
    }
}

export const updateSalon = (salonId, salon, jwt) => async (dispatch) => {
    dispatch({ type: UPDATE_SALON_REQUEST })

    try {
        const response = await axios.put(API_BASE_URL, salon, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
     
        dispatch({ type: UPDATE_SALON_SUCCESS, payload: response.data })
    } 
    catch (error) {
        dispatch({ type: UPDATE_SALON_FAILURE, payload: error.message })
    }
}

export const fetchSalons = () => async (dispatch) => {
    dispatch({ type: FETCH_SALONS_REQUEST })

    try {
        const response = await axios.get(API_BASE_URL,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
     
        dispatch({ type: FETCH_SALONS_SUCCESS, payload: response.data })
    } 
    catch (error) {
        dispatch({ type: FETCH_SALONS_FAILURE, payload: error.message })
    }
}

export const fetchSalonById = (salonId) => async (dispatch) => {
    dispatch({ type:  FETCH_SALON_BY_ID_REQUEST})

    try {
        const response = await axios.get(`${API_BASE_URL}/${salonId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
     
        dispatch({ type: FETCH_SALON_BY_ID_SUCCESS, payload: response.data })
    } 
    catch (error) {
        dispatch({ type: FETCH_SALON_BY_ID_FAILURE, payload: error.message })
    }
}

export const fetchSalonByOwner = (jwt) => async (dispatch) => {
    dispatch({ type:  FETCH_SALON_BY_OWNER_REQUEST})

    try {
        const response = await axios.get(`${API_BASE_URL}/owner`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
     
        dispatch({ type: FETCH_SALON_BY_OWNER_SUCCESS, payload: response.data })
    } 
    catch (error) {
        dispatch({ type: FETCH_SALON_BY_OWNER_FAILURE, payload: error.message })
    }
}

export const searchSalon = ({jwt,city}) => async (dispatch) => {
    dispatch({ type:  SEARCH_SALONS_REQUEST})

    try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      headers: { Authorization: `Bearer ${jwt}` },
      params: { city: city },
    });
    
    dispatch({ type: SEARCH_SALONS_SUCCESS, payload: response.data });
  } catch (error) {
    
    dispatch({ type: SEARCH_SALONS_FAILURE, payload: error.message });
  }
}