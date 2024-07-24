export const DELELE = "@todo/delete";
const initState = [
  {
    id: 1,
    taskName: "học JS",
  },
  {
    id: 2,
    taskName: "học CSS",
  },
  {
    id: 3,
    taskName: "học HTML",
  },
  {
    id: 4,
    taskName: "học NODE",
  },
];

export function reducer(state = initState, action) {
  switch (action.type) {
    case DELELE:
      return state.filter((item) => item.id != action.payload);
    default:
      return state;
  }
}
