import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); //쿠키에는 오직 user.id만 담아서 보내도록해 라고 말해주는것
passport.deserializeUser(User.deserializeUser());
