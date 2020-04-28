import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube"; //res.locals.변수이름 = 변수값
    res.locals.routes = routes;
    next()
}