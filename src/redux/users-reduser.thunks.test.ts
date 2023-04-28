import { actions } from './users-reduser';
import { follow,unfollow } from "./users-reduser"
import { userApi } from "../api/users-api";
import { ResponseType, ResultCodesEnum } from "../api/api";

jest.mock("../api/users-api")
const userApiMock = userApi as jest.Mocked<typeof userApi>;
const result: ResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {}
}
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
})


test('success follow thunk', async () => {
  userApiMock.unfollow.mockResolvedValue(result)
  
  const thunk = follow(1)

  await thunk(dispatchMock, getStateMock, {})
  
  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
  userApiMock.follow.mockResolvedValue(result)
  
  const thunk = unfollow(1)

  await thunk(dispatchMock, getStateMock, {})
  
  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})