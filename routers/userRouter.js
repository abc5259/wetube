import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("Change Password"));

export default userRouter;
// M :Model = 데이터
// V : View = 데이터가 어떻게 생겼는지
// C : Control = 데이터를 찾는 함수
