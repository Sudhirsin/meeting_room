import {FETCH_USERS_REQUEST,
        BOOK_QUOTES,
        SORT_ROOMS,
        FILTER_ROOMS,
        BOOK_ROOMS,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE,
        } from "./action"

const initialState = {
    bookRooms: [],
    roomsData : [
        {
            id:1,
            img:'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:3500
        },
        {
            id:2,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:6000
        },
        {
            id:3,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate: 2345
        },
        {
            id:4,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:10000
        },
        {
            id:5,
            img:'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:3500
        },
        {
            id:6,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:6000
        },
        {
            id:7,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Meeting Rooms',
            capacity: "4 persons",
            rate:324345
        },
        {
            id:8,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000
        },
        {
            id:9,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000
        },
        {
            id:10,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:432654
        },
        {
            id:11,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000
        },
        {
            id:12,
            img:'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:6000
        },
        {
            id:13,
            img:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:353223
        },
        {
            id:14,
            img:'https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            type:'Living Rooms',
            capacity: "4 persons",
            rate:10000
        },
    ],
    isLoading: false,
    query:"",
    data:[],
    error:"",
    orderedRooms: []
}

const reducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_USERS_REQUEST:
        return {
            ...state,
            isLoading: true,
            query: action.query
        }
    case FETCH_USERS_SUCCESS:
        return {
            isLoading: false,
            data: action.data.users,
            error: state.error,
            total: action.data.total_items
        }
    case FETCH_USERS_FAILURE:
        return {
            isLoading: false,
            data: state.data,
            error: action.error
        }
    case BOOK_QUOTES : 
        console.log(action.payload)
        return {
            ...state,
            bookRooms: [...state.bookRooms, action.payload]
        }
    case SORT_ROOMS:
        return {
            ...state,
            roomsData: state.roomsData.sort((a, b) =>  parseInt(a.rate) - parseInt(b.rate))
            
        }
    case FILTER_ROOMS:
        return {
            ...state,
            roomsData: state.roomsData.filter(item => item.type != 'Meeting Rooms')
            
        }
    case BOOK_ROOMS:
        return {
            ...state, 
            orderedRooms: state.roomsData.filter(item => action.payload == item.id)
        }
    default:
        return state
    }
}

export {reducer};