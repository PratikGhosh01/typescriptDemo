
//class for Facebook profile details
class ProfileDetails {
    private name:string;
    private homeTown:string;
    private birthday:string;
    private currentLocation:string;
    private college:string;
    private work:string;
    private relationshipStatus:string;
    
    //constructor
    constructor(_name:string,_homeTown:string,_birthday:string,_currentLocation:string,
        _college:string,_work:string,_relationshipStatus:string){
        this.name=_name;
        this.homeTown=_homeTown;
        this.birthday=_birthday;
        this.currentLocation=_currentLocation;
        this.college=_college;
        this.work=_work;
        this.relationshipStatus=_relationshipStatus
    }
    //methods
     getName=():string=>{
        return this.name;
    }
    
     getHomeTown=():string=>{
        return this.homeTown;
    }

     getBirthday=():string=>{
        return this.birthday;
    }

     getCurrentLocation=():string=>{
        return this.currentLocation;
    }
   
     getRelationshipStatus=():string=>{
        return this.relationshipStatus;
    }
     getCollegeName=():string=>{
        return this.college;
    }
   
    getWorkDetails=():string=>{
        return this.work;
    }
   
  
    
}// end class

//class to display full profile details
class ViewFullInfo{
    private profileInfo:ProfileDetails;
    //constructor
    constructor(_profileInfo:ProfileDetails){
    this.profileInfo=_profileInfo;
    }
    //method
    getprofileInfo=()=>{
        return this.profileInfo
    }
}// end class



let profileNew=new ProfileDetails("Pratik Ghosh","Shillong","12.05.1993","Noida","NIT Meghalaya","Suvan ecommerce Ltd","single")

let totalInfo1=new ViewFullInfo(profileNew)





console.log("Name of user")
console.log(profileNew.getName())
console.log(".......................")

console.log("Hometown")
console.log(profileNew.getHomeTown())
console.log(".......................")

console.log("Birthday")
console.log(profileNew.getBirthday())
console.log(".......................")

console.log("CUrrent location")
console.log(profileNew.getCurrentLocation())
console.log(".......................")

console.log("College")
console.log(profileNew.getCollegeName())
console.log(".......................")

console.log("Work details")
console.log(profileNew.getWorkDetails())
console.log(".......................")

console.log("Relationship stautus")
console.log(profileNew.getRelationshipStatus())
console.log(".......................")

console.log("Full profile details")
console.log(totalInfo1.getprofileInfo())