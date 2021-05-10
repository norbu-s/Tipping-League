const bcrypt = require('bcrypt');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../serverConfig');
const { db } = require('../server');
const { promisify } = require('util');