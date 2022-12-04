
const urlMap = {
    development: "http://127.0.0.1:9001",
    production: "http://127.0.0.1:9001", // TODO: add production api url
}

function getUrl() {
    const env = process.env.NODE_ENV || "development";
    console.log("ENV", env, process.env.NODE_ENV);
    return urlMap[env];
}

export { getUrl };