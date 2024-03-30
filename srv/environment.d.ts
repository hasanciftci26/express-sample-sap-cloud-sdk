declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPRESS_SERVER_PORT: string;
        }
    }
}

export { };