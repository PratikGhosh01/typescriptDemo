//class containing video details
var Videos = /** @class */ (function () {
    //constructor for class videos
    function Videos(_videoName, _noOfViews, _noOfLikes, _noOfDislikes, _datePublished, _description, _ageRestricted, _uploadedBy, _tags, _relatedVideos, _commentss) {
        var _this = this;
        //related methods
        this.getvideoName = function () {
            return _this.videoName;
        };
        this.getnoOfViews = function () {
            return _this.noOfViews;
        };
        this.getnoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.getnoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.getdatePublished = function () {
            return _this.datePublished;
        };
        this.getdescription = function () {
            return _this.description;
        };
        this.getChannelInfo = function () {
            return _this.uplaodedBy;
        };
        this.getrelatedVideos = function () {
            return _this.relatedVideos;
        };
        this.videoName = _videoName;
        this.noOfViews = _noOfViews;
        this.noOfLikes = _noOfLikes;
        this.noOfDislikes = _noOfDislikes;
        this.datePublished = _datePublished;
        this.description = _description;
        this.ageRestricted = _ageRestricted;
        this.uplaodedBy = _uploadedBy;
        this.tags = _tags;
        this.relatedVideos = _relatedVideos;
        this.commentss = _commentss;
    }
    return Videos;
}());
//class for Video comments
var CommentsOnVids = /** @class */ (function () {
    //constructor 
    function CommentsOnVids(_comment, _commentBy, _likes, _disLikes, _commentTime) {
        var _this = this;
        //related methods
        this.getvcomment = function () {
            return _this.comment;
        };
        this.getcommentBy = function () {
            return _this.commentBy;
        };
        this.getvcommentLikes = function () {
            return _this.likes;
        };
        this.getvcommentDislikes = function () {
            return _this.disLikes;
        };
        this.getvcommentTime = function () {
            return _this.commentTime;
        };
        this.comment = _comment;
        this.commentBy = _commentBy;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.commentTime = _commentTime;
    }
    return CommentsOnVids;
}());
//class for channel details 
var ChannelDetails = /** @class */ (function () {
    //constructor
    function ChannelDetails(_channelName, _noOfSubscribers, _category, _dateJoined, _licence) {
        var _this = this;
        //related methods
        this.getchannelName = function () {
            return _this.channelName;
        };
        this.getchannelSubscribers = function () {
            return _this.noOfSubscribers;
        };
        this.getchannelCategory = function () {
            return _this.category;
        };
        this.getchannelJoinDate = function () {
            return _this.dateJoined;
        };
        this.getchannelLicence = function () {
            return _this.licence;
        };
        this.channelName = _channelName;
        this.noOfSubscribers = _noOfSubscribers;
        this.category = _category;
        this.dateJoined = _dateJoined;
        this.licence = _licence;
    }
    return ChannelDetails;
}());
//class to get related videos
var RelatedVid = /** @class */ (function () {
    //constructor
    function RelatedVid(_uploader, _videoName, _category) {
        var _this = this;
        //related methods
        this.getRelatedVideoName = function () {
            return _this.videoName;
        };
        this.getRelatedVideoUploader = function () {
            return _this.uploader;
        };
        this.getRelatedVideoCategory = function () {
            return _this.category;
        };
        this.uploader = _uploader;
        this.videoName = _videoName;
        this.category = _category;
    }
    return RelatedVid;
}());
//class for displaying all the details of a video
var OverviewOfVideo = /** @class */ (function () {
    //constructor
    function OverviewOfVideo(_videoDetails) {
        var _this = this;
        //related methods
        this.getOverviewOfVideo = function () {
            return _this.videoDetails;
        };
        this.videoDetails = _videoDetails;
    }
    return OverviewOfVideo;
}());
var jackseptic = new ChannelDetails("jackseptic", 121, "games", "12.9.2010", "standard");
var comments_1 = new CommentsOnVids("good video", jackseptic, 123, 45, "12.5.14");
var pewdeipie = new ChannelDetails("pewdeipie", 120, "games", "12.9.2011", "standard");
var relatedVid1 = new RelatedVid(jackseptic, "lets also play dark souls", "games");
var darksouls = new Videos("lets play dark souls", 1200, 153, 12, "16.5.2014", "lets have fun ", true, pewdeipie, "dark souls", relatedVid1, comments_1);
var totalInfo = new OverviewOfVideo(darksouls);
console.log("Name of video");
console.log(darksouls.getvideoName());
console.log(".......................");
console.log("Number of views");
console.log(darksouls.getnoOfViews());
console.log(".......................");
console.log("Number of likes");
console.log(darksouls.getnoOfLikes());
console.log(".......................");
console.log("Date uplaoded");
console.log(darksouls.getdatePublished());
console.log(".......................");
console.log("Details of the uplaoder");
console.log(darksouls.getChannelInfo());
console.log(".......................");
console.log("Full details of the video");
console.log(totalInfo.getOverviewOfVideo());
console.log(".......................");
console.log("Details of the related video");
console.log(darksouls.getrelatedVideos());
