/*jslint devel: true */
/* eslint-env browser */
import auth from './routes/auth.js';
import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import dotenv from "dotenv";
import i18next from "./config/i18nConf";
import middleware from "i18next-express-middleware";
import roleRoutes from "./routes/roleRoutes.js";
import permissionRoutes from "./routes/permissionRoutes.js";
import userRoute from "./routes/userRoute.js"
import shouseRoute from "./routes/shouseRoutes.js"
import morgan from "morgan";
import homeRoutes from "./routes/homeRoutes.js";
import animalRoute from "./routes/animalRoutes.js"
import db from '../sequelize/models/index'
import passwordResetRoutes from './routes/passwordResetRoutes.js'
import bodyParser from 'body-parser';


dotenv.config();
const app = express();
app.use('/', auth);



// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3006;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Phantom-app",
            version: "1.0.0",
            description:
                "Phantom-app for user which will help to reduce route congestion.",
        },
        servers: [
            {
                url: `http://localhost:3000`,
            },
            {
                url: `https://phantom-pipe-add-expres-fk8xcu.herokuapp.com`,
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(options);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(
  middleware.handle(i18next, {
    ignoreRoutes: ["/foo"], //ignore route from being internationalize ex:/foo
    removeLngFromUrl: false,
  })
);

app.get("/junior", (req, res) => {
    res.json("Introduction to the ones and best.");
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use('/api/v1/users', userRoute);
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/auth', auth);
app.use('/api/v1/permissions', permissionRoutes);
app.use('/api/v1/reset-password', passwordResetRoutes)
app.use('/api/v1/shouse', shouseRoute)
app.use('/api/v1/animal', animalRoute)
app.use(morgan());
app.use(homeRoutes);

db.sequelize.sync({ alter: false }).then(() => {
    console.log('Database Connected!');
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  });
  


export { app as default };
