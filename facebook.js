//class for Facebook profile details
var ProfileDetails = /** @class */ (function () {
    //constructor
    function ProfileDetails(_name, _homeTown, _birthday, _currentLocation, _college, _work, _relationshipStatus) {
        var _this = this;
        //methods
        this.getName = function () {
            return _this.name;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getCurrentLocation = function () {
            return _this.currentLocation;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getCollegeName = function () {
            return _this.college;
        };
        this.getWorkDetails = function () {
            return _this.work;
        };
        this.name = _name;
        this.homeTown = _homeTown;
        this.birthday = _birthday;
        this.currentLocation = _currentLocation;
        this.college = _college;
        this.work = _work;
        this.relationshipStatus = _relationshipStatus;
    }
    return ProfileDetails;
}()); // end class
//class to display full profile details
var ViewFullInfo = /** @class */ (function () {
    //constructor
    function ViewFullInfo(_profileInfo) {
        var _this = this;
        //method
        this.getprofileInfo = function () {
            return _this.profileInfo;
        };
        this.profileInfo = _profileInfo;
    }
    return ViewFullInfo;
}()); // end class
var profileNew = new ProfileDetails("Pratik Ghosh", "Shillong", "12.05.1993", "Noida", "NIT Meghalaya", "Suvan ecommerce Ltd", "single");
var totalInfo1 = new ViewFullInfo(profileNew);
console.log("Name of user");
console.log(profileNew.getName());
console.log(".......................");
console.log("Hometown");
console.log(profileNew.getHomeTown());
console.log(".......................");
console.log("Birthday");
console.log(profileNew.getBirthday());
console.log(".......................");
console.log("CUrrent location");
console.log(profileNew.getCurrentLocation());
console.log(".......................");
console.log("College");
console.log(profileNew.getCollegeName());
console.log(".......................");
console.log("Work details");
console.log(profileNew.getWorkDetails());
console.log(".......................");
console.log("Relationship stautus");
console.log(profileNew.getRelationshipStatus());
console.log(".......................");
console.log("Full profile details");
console.log(totalInfo1.getprofileInfo());
