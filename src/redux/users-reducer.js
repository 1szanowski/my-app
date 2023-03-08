const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Neo",
      status: "Im here",
      location: { city: "L/A", country: "US" },
      photoUrl : "https://img.freepik.com/premium-zdjecie/kot-synthwave-vaporwave-w-stylu-koncepcyjnym-pod-neonowym-swiatlem_31965-65032.jpg",
    },
    {
      id: 2,
      followed: true,
      fullName: "Morpheus",
      status: "Kung fu!",
      location: { city: "Matrix", country: "Unknown" },
      photoUrl : "https://img.freepik.com/premium-zdjecie/kot-synthwave-vaporwave-w-stylu-koncepcyjnym-pod-neonowym-swiatlem_31965-65032.jpg",
    },
    {
      id: 3,
      followed: false,
      fullName: "Hunter",
      status: "Blood",
      location: { city: "Dark Town", country: "Neverland" },
      photoUrl : "https://img.freepik.com/premium-zdjecie/kot-synthwave-vaporwave-w-stylu-koncepcyjnym-pod-neonowym-swiatlem_31965-65032.jpg",
    },
    {
      id: 4,
      followed: true,
      fullName: "Ed",
      status: "Im Somewhere in time",
      location: { city: "London", country: "United Kingdome" },
      photoUrl : "https://img.freepik.com/premium-zdjecie/kot-synthwave-vaporwave-w-stylu-koncepcyjnym-pod-neonowym-swiatlem_31965-65032.jpg",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }

          return u;
        }),
      }

    case UNFOLLOW:
      
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      }

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
