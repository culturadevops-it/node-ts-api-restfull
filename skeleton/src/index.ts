import { MainApp } from './Infrastructure/MainApp';

try {
    new MainApp().start();
    console.log('');
    console.log("{.''.}> started");
    console.log("{.''.}> ");
    console.log("{.''.}>------- ENVIRONMENT VARS --------");
    console.log("{.''.}>-- APP_PORT: " + process.env.APP_PORT);
    console.log("{.''.}>-- DB_HOSTNAME: " + process.env.DB_HOSTNAME);
    console.log("{.''.}>-- DB_HOSTPORT: " + process.env.DB_HOSTPORT);
    console.log("{.''.}>-- DB_DATABASE: " + process.env.DB_DATABASE);
    console.log("{.''.}>-- DB_USERNAME: " + process.env.DB_USERNAME);
    console.log("{.''.}>-- DB_PASSWORD: " + process.env.DB_PASSWORD);
    console.log("{.''.}>--------------------------------");
    console.log("{.''.}>--");
    console.log('');
} catch (e) {
    process.exit(1);
}

process.on('uncaughtException', (err) => {
    console.log('::: UPS ::: uncaught exception throwed', err);
    process.exit(1);
});
