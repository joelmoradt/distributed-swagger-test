const fs = require("fs");
const path = require("path");
const { merge } = require("lodash");
const paths = require("./swagger-api.json");
const models = require("../../store/swagger/swagger-models.json");

const info = {
  info: {
    version: "1.0.0",
    title: "Foo API Documentation Merged",
    description: "",
  },
};
const mergedSwagger = merge(models, paths, info);
const mergedSwaggerStr = JSON.stringify(mergedSwagger, null, 2);

 fs.writeFileSync(path.join(__dirname, "/swagger.json"), mergedSwaggerStr);
