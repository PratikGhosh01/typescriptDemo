

//class containing video details
class Videos {
  private videoName:string;
  private noOfViews:number;
  private noOfLikes:number;
  private noOfDislikes:number;
  private datePublished:string;
  private description:string;
  private ageRestricted:boolean;
  private uplaodedBy:ChannelDetails;
  private tags:string;
  private relatedVideos:RelatedVid;
  private commentss:CommentsOnVids;
  

//constructor for class videos
  constructor (_videoName:string,_noOfViews:number,_noOfLikes:number,_noOfDislikes:number,_datePublished:string,_description:string,_ageRestricted:boolean,_uploadedBy:ChannelDetails,_tags:string,_relatedVideos:RelatedVid,_commentss:CommentsOnVids){
  this.videoName=_videoName;
  this.noOfViews=_noOfViews;
  this.noOfLikes=_noOfLikes;
  this.noOfDislikes=_noOfDislikes;
  this.datePublished=_datePublished;
  this.description=_description;
  this.ageRestricted=_ageRestricted;
  this.uplaodedBy=_uploadedBy;
  this.tags=_tags
  this.relatedVideos=_relatedVideos
  this.commentss=_commentss
  }
//related methods
  getvideoName=():string=>{
      return this.videoName
  }

  getnoOfViews=():number=>{
    return this.noOfViews
}

getnoOfLikes=():number=>{
    return this.noOfLikes
}

getnoOfDislikes=():number=>{
    return this.noOfDislikes
}


getdatePublished=():string=>{
    return this.datePublished
}

getdescription=():string=>{
    return this.description
}

  getChannelInfo=():ChannelDetails=>{
    return this.uplaodedBy
}

getrelatedVideos=():RelatedVid=>{
    return this.relatedVideos
}// end class

}
//class for Video comments
class CommentsOnVids{
    private comment : string
    private commentBy : ChannelDetails
    private likes : number
    private disLikes : number
    private commentTime : string
//constructor 
    constructor(_comment:string,_commentBy : ChannelDetails,_likes : number,_disLikes : number,_commentTime : string){
        this.comment=_comment;
        this.commentBy=_commentBy;
        this.likes=_likes;
        this.disLikes=_disLikes;
        this.commentTime=_commentTime
    }
//related methods
    getvcomment=():string=>{
        return this.comment
    }

    getcommentBy=():ChannelDetails=>{
        return this.commentBy
    }

    getvcommentLikes=():number=>{
        return this.likes
    }

    getvcommentDislikes=():number=>{
        return this.disLikes
    }

    getvcommentTime=():string=>{
        return this.commentTime
    }

}// end class

//class for channel details 
class ChannelDetails {
    private channelName:string;
    private noOfSubscribers:number;
    private category:string;
    private dateJoined:string;
    private licence:string;
//constructor
    constructor(_channelName:string,_noOfSubscribers:number,_category:string,_dateJoined:string,_licence:string){
        this.channelName=_channelName;
        this.noOfSubscribers=_noOfSubscribers;
        this.category=_category;
        this.dateJoined=_dateJoined;
        this.licence=_licence

    }
    //related methods
    getchannelName=():string=>{
        return this.channelName
    }

    getchannelSubscribers=():number=>{
        return this.noOfSubscribers
    }
    getchannelCategory=():string=>{
        return this.category
    }
    getchannelJoinDate=():string=>{
        return this.dateJoined
    }
    getchannelLicence=():string=>{
        return this.licence
    }
}// end class



//class to get related videos
class RelatedVid{
   private uploader:ChannelDetails;
   private videoName:string;
   private category:string;
   //constructor
   constructor(_uploader:ChannelDetails,_videoName:string, _category:string){ //add video class to vid name
       this.uploader=_uploader;
       this.videoName=_videoName;
       this.category=_category
   }
   //related methods
   getRelatedVideoName=():string=>{
    return this.videoName
}
    getRelatedVideoUploader=():ChannelDetails=>{
    return this.uploader
}
    getRelatedVideoCategory=():string=>{
    return this.category
}
}// end class



//class for displaying all the details of a video
class OverviewOfVideo{
    private videoDetails:Videos;
    //constructor
    constructor(_videoDetails:Videos){
    this.videoDetails=_videoDetails;
    }
    //related methods
    getOverviewOfVideo=()=>{
        return this.videoDetails
    }
}// end class

 

let jackseptic=new ChannelDetails("jackseptic",121,"games","12.9.2010","standard")
let comments_1=new CommentsOnVids("good video",jackseptic,123,45,"12.5.14")
let pewdeipie=new ChannelDetails("pewdeipie",120,"games","12.9.2011","standard")
let relatedVid1=new RelatedVid(jackseptic,"lets also play dark souls","games")
let darksouls=new Videos("lets play dark souls",1200,153,12,"16.5.2014","lets have fun ",true,pewdeipie,"dark souls",relatedVid1,comments_1)
let totalInfo=new OverviewOfVideo(darksouls)



//display to console
console.log("Name of video")
console.log(darksouls.getvideoName())
console.log(".......................")

console.log("Number of views")
console.log(darksouls.getnoOfViews())
console.log(".......................")

console.log("Number of likes")
console.log(darksouls.getnoOfLikes())
console.log(".......................")

console.log("Date uplaoded")
console.log(darksouls.getdatePublished())
console.log(".......................")

console.log("Details of the uplaoder")
console.log(darksouls.getChannelInfo())
console.log(".......................")

console.log("Full details of the video")
console.log(totalInfo.getOverviewOfVideo())
console.log(".......................")

console.log("Details of the related video")
console.log(darksouls.getrelatedVideos())

