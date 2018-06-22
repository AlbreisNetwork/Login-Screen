define("Auth", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.attempt = function (user, pass) {
            return (user == 'admin' && pass == 'admin');
        };
        return Auth;
    }());
    exports["default"] = Auth;
});
define("Login", ["require", "exports", "Auth"], function (require, exports, Auth_1) {
    "use strict";
    var Login = /** @class */ (function () {
        function Login(username, password) {
            this.username = username;
            this.password = password;
            this.auth = new Auth_1["default"];
        }
        Login.prototype.check = function () {
            return this.auth.attempt(this.username, this.password);
        };
        return Login;
    }());
    return Login;
});
