const URL_BACKEND = window.location.hostname.includes('localhost')
? 'http://localhost:3001'
: 'https://the42flix.herokuapp.com' ;

export default {
    URL_BACKEND,
};